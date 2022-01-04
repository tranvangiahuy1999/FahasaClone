import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";
import { useHistory, Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { styled, makeStyles } from "@material-ui/core/styles";
import alert from "../../../utils/Alert";
import CartItem from "./Cart/CartItem";
import RadioOptionGroup from "./Radio/RadioOptionGroup";
import { formatCurrency } from "../../../utils/format-string.util";
import { countWords, isPhoneNumber } from "../../../utils/Helper";
import { TextField, Box } from "@material-ui/core";
const InputText = styled(TextField)({
  width: '100%',
  '& input': {
    padding: '.375rem .75rem',
    lineHeight: 1.75,
    height: 'unset'
  },
  '& .Mui-error': {
    '& input': {
      borderColor: "#f44336",
    }
  },
  '& fieldset': {
    top: '0px',
  },
  '& .MuiFormHelperText-contained': {
    marginLeft: '.75rem',
    marginRight: '.75rem'
  }
})
const listDeliveryType = [
  {
    _id: "delivery_1",
    label: "Nhận hàng tại nhà sách",
    value: 0,
    display: 0
  },
  {
    _id: "delivery_2",
    label: "Giao hàng nội thành",
    value: 10000,
    display: 10000
  },
  {
    _id: "delivery_3",
    label: "Giao hàng ngoại thành",
    value: -1,
    display: "Sẽ được liên hệ lại!"
  }
]
const Receipt = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [Value, setValue] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [delivery, setDelivery] = useState(listDeliveryType[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tempPrice, setTempPrice] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [fullNameMessageError, setFullNameMessageError] = useState("");
  const [addressMessageError, setAddressMessageError] = useState("");
  const [noteMessageError, setNoteMessageError] = useState("");
  const [phoneMessageError, setPhoneMessageError] = useState("");
  const [isFormError, setIsFormError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [disableButtonSubmit, setDisableButtonSubmit] = useState(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };
  const handleDeliveryChange = (value) => {
    setDelivery(listDeliveryType.find(element => element.value == value));
    if (value > 0 || value == -1) {
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
  const isValidFullName = (str) => {
    var result = true;
    if (!str || str == "") {
      setFullNameMessageError("Vui lòng nhập họ tên.");
      result = false;
    }
    else if (str.length > 50) {
      setFullNameMessageError("Vui lòng nhập họ tên hợp lệ, tối đa 50 ký tự.");
      result = false;
    } else {
      setFullNameMessageError("");
    }
    setName(str);
    return result
  }
  const isValidPhone = (str) => {
    var result = true;
    if (str == "") {
      setPhoneMessageError("Vui lòng nhập số điện thoại.");
      result = false;
    }
    else if (!isPhoneNumber(str)) {
      setPhoneMessageError("Số điện thoại hợp lệ. Vui lòng nhập lại.");
      result = false;
    } else {
      setPhoneMessageError("");
    }
    setPhone(str);
    return result
  }
  const isValidAddress = (str) => {
    var result = true;
    if (!str || str == "") {
      setAddressMessageError("Vui lòng nhập địa chỉ.");
      result = false;
    } else if (str.length > 1500) {
      setAddressMessageError("Vui lòng nhập địa chỉ hợp lệ, tối đa 1500 ký tự.");
      result = false;
    } else {
      setAddressMessageError("");
    }
    setAddress(str);
    return result
  }
  const isValidNote = (str) => {
    var result = true;
    if (str.length > 500) {
      setNoteMessageError("Vui lòng nhập ghi chú hợp lệ, tối đa 500 ký tự");
      result = false;
    } else {
      setNoteMessageError("");
    }
    setNote(str);
    return result
  }
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("Cart"));
    if (temp) {
      checkDataProductExist(temp);
    }else{
      setLoader(false);
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
    setLoader(false);
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

  const checkPayment = () => {
    if (isValidFullName(name) && isValidPhone(phone) && isValidNote(note)) {
      if (delivery.label == "Giao hàng nội thành" || delivery.label == "Giao hàng nội thành") {
        if (isValidAddress(address))
          return true;
        else
          return false;
      }
      else
        return true;
    }
    return false;
  }
  const payment = async () => {
    setDisableButtonSubmit(true);
    if (checkPayment()) {
      setIsFormError(false);
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
        detail: note,
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
        props.handleBadge();
        // localStorage.removeItem("Cart");
        history.push("/");
      } else {
        alert({ icon: "error", title: "Đã có lỗi xảy ra" });
      }
    }
    setDisableButtonSubmit(false);
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
      if(delivery.label !== "Giao hàng ngoại thành")
        total += delivery.value;
    }
    setTotalPrice(total);
  };



  const CartDisplay = (props) => {
    return (
      loader ?
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
          <CircularProgress color="inherit" />
        </Box>
        :
        (!Value.length ? <div className="row mx-0" style={{ background: "#F0F0F0", height: "250px" }}>
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
        </div> :
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
                        <p className="phivanchuyen">{delivery._id == "delivery_3" ? delivery.display : (formatCurrency(delivery.value) + "đ")}</p>
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

                      <form className="form-delivery-address">
                        <div className="form-label-group">
                          {/* <input
                    type="text"
                    id="inputName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Nhập họ và tên"
                    name="name"
                    required
                    autoFocus={true}
                  /> */}
                          <InputText
                            error={(fullNameMessageError != "") ? true : false}
                            helperText={fullNameMessageError}
                            id="inputFullName"
                            name="fullName"
                            placeholder="Nhập họ và tên"
                            defaultValue={name}
                            onBlur={(e) => isValidFullName(e.target.value)}
                            variant="outlined"
                          />
                        </div>
                        <div className="form-label-group">
                          <InputText
                            error={(phoneMessageError != "") ? true : false}
                            helperText={phoneMessageError}
                            id="inputPhone"
                            name="phone"
                            placeholder="Nhập số điện thoại"
                            defaultValue={phone}
                            onBlur={(e) => isValidPhone(e.target.value)}
                            variant="outlined"
                          />
                        </div>
                        {/* <div className="form-label-group">
              <input type="email" id="inputEmail" className="form-control" placeholder="Nhập địa chỉ email" name="email" required />
            </div> */}
                        {showAddress ? <div className="form-label-group">
                          <InputText
                            error={(addressMessageError != "") ? true : false}
                            helperText={addressMessageError}
                            id="inputAddress"
                            name="address"
                            placeholder="Nhập Địa chỉ giao hàng"
                            defaultValue={address}
                            onBlur={(e) => isValidAddress(e.target.value)}
                            variant="outlined"
                            multiline
                            rows={2}
                          />
                        </div> : <></>}
                        <div className="form-label-group">
                          <InputText
                            error={(noteMessageError != "") ? true : false}
                            helperText={noteMessageError}
                            id="inputNote"
                            name="note"
                            placeholder="Nhập ghi chú (Nếu có)"
                            defaultValue={note}
                            onBlur={(e) => isValidNote(e.target.value)}
                            variant="outlined"
                            multiline
                            rows={4}
                          />
                        </div>
                      </form>

                      <div className="card-body" style={{ padding: "15px" }}>
                        
                        <button
                          className="btn btn-lg btn-block btn-checkout text-uppercase text-white"
                          onClick={() => payment()}
                          style={{ background: "#F5A623" }}
                          disabled={disableButtonSubmit}
                        >
                        {
                          disableButtonSubmit ? <CircularProgress color="inherit" /> :  "Đặt mua"
                        }
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
        )
    )
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
