import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";
import { useHistory, Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import alert from "../../../utils/Alert";
import CartItem from "./Cart/CartItem";
import RadioOptionGroup from "./Radio/RadioOptionGroup";
const listDeliveryType = [
  {
    _id: "delivery_1",
    label: "Nhận hàng tại nhà sách",
    value: 0
  },
  {
    _id: "delivery_2",
    label: "Giao hàng nội thành",
    value: 20000
  },
  {
    _id: "delivery_3",
    label: "Giao hàng ngoại thành",
    value: 50000,
  }
]
const Receipt = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [Value, setValue] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const [detail, setDetail] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [delivery, setDelivery] = useState(listDeliveryType[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tempPrice, setTempPrice] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };
  const handleDeliveryChange = (value) => {
    setDelivery(listDeliveryType.find(element => element.value == value));
    if (value > 0) {
      setShowAddress(true);
    } else {
      setShowAddress(false);
      setAddress("");
    }

  };
  const handleChangeCheckbox = (index, value) => {

    let temp = Value;
    temp[index].checked = value;
    setValue([...temp]);
    localStorage.setItem("Cart", JSON.stringify(temp));
  }
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("Cart"));
    if (temp) {
      checkDataProductExist(temp);
    }
  }, []);

  useEffect(() => {
    caculateTotalPrice();
  }, [Value, delivery]);

  const checkDataProductExist = async (data) => {
    let temp = [];
    for (let value of data) {
      try {
        const res = await shopApis.getProductDetail(value.id);
        if (res.status === 200) {
          temp.push(value);
        }
      } catch (e) { }
    }
    setValue([...temp]);
  };

  const checkProductExist = async (id) => {
    try {
      const res = await shopApis.getProductDetail(id);
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) { }
  };



  const payment = async () => {
    let formValue = [];
    let temp = [];
    Value.map((value, index) => {
      if (value.checked) {
        formValue.push({
          id: value.id,
          parameter: value.parameter,
          count: value.count
        })
      } else {
        temp.push(value);
      }
    });
    let formData = {
      name: name,
      phone: phone,
      address: address,
      delivery: delivery.label,
      detail: detail,
      product: formValue,
    };

    const res = await shopApis.createReceipt(formData);
    if (res.status === 200) {
      alert({
        icon: "success",
        title: "Đặt hàng thành công",
        msg: "Cảm ơn quý khách đã ủng hộ",
      });
      setValue([...temp]);
      localStorage.setItem("Cart", JSON.stringify(temp));
      // localStorage.removeItem("Cart");
      history.push("/");
    } else {
      alert({ icon: "error", title: "Đã có lỗi xảy ra" });
    }
  };

  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  const caculateTotalPrice = () => {
    let total = 0;
    if (Value.length) {
      Value.map((value) => {
        if (value.checked == true) {
          total += Number(value.price) * Number(value.count);
        }
      });
      setTempPrice(total);
      total += delivery.value;
    }
    setTotalPrice(total);
  };



  const CartDisplay = (props) => {
    if (!Value.length) {
      return (
        <div className="row mx-0" style={{ background: "#F0F0F0", height: "250px" }}>
          <div className="col-12 cart-empty" style={{ background: "white" }}>
            <div className="py-3 pl-3">
              <h6 className="header-gio-hang">
                GIỎ HÀNG CỦA BẠN <span>(0 sản phẩm)</span>
              </h6>
              <div className="cart-empty-content w-100 text-center justify-content-center">
                <img
                  src="images/shopping-cart-not-product.png"
                  alt="shopping-cart-not-product"
                />
                <div className="text-center mt-2">
                  Chưa có sản phẩm nào trong giỏ hàng của bạn
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row mx-0" style={{ background: "#F0F0F0" }}>
          <div className="col-lg-8 cart" style={{ background: "white" }}>
            <div className="cart-content py-3 pl-3">
              <h5 className="header-gio-hang font-weight-bold">
                GIỎ HÀNG CỦA BẠN <span>({Value.length} sản phẩm)</span>
              </h5>
              <div className="d-flex subtitle-container">
                <div className="subtitle block-product">
                  <p>Sản Phẩm</p>
                </div>
                <div className="subtitle block-price ml-auto d-none d-md-block">
                  <p className="text-center">Đơn Giá</p>
                </div>
                <div className="subtitle block-number d-none d-md-block">
                  <p className="text-center">Số Lượng</p>
                </div>
                <div className="subtitle block-total-price d-none d-md-block">
                  <p className="text-right">Thành Tiền</p>
                </div>
                <div className="block-delete"></div>
              </div>
              {Value.map((value, index) => (
                <CartItem itemvalue={value}
                  listvalue={Value}
                  setvalue={setValue}
                  key={index} index={index}
                  open={handleOpenBackdrop}
                  close={handleCloseBackdrop}
                  checkproductexist={checkProductExist}
                  changeCheckbox={handleChangeCheckbox}
                  handleBadge={props.handleBadge}
                />
              ))}
              <div className="row">
                <div className="col-md-3">
                  <Link className="btn nutmuathem mb-3" to="/">
                    Mua thêm
                  </Link>
                </div>
                <div className="col-md-5 offset-md-4">
                  <div className="tonggiatien">
                    <div className="group d-flex justify-content-between">
                      <p className="label">Tạm tính:</p>
                      <p className="tamtinh">{formatCurrency(tempPrice)}₫</p>
                    </div>
                    <div className="group d-flex justify-content-between">
                      <p className="label">Giảm giá:</p>
                      <p className="giamgia">0₫</p>
                    </div>
                    <div className="group d-flex justify-content-between">
                      <p className="label">Phí vận chuyển:</p>
                      <p className="phivanchuyen">{formatCurrency(delivery.value)}₫</p>
                    </div>
                    <div className="group d-flex justify-content-between">
                      <p className="label">Phí dịch vụ:</p>
                      <p className="phidicvu">0₫</p>
                    </div>
                    <div className="group d-flex justify-content-between align-items-center">
                      <strong className="text-uppercase">Tổng cộng:</strong>
                      <p className="tongcong">{formatCurrency(totalPrice)}₫</p>
                    </div>
                    <small className="note d-flex justify-content-end text-muted">
                      (Giá đã bao gồm VAT)
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 cart-steps pl-0" style={{ padding: "0px" }}>
            <div
              id="cart-steps-accordion"
              role="tablist"
              aria-multiselectable="true"
            >

              {/* bước số 2: nhập địa chỉ giao hàng  */}
              <div className="card ml-0 mr-0 ml-lg-2 mt-2 mt-lg-0">


                <div role="tabpanel" aria-labelledby="step2header">
                  <div className="card-body">
                    <div className="pttt">
                      <h5 className="header font-weight-bold text-center">
                        Chọn phương thức giao hàng
                      </h5>
                      <RadioOptionGroup listoption={listDeliveryType} name="deliveryType" value={delivery.value} onChange={handleDeliveryChange}></RadioOptionGroup>
                    </div>
                    <hr />
                    <p
                      className="label font-weight-bold text h5 my-3 text-center"
                    >
                      Địa chỉ giao hàng
                    </p>

                    <form className="form-diachigiaohang">
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="Nhập họ và tên"
                          name="name"
                          required
                          autoFocus={true}
                        />
                      </div>
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputPhone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="form-control"
                          placeholder="Nhập số điện thoại"
                          name="phone"
                          required
                        />
                      </div>
                      {/* <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Nhập địa chỉ email" name="email" required />
                  </div> */}
                      {showAddress ? <div className="form-label-group">
                        {/* <input
                          type="text"
                          id="inputAddress"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control"
                          placeholder="Nhập Địa chỉ giao hàng"
                          name="address"
                          required
                        /> */}
                        <textarea
                          type="text"
                          id="inputAddress"
                          className="form-control"
                          placeholder="Nhập Địa chỉ giao hàng"
                          name="address"
                          defaultValue={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div> : <></>}
                      <div className="form-label-group">
                        <textarea
                          type="text"
                          id="inputNote"
                          className="form-control"
                          placeholder="Nhập ghi chú (Nếu có)"
                          name="note"
                          onChange={(e) => setDetail(e.target.value)}
                          defaultValue={detail}
                        />
                      </div>
                    </form>

                    <div className="card-body" style={{ padding: "15px" }}>
                      {/* <div className="goigiaohang">
                    <h6 className="header text-uppercase">Chọn gói giao hàng</h6>
                    <div className="option">
                      <input type="radio" name="goigiaohang" id="ghtc" defaultChecked />
                      <label htmlFor="ghtc">Giao hàng tiêu chuẩn</label>
                      <p>Từ 1-3 ngày tại TP. Hồ Chí Minh; từ 3-5 ngày đối với các Tỉnh /
                        Thành khác</p>
                    </div>
                    <div className="option">
                      <input type="radio" name="goigiaohang" id="ghn" />
                      <label htmlFor="ghn">Giao hàng nhanh</label>
                      <p>1 ngày tại TP. Hồ Chí Minh; từ 2-3 ngày đối với các Tỉnh / Thành
                        khác</p>
                    </div>
                  </div> */}




                      <button
                        className="btn btn-lg btn-block btn-checkout text-uppercase text-white"
                        onClick={() => payment()}
                        style={{ background: "#F5A623" }}
                      >
                        Đặt mua
                      </button>
                     
                    </div>
                    <p className="text-center note-before-checkout">
                        (Vui lòng kiểm tra lại đơn hàng trước khi Đặt Mua)
                      </p>
                  </div>
                </div>

                {/* bước 3: thanh toán đặt mua  */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="main-container my-3 font-roboto" >
      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* giao diện giỏ hàng  */}
      <section className="content " style={{ background: "#F0F0F0" }}>
        <div
          className="recept_Ip "
          style={{ background: "#F0F0F0" }}
        >
          <div className="cart-page bg-white" style={{ background: "#F0F0F0" }}>
            {/* het row  */}
            <CartDisplay handleBadge={props.handleBadge}></CartDisplay>
          </div>
        </div>
        {/* het cart-page  */}

        {/* het container  */}
      </section>
      {/* het khoi content  */}
      {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
      <div className="fixed-bottom">
        <div
          className="btn btn-warning float-right rounded-circle nutcuonlen"
          id="backtotop"
          href="#"
          style={{ background: "#64ae55" }}
        >
          <i className="fa fa-chevron-up text-white" />
        </div>
      </div>

    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default Receipt;
