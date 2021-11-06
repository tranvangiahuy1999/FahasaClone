import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";
import { useParams, useLocation, Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productId1, setProductId1] = useState();
  const [productCateId, setProductCateId] = useState();
  const [productCateName, setProductCateName] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const params = useParams();
  let query = useQuery();
  const [parentId, setParentId] = useState();

  useEffect(() => {
    getCategoryData();
    getProductData(1);
    const temp = new URLSearchParams(query);
    setParentId(temp.get("parentId"));
  }, []);

  const getProductData = async (page) => {
    try {
      const res = await shopApis.getProductByCate(page, params.id);
      if (res.status === 200) {
        setProductList(res.data.product);
      }
    } catch (e) {
    }
  };

  const pageChange = (event, page) => {
    getProductData(page);
    setPage(page);
  };
  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };
  const getCategoryData = async () => {
    try {
      const res = await shopApis.getCategoryList();
      if (res.status === 200) {
        res.data.map((value, index) => {
          value.subCate.map((value, index) => {
            if (value._id === params.id) {
              setProductId1(value.parent_cate);
            }

            value.subCate.map((value, index) => {
              if (value._id === params.id) {
                console.log(value._id);
                setProductCateName(value.name);
                setProductCateId(value.parent_cate);
              }
            });
          });
        });
        setCategoryList(res.data);
      }
    } catch (e) {
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
    <div className='product-list'>
      <div className='product-list-container'>
        <div
          className="product-list-breadcrum-wrapper"
        >
          {/* <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>

            {categoryList.length && (
              categoryList              
                .map((value, index) => {                 
                    {value._id === params.id ? (
                      <Link key={index} style={{ paddingLeft: "10px", color: "orange" }}>
                        {value.name}
                      </Link>
                    ) : (
                      <></>
                    )};

                    {value._id === productId1 && (
                      <Link style={{ paddingLeft: "25px", color: "black" }}>
                        {value.name}
                      </Link>
                    )};

                    {value.subCate.map((value, index) => {
                      if (value._id === params.id) {
                        return (
                          <Link
                            key={index}
                            style={{ paddingLeft: "120px", color: "orange" }}
                          >
                            {value.name}
                          </Link>
                        );
                      }
                    })}

                    {value.subCate.map((value, index) => {
                      if (value._id === productCateId) {
                        return (
                          <Link key={index} style={{ paddingLeft: "120px", color: "black" }}>
                            {value.name}
                          </Link>
                        );
                      }
                    })}                  
                  })
            )}
          </Breadcrumbs> */}
        </div>

        <div style={{ background: "#F0F0F0" }}>
          <div
          >
            <div>
              <div className="row m-0 p-0" style={{ background: "#F0F0F0" }}>
                <div
                  className="col-lg-3 col-12"
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      border: "none",
                    }}
                  >
                    <h6
                      style={{
                        marginTop: "6px",
                        marginLeft: "3px",
                        fontWeight: 'bold',
                      }}
                    >
                      Nhóm Sản Phẩm
                    </h6>
                    <div style={{ marginLeft: "12px" }}>
                      Tất Cả Sản Phẩm
                    </div>
                    <ul>
                      {categoryList.length ? (
                        categoryList
                          .filter((item, idx) => idx < 11)
                          .map((value, index) => (
                            <div>
                              {value._id === params.id ? (
                                <li key={index}>
                                  <a
                                    href={
                                      "/danh-sach/" +
                                      chuyenDoiURL(value.name) +
                                      "." +
                                      value._id
                                    }
                                    style={{
                                      color: "orange",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    {value.name}
                                  </a>
                                </li>
                              ) : (
                                <></>
                              )}
                              {value._id === params.id ? (
                                value.subCate.map((value, index) => (
                                  <li key={index} className="namecate">
                                    <a
                                      href={
                                        "/danh-sach/" +
                                        chuyenDoiURL(value.name) +
                                        "." +
                                        value._id
                                      }
                                      style={{
                                        color: "black",
                                        marginLeft: "7px",
                                      }}
                                    >
                                      {value.name}
                                    </a>
                                  </li>
                                ))
                              ) : (
                                <></>
                              )}
                              {value._id === productId1 ? (
                                <li key={index}>
                                  <a
                                    href={
                                      "/danh-sach/" +
                                      chuyenDoiURL(value.name) +
                                      "." +
                                      value._id
                                    }
                                    style={{ color: "black", marginLeft: "-5px" }}
                                  >
                                    {value.name}
                                  </a>
                                </li>
                              ) : (
                                <></>
                              )}

                              {value.subCate.map((value, index) =>
                                value._id === params.id ? (
                                  <li key={index}>
                                    <a
                                      href={
                                        "/danh-sach/" +
                                        chuyenDoiURL(value.name) +
                                        "." +
                                        value._id
                                      }
                                      style={{
                                        color: "orange",
                                        marginLeft: "5px",
                                      }}
                                    >
                                      {value.name}
                                    </a>
                                  </li>
                                ) : (
                                  <></>
                                )
                              )}
                              {value.subCate.map((value, index) =>
                                value._id === params.id ? (
                                  value.subCate.map((value, index) => (
                                    <li key={index}>
                                      <a
                                        style={{
                                          color: "black",
                                          marginLeft: "20px",
                                        }}
                                      >
                                        {value.name}
                                      </a>
                                    </li>
                                  ))
                                ) : (
                                  <></>
                                )
                              )}
                            </div>
                          ))
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-9 col-12"
                  style={{ background: "white" }}
                >
                  <div className="d-flex">
                    <div className="sort d-flex ml-auto">
                      <div>
                        <label className="label-select">
                          Hiển thị :
                        </label>
                        <select
                          style={{ height: "25px" }}
                        >
                          <option value={30}>30</option>
                          <option value={60}>60</option>
                        </select>
                      </div>
                      <div>
                        <label className="label-select">
                          Sắp xếp :
                        </label>
                        <select
                          style={{ height: "25px" }}
                        >
                          <option value="moinhat">Mới nhất</option>
                          <option value="thap-cao">Giá: Thấp - Cao</option>
                          <option value="cao-thap">Giá: Cao - Thấp</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="items" style={{ marginLeft: "-2%" }}>
                    <div className="row" style={{ overflow: "hidden" }}>
                      {productList.map((value, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                          <div className="card list">
                            <a
                              href={
                                "/chi-tiet/" +
                                chuyenDoiURL(value.name) +
                                "." +
                                value._id
                              }
                              className="motsanpham"
                              style={{ textDecoration: "none", color: "black" }}
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                            >
                              {value.image.length ? (
                                value.image
                                  .filter((item, idx) => idx < 1)
                                  .map((value, index) => (
                                    <img
                                      className="card-img-top anh"
                                      src={value.url}
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                  ))
                              ) : (
                                <img
                                  className="card-img-top anh"
                                  src="/images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                  alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                />
                              )}

                              <div className="card-body noidungsp mt-3">
                                <h6 className="card-title ten">{value.name}</h6>
                                <small
                                  className="tacgia text-muted"
                                  dangerouslySetInnerHTML={{
                                    __html: value.description,
                                  }}
                                ></small>
                                <div className="gia d-flex align-items-baseline">
                                  {value.parameters
                                    .filter((item, idx) => idx < 1)
                                    .map((value, index) => (
                                      <div className="giamoi">
                                        {formatCurrency(value.price)}₫
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pagination-bar my-3">
                    <div className="row">
                      <div className="col-12">
                        <nav>
                          <Pagination
                            count={totalPage}
                            page={page}
                            onChange={pageChange}
                            variant="outlined"
                            shape="rounded"
                          />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
