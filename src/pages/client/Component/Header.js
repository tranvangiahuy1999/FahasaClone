import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";

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
  return (
    <div>
      {/* thanh tieu de "danh muc sach" + hotline + ho tro truc tuyen */}
      <section className="duoinavbar" >
        <div className="container text-white">
          <div className="row justify">
            <div className="col-md-3">
              <div className="categoryheader">
                <div className="noidungheader text-white">
                  <i className="fa fa-bars" id=" menuId" />
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
      <section className="header " style={{background:'#F0F0F0 '}}>
        <div className="container">
          <div className="row">
            <div
              className="col-md-3"
              style={{ marginRight: "0px", paddingLeft: "35px" }}
            >
              {/* CATEGORIES */}
              <div className="categorycontent display">
                <ul>
                  {categoryList.length ? (
                    categoryList
                      .filter((item, idx) => idx < 11)
                      .map((value, index) => (
                        <li key={index}>
                          {" "}
                          <a href="/danh-sach" className="tieude">
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
                                          href="/danh-sach"
                                          className="header text-uppercase"
                                        >
                                          {" "}
                                          {value.name}
                                        </a>
                                      </li>
                                      <div className="content trai">
                                        {value.subCate.length ? (
                                          value.subCate
                                            .filter((item, idx) => idx < 5)
                                            .map((value, index) => (
                                              <li key={index}>
                                                <a href="/danh-sach">
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
            <div className="col-md-9 px-0" width="965px">
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
                <div
                  className="carousel-inner"
                  width="950px"
                  style={{ marginTop: "-40px" }}
                >
                  <div className="carousel-item active" width="800px">
                    <a href="#">
                      <img
                        src="images/banner-sach-moi.jpg"
                        className="img-fluid"
                        style={{ height: "427px" }}
                        width="950px"
                        alt="First slide"
                      />
                    </a>
                  </div>
                  <div className="carousel-item" width="950px">
                    <a href="#">
                      <img
                        src="images/banner-beethoven.jpg"
                        className="img-fluid"
                        style={{ height: "427px" }}
                        width="950px"
                        alt="Second slide"
                      />
                    </a>
                  </div>
                  <div className="carousel-item" width="950px">
                    <a href="#">
                      <img
                        src="images/neu-toi-biet-duoc-khi-20-full-banner.jpg"
                        className="img-fluid"
                        style={{ height: "427px" }}
                        width="950px"
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
