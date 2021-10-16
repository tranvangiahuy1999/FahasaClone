import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import shopApis from "../../../apis/ShopApis";
import { useHistory, Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import alert from "../../../utils/Alert";

const Receipt = () => {
  const history = useHistory();
  const classes = useStyles();
  const [Value, setValue] = useState([]);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [delivery, setDelivery] = useState("Nhận hàng tại nhà sách");
  const [totalPrice, setTotalPrice] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("Cart"));
    if (temp) {
      checkDataProductExist(temp);
    }
  }, []);

  useEffect(() => {
    caculateTotalPrice();
  }, [Value]);

  const checkDataProductExist = async (data) => {
    let temp = [];
    for (let value of data) {
      try {
        const res = await shopApis.getProductDetail(value.id);
        if (res.status === 200) {
          temp.push(value);
        }
      } catch (e) {}
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
    } catch (e) {}
  };

  const deleteRowHandle = (index) => {
    let temp = Value;
    temp.splice(index, 1);
    setValue([...temp]);
    localStorage.setItem("Cart", JSON.stringify(temp));
  };

  const payment = async () => {
    Value.map((value, index) => {
      delete value.name;
      delete value.price;
      delete value.image;
    });

    let formData = {
      name: name,
      phone: phone,
      address: address,
      delivery: delivery,
      product: Value,
    };

    const res = await shopApis.createReceipt(formData);
    if (res.status === 200) {
      alert({
        icon: "success",
        title: "Đặt hàng thành công",
        msg: "Cảm ơn quý khách đã ủng hộ",
      });
      localStorage.removeItem("Cart");
      history.push("/");
    } else {
      alert({ icon: "error", title: "Đã có lỗi xảy ra" });
    }
  };

  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  const handleChangeQuantity = async (event, index) => {
    let temp = Value;
    handleOpenBackdrop();
    if (await checkProductExist(temp[index].id)) {
      if (event === "in") {
        temp[index].count += 1;
      } else {
        if (temp[index].count - 1 < 1) {
          handleCloseBackdrop();
          return;
        }
        temp[index].count -= 1;
      }
      setValue([...temp]);
      localStorage.setItem("Cart", JSON.stringify(temp));
    } else {
      alert({
        icon: "error",
        title: "Sản phẩm không tồn tại",
        msg: "Vui lòng xóa sản phẩm khỏi giỏ hàng",
      });
    }
    handleCloseBackdrop();
  };

  const caculateTotalPrice = () => {
    let total = 0;
    if (Value.length) {
      Value.map((value) => {
        total += Number(value.price) * Number(value.count);
      });
    }
    setTotalPrice(total);
  };

  const CartDisplay = () => {
    if (!Value.length) {
      return (
        <div className="row" style={{ background: "#F0F0F0" }}>
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
        <div className="row" style={{ background: "#F0F0F0" }}>
          <div className="col-md-8 cart" style={{ background: "white" }}>
            <div className="cart-content py-3 pl-3">
              <h6 className="header-gio-hang">
                GIỎ HÀNG CỦA BẠN <span>({Value.length} sản phẩm)</span>
              </h6>
              {Value.map((value, index) => (
                <div className="cart-list-items" key={index}>
                  <div className="cart-item d-flex">
                    <a href="product-item.html" className="img">
                      <img
                        src={value.image}
                        className="img-fluid"
                        alt="anhsp1"
                      />
                    </a>
                    <div className="item-caption d-flex w-100">
                      <div className="item-info ml-3">
                        <a href="product-item.html" className="ten">
                          {value.name}
                        </a>
                        <div className="soluong d-flex">
                          <div className="input-number input-group mb-3">
                            <div
                              className="input-group-prepend"
                              onClick={() => handleChangeQuantity("de", index)}
                            >
                              <span className="input-group-text btn-spin btn-dec">
                                -
                              </span>
                            </div>
                            <input
                              type="text"
                              style={{ height: "86%" }}
                              value={value.count}
                              className="soluongsp  text-center"
                            />
                            <div
                              className="input-group-append"
                              onClick={() => handleChangeQuantity("in", index)}
                            >
                              <span className="input-group-text btn-spin btn-inc">
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="element btn btn-outline-success"
                      >
                        {value.nameParam}
                      </button>
                      <div className="item-price ml-auto d-flex flex-column align-items-end">
                        <div className="giamoi">
                          {formatCurrency(
                            Number(value.price) * Number(value.count)
                          )}
                          ₫
                        </div>

                        <span className="remove mt-auto">
                          <i
                            onClick={() => deleteRowHandle(index)}
                            className="far fa-trash-alt"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
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
                      <p className="tamtinh">{formatCurrency(totalPrice)}₫</p>
                    </div>
                    <div className="group d-flex justify-content-between">
                      <p className="label">Giảm giá:</p>
                      <p className="giamgia">0₫</p>
                    </div>
                    <div className="group d-flex justify-content-between">
                      <p className="label">Phí vận chuyển:</p>
                      <p className="phivanchuyen">0₫</p>
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
          <div className="col-md-4 cart-steps pl-0" style={{ padding: "0px" }}>
            <div
              id="cart-steps-accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {/* bước số 2: nhập địa chỉ giao hàng  */}
              <div className="card">
                <span
                  style={{
                    textAlign: "center",
                    paddingTop: "15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  className="label"
                >
                  Địa chỉ giao hàng
                </span>

                <div role="tabpanel" aria-labelledby="step2header">
                  <div className="card-body">
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
                          autofocus
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
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputAddress"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="form-control"
                          placeholder="Nhập Địa chỉ giao hàng"
                          name="address"
                          required
                        />
                      </div>
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputCity"
                          className="form-control"
                          placeholder="Nhập Tỉnh/Thành phố"
                          name="city"
                          required
                        />
                      </div>
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputDistrict"
                          className="form-control"
                          placeholder="Nhập Quận/Huyện"
                          name="district"
                          required
                        />
                      </div>
                      <div className="form-label-group">
                        <textarea
                          type="text"
                          id="inputNote"
                          className="form-control"
                          placeholder="Nhập ghi chú (Nếu có)"
                          name="note"
                          defaultValue={""}
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
                      <hr />
                      <div className="pttt">
                        <h6 className="header text-uppercase">
                          Chọn phương thức thanh toán
                        </h6>
                        <div className="option mb-2">
                          <input
                            type="radio"
                            value={delivery}
                            name="pttt"
                            id="cod"
                            defaultChecked
                          />
                          <label htmlFor="cod">
                            Thanh toán bằng tiền mặt khi nhận hàng
                          </label>
                        </div>
                        <div className="option option2">
                          <input type="radio" name="pttt" id="atm" />
                          <label htmlFor="atm" className="chuyenkhoan">
                            Thanh toán chuyển khoản trước qua Thẻ ATM/Internet
                            Banking
                          </label>
                          <p className="mt-4">
                            - Quý khách chỉ chuyển khoản khi được xác nhận có đủ
                            sách qua điện thoại từ DealBook.
                          </p>
                          <p>
                            - Thời gian chuyển khoản là trong tối đa 2 ngày từ
                            khi có xác nhận đủ sách.
                          </p>
                          <p>
                            - Nội dung chuyển khoản cần ghi:{" "}
                            <a href="#">[Mã đơn hàng]</a> ; hoặc{" "}
                            <a href="#">[số điện thoại dùng đặt hàng]</a>{" "}
                          </p>
                          <p>
                            - Xem thông tin chuyển khoản của NetaBooks{" "}
                            <a href="phuong-thuc-thanh-toan.html">tại đây</a>{" "}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <button
                        className="btn btn-lg btn-block btn-checkout text-uppercase text-white"
                        onClick={() => payment()}
                        style={{ background: "#F5A623" }}
                      >
                        Đặt mua
                      </button>
                      <p className="text-center note-before-checkout">
                        (Vui lòng kiểm tra lại đơn hàng trước khi Đặt Mua)
                      </p>
                    </div>
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
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Nav />
      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* giao diện giỏ hàng  */}
      <section className="content my-3" style={{ background: "#F0F0F0" }}>
        <div
          className="container recept_Ip "
          style={{ background: "#F0F0F0", width: "81%" }}
        >
          <div className="cart-page bg-white" style={{ background: "#F0F0F0" }}>
            {/* het row  */}
            {CartDisplay()}
          </div>
        </div>
        {/* het cart-page  */}

        {/* het container  */}
      </section>
      {/* het khoi content  */}
      {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}

      <section
        className="abovefooter text-white"
        style={{ marginBottom: "-1%", background: "#F0F0F0", padding: "1%" }}
      >
        <div
          className="container footer_detail"
          style={{ backgroundColor: "#64ae55", width: "82%" }}
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="dichvu d-flex align-items-center">
                <img src="/images/icon-books.png" alt="icon-books" />
                <div className="noidung">
                  <h6 className="tieude font-weight-bold">
                    HƠN 14.000 TỰA SÁCH HAY
                  </h6>
                  <p className="detail">Tuyển chọn bởi DealBooks</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="dichvu d-flex align-items-center">
                <img src="/images/icon-ship.png" alt="icon-ship" />
                <div className="noidung">
                  <h6 className="tieude font-weight-bold">
                    MIỄN PHÍ GIAO HÀNG
                  </h6>
                  <p className="detail">Từ 150.000đ ở TP.HCM</p>
                  <p className="detail">Từ 300.000đ ở tỉnh thành khác</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="dichvu d-flex align-items-center">
                <img src="/images/icon-gift.png" alt="icon-gift" />
                <div className="noidung">
                  <h6 className="tieude font-weight-bold">QUÀ TẶNG MIỄN PHÍ</h6>
                  <p className="detail">Tặng Bookmark</p>
                  <p className="detail">Bao sách miễn phí</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="dichvu d-flex align-items-center">
                <img src="/images/icon-return.png" alt="icon-return" />
                <div className="noidung">
                  <h6 className="tieude font-weight-bold">
                    ĐỔI TRẢ NHANH CHÓNG
                  </h6>
                  <p className="detail">Hàng bị lỗi được đổi trả nhanh chóng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer/>
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
