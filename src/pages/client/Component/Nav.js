import React, { useState,useEffect } from "react";
import Input from "@material-ui/core/Input";
import shopApis from "../../../apis/ShopApis";
const Nav = () => {
  const [valueProduct, setValueProduct] = useState();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryData();
  }, []);
  const getCategoryData = async () => {
    try {
      const res = await shopApis.getCategoryList();
      console.log(res);
      if (res.status === 200) {
        setCategoryList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const chuyenDoiURL = (str) => {
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };
  const inputChange = (e) => {
    // prepare value
    let {
      target: { name: fieldName, value },
    } = e;
    setValueProduct(value);
    console.log("value", value);
  };

  return (
    <nav className="navbar navbar-expand-md bg-white navbar-light">
      <div className="container" style={{ paddingBottom: "0px" }}>
        <div
          class="navbar-logo"
          style={{
            width: "60px",
            height: "60",
            marginLeft: "30px",
            paddingTop: "0px",
            marginBottom: "0px",
          }}
        >
          <img
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
            src="https://res.cloudinary.com/hanh/image/upload/v1634066828/products/cge2hp4d7bctkrtw1rdj.png"
            alt=""
          />
        </div>
        <a
          className="navbar-brand"
          href="/"
          style={{ color: "#64ae55", marginLeft: "20px" }}
        >
          <b>Nhà Sách KG</b>
        </a>
        {/* navbar-toggler  */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{marginTop:'3%'}}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
       
          {/* form tìm kiếm  */}
          <form className="form-inline ml-auto my-2 my-lg-0 mr-3">
              <div className="input-group" style={{width: '630px'}}>
                <input type="text" className="form-control" aria-label="Small" onChange={inputChange} value={valueProduct} placeholder="Nhập sách cần tìm kiếm..." />
                {/* <Input    type="text"
                          name="name"
                          className="form-control" aria-label="Small"
                          placeholder="Nhập sách cần tìm kiếm..."
                          onChange={inputChange}
                          value={valueProduct}/> */}
                <div className="input-group-append">
                  <a type="button" className="btn" href={"/ket-qua/"+valueProduct} style={{backgroundColor: '#64ae55', color: 'white'}}>
                    <i className="fa fa-search" />
                  </a>
                  {/* <ProductSearchList value={valueProduct}></ProductSearchList> */}
                </div>
              </div>
            </form>
            <ul className="navbar-nav mb-1 ml-auto">
          <li className="nav-item giohang">
          <div className="smallmenu">
                <input type="checkbox" id="overlay-input" />
          <label for="overlay-input" id="overlay-button"><span></span></label>
          <label className="Mobile_name" >Danh Mục Sách</label>
            <div id="overlay">
            <ul id="accordion" class="accordion">
                {categoryList
                 .filter((item, idx) => idx < 11)
                 .map((value, index) =>
                
                  <li>
                    <div class="link"><i class="fa fa-database"></i>{value.name}</div>
                    {/* <ul class="submenu" style={{display:'none'}}>
                      <li><a href="#">Photoshop</a></li>
                      <li><a href="#">HTML</a></li>
                      <li><a href="#">CSS</a></li>
                    </ul> */}
                  </li>
                 )}
</ul>
            </div>
            </div>
            </li>
          </ul>


          <ul className="navbar-nav mb-1 ml-auto">
            
            <li className="nav-item giohang">
              <a href="/gio-hang" className="btn btn-secondary rounded-circle">
                <i className="fa fa-shopping-cart" />
                
              </a>
              <a className="nav-link text-dark giohang text-uppercase" href="/gio-hang" style={{display: 'inline-block'}}>Giỏ
                Hàng</a>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Nav;
