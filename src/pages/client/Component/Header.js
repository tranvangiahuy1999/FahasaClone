import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";
import Carousel from "react-material-ui-carousel";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setcategorydata } from "../../../reducers/UserReducer";
import { Link } from "react-router-dom";
import { convertURL } from "../../../utils/format-string.util";

const imageArray = [
  "images/banner-sach-moi.jpg",
  "images/banner-beethoven.jpg",
  "images/neu-toi-biet-duoc-khi-20-full-banner.jpg",
];

const Header = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    try {
      const res = await shopApis.getCategoryList();
      if (res.status === 200) {
        setCategoryList(res.data);
        await dispatch(setcategorydata(res.data));
      }
    } catch (e) { }
  };

  return (
    <div className="custom-header mt-3">
      <div className="custom-header-container">
        <section>
          <div className="row m-0 p-0 justify">
            <div className="col-3 d-none d-md-block p-0 m-0">
              <div className="header-title">
                <div className="text-white">
                  <i className="fa fa-bars mr-2" id=" menuId" />
                  <span className="text-uppercase font-weight-bold ml-1">
                    Danh mục sách
                  </span>
                </div>
              </div>
              <div className="header-category-list">
                <ul>
                  {categoryList.length ? (
                    categoryList
                      .filter((item, idx) => idx < 11)
                      .map((value, index) => (
                        <li key={index}>
                          <Link
                            className="category-item-title one-line-text"
                            to={
                              "/danh-sach/" +
                              convertURL(value.name) +
                              "." +
                              value._id
                            }
                          >
                            <span className="subcate-item-0">{value.name}</span>
                          </Link>
                          <i className="fa fa-chevron-right icon float-right" />
                          <ul>
                            <div className="row m-0 p-0">
                              {value.subCate.length ? (
                                value.subCate
                                  .filter((item, idx) => idx < 6)
                                  .map((value, index) => (
                                    <div className="col-4" key={index}>
                                      <li>
                                        <Link
                                          to={
                                            "/danh-sach/" +
                                            convertURL(value.name) +
                                            "." +
                                            value._id
                                          }
                                          className="text-uppercase subcate-item-1"
                                        >
                                          <span className=" one-line-text subcate-1-title">
                                            {value.name}
                                          </span>
                                        </Link>
                                      </li>
                                      <div className="ml-1 mb-2">
                                        {value.subCate.length ? (
                                          value.subCate
                                            .filter((item, idx) => idx < 5)
                                            .map((value, index) => (
                                              <li key={index}>
                                                <Link
                                                  className="subcate-item-2 one-line-text"
                                                  to={
                                                    "/danh-sach/" +
                                                    convertURL(
                                                      value.name
                                                    ) +
                                                    "." +
                                                    value._id
                                                  }
                                                >
                                                  <span>{value.name}</span>
                                                </Link>
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
            <div className="col-lg-9 col-md-9 col-12 p-0 m-0">
              <Carousel
                NextIcon={<FcNext className="arrow-icon" />}
                PrevIcon={<FcPrevious className="arrow-icon" />}
                indicators={false}
                fullHeightHover={false}
              >
                {imageArray.map((ele, i) => (
                  <div key={i} className="banner-img-wrapper">
                    <img className="banner-img" alt="" src={ele} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
