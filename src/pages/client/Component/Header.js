import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";
import ProductList from "./ProductList";
const Header = () => {
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

  return (
    <div>
      {/* thanh tieu de "danh muc sach" + hotline + ho tro truc tuyen */}
      <section className="duoinavbar">
        <div
          className="container  text-white"
          style={{ background: "white", width: "81%" }}
        >
          <div className="row justify">
            <div className="col-lg-3 md-12" style={{ padding: "0%" }}>
              <div className="categoryheader" style={{marginLeft:'0%'}}>
                <div className="noidungheader text-white">
                  <i
                    className="fa fa-bars"
                    id=" menuId"
                    style={{ marginRight: "10px" }}
                  />
                  <span className="text-uppercase font-weight-bold ml-1">
                    Danh mục sách
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      {/* noi dung danh muc sach(categories) + banner slider */}
      <section className="header " style={{ background: "#F0F0F0" }}>
        <div
          className="container slidebar"
          style={{ background: "white", width: "81%" }}
        >
          <div className="row">
            <div className="col-lg-3" style={{ padding: "0%" }}>
              {/* CATEGORIES */}
              <div className="categorycontent display">
                <ul>
                  {categoryList.length ? (
                    categoryList
                      .filter((item, idx) => idx < 11)
                      .map((value, index) => (
                        <li key={index}>
                          {" "}
                          <a
                            href={
                              "/danh-sach/" +
                              chuyenDoiURL(value.name) +
                              "." +
                              value._id
                            }
                            className="tieude"
                          >
                            {" "}
                            {value.name}
                          </a>
                          <i className="fa fa-chevron-right icon float-right" />
                          <ul className="categorydetail container">
                            <div className="row " style={{ height: "185px" }}>
                              {value.subCate.length ? (
                                value.subCate
                                  .filter((item, idx) => idx < 6)
                                  .map((value, index) => (
                                    <div className="col-4" key={index}>
                                      <li className="liheader1">
                                        <a
                                          href={
                                            "/danh-sach/" +
                                            chuyenDoiURL(value.name) +
                                            "." +
                                            value._id
                                          }
                                          className="header text-uppercase"
                                          style={{
                                            color: "black",
                                            fontWeight: "600",
                                          }}
                                        >
                                          {" "}
                                          {value.name}
                                        </a>
                                      </li>
                                      <div
                                        className="content trai"
                                        style={{
                                          marginTop: "-10px",
                                          marginLeft: "17px",
                                        }}
                                      >
                                        {value.subCate.length ? (
                                          value.subCate
                                            .filter((item, idx) => idx < 5)
                                            .map((value, index) => (
                                              <li key={index}>
                                                <a
                                                  href={
                                                    "/danh-sach/" +
                                                    chuyenDoiURL(value.name) +
                                                    "." +
                                                    value._id
                                                  }
                                                >
                                                  {value.name}
                                                </a>
                                              </li>
                                            ))
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </div>
                                  ))
                              ) : (
                                <></>
                              )}
                            </div>
                          </ul>
                        </li>
                      ))
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
            {/* banner slider  */}
            <div className="col-lg-9 md-12 px-0">
              <div
                id="carouselId"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="nutcarousel carousel-indicators rounded-circle">
                  <li
                    data-target="#carouselId"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#carouselId" data-slide-to={1} />
                  <li data-target="#carouselId" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" style={{ marginTop: "-40px" }}>
                  <div className="carousel-item active">
                    <a href="#">
                      <img
                        src="images/banner-sach-moi.jpg"
                        className="img-fluid"
                        style={{ height: "427px", width: "100%" }}
                        alt="First slide"
                      />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="#">
                      <img
                        src="images/banner-beethoven.jpg"
                        className="img-fluid"
                        style={{ height: "427px", width: "100%" }}
                        alt="Second slide"
                      />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="#">
                      <img
                        src="images/neu-toi-biet-duoc-khi-20-full-banner.jpg"
                        className="img-fluid"
                        style={{ height: "427px", width: "100%" }}
                        alt="Third slide"
                      />
                    </a>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselId"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselId"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
