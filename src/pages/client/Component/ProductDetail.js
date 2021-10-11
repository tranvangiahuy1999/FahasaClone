import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import { FcNext, FcPrevious } from "react-icons/fc";
import shopApis from "../../../apis/ShopApis";
import { useParams, useLocation } from "react-router";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@material-ui/core/CardMedia";
const ProductDetail = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [productDetail, setProductDeatil] = useState([]);
  const params = useParams();
  const [defaultPrice, setDefaultPrice] = useState([]);
  useEffect(() => {
    getCategoryData();
    getProductDetail();
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

  const getProductDetail = async () => {
    try {
      const res = await shopApis.getProductDetail(params.id);
      console.log(res);
      if (res.status === 200) {
        // setProductList(res.data.product)
        console.log(res.data);
        res.data.map((value, index) => {
          setDefaultPrice({
            price: value.parameters[0].price,
            _id: value.parameters[0]._id,
          });
        });
        setProductDeatil(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(defaultPrice);
  return (
    <div style={{ with: "100%", overflow: "hidden" }}>
      <Nav />
      <section className="duoinavbar" style={{ background: "#F0F0F0" }}>
        <div className="container text-white">
          <div className="row justify">
            <div className="col-lg-3 col-md-5">
              <div className="categoryheader">
                <div className="noidungheader text-white">
                  <i className="fa fa-bars" />
                  <span className="text-uppercase font-weight-bold ml-1">
                    Danh mục sách
                  </span>
                </div>

                {/* CATEGORIES */}
                <div className="categorycontent1">
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
                                        <li className="liheader">
                                          <a
                                            href={
                                              "/danh-sach/" +
                                              chuyenDoiURL(value.name) +
                                              "." +
                                              value._id
                                            }
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
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb  */}
      <section
        className="breadcrumbbar"
        style={{ background: "#F0F0F0", paddingTop: "30px", height: "72px" }}
      >
        <div className="container">
          <ol className="breadcrumb mb-0 p-0 bg-transparent">
            <li className="breadcrumb-item">
              <a href="index.html">Trang chủ</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Sách kinh tếdsdsdsdsds</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Sách kinh tếdsdsdsdsds</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#">Sách kỹ năng làm việc</a>
            </li>
          </ol>
        </div>
      </section>
      {/* nội dung của trang  */}
      <section
        className="product-page mb-4"
        style={{ background: "#F0F0F0", paddingBottom: "50px" }}
      >
        <div className="container nd" style={{ width: "82%" }}>
          {/* chi tiết 1 sản phẩm */}
          <div className="product-detail bg-white p-4">
            <div className="row">
              {/* ảnh  */}
              {productDetail.map((value, index) => (
                <div className="col-md-6 khoianh">
                  <div className="anhto mb-4" style={{marginLeft:'11%',width:'70%'}}>
                    <Carousel
                      NextIcon={<FcNext size={20} />}
                      PrevIcon={<FcPrevious size={20} />}
                    >
                      {value.image.map((value, index) => (
                        <CardMedia
                        style={{width:'400px',height:'400px'}}
                          key={index}
                          component="img"
                          image={value.url}
                        />
                      ))}
                    </Carousel>
                  </div>
                  {/* <div className="list-anhchitiet d-flex mb-4" style={{marginLeft: '90px'}}>
                  <img className="thumb-img thumb1 mr-3" src="/images/lap-ke-hoach-kinh-doanh-hieu-qua-mt.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-mt" />
                    <img className="thumb-img thumb2" src="/images/lap-ke-hoach-kinh-doanh-hieu-qua-ms.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-ms" />             
                   
                   
                  </div> */}
                </div>
              ))}
              {/* thông tin sản phẩm: tên, giá bìa giá bán tiết kiệm, các khuyến mãi, nút chọn mua.... */}
              {productDetail.map((value, index) => (
                <div className="col-md-6 khoithongtin">
                  <div className="row">
                    <div className="col-md-12 header">
                      <h4 className="ten">{value.name}</h4>

                      <hr />
                    </div>
                    <div className="col-md-7 price">
                      <div className="gia">
                        <div className="giaban">
                          Giá bán tại DealBooks:
                          {value.parameters.map((value, index) => (
                            <span className="giamoi font-weight-bold">
                              {defaultPrice.price}₫
                            </span>
                          ))}
                        </div>

                        <div
                          className="danhsach"
                          style={{ marginRight: "2px" }}
                        >
                          {value.parameters.length >=2 && value.parameters.map((value, index) => {
                            if (value._id === defaultPrice._id) {
                              return (
                                <button
                                  style={{
                                    background: "#198754",
                                    color: "white",
                                  }}
                                  type="button"
                                  onClick={() =>
                                    setDefaultPrice({
                                      price: value.price,
                                      _id: value._id,
                                    })
                                  }
                                  className="btn btn-outline-success"
                                >
                                  {value.name}
                                </button>
                              );
                            } else {
                              return (
                                <button
                                  type="button"
                                  onClick={() =>
                                    setDefaultPrice({
                                      price: value.price,
                                      _id: value._id,
                                    })
                                  }
                                  className="btn btn-outline-success"
                                >
                                  {value.name}
                                </button>
                              );
                            }
                          })}
                        </div>
                      </div>
                      <div className="uudai my-3">
                        <h6 className="header font-weight-bold">
                          Tại DealBook:
                        </h6>
                        <ul>
                          <li>
                            <b>Giao hàng </b>cho đơn hàng ở TP.HCM và ở
                            Tỉnh/Thành khác{" "}
                          </li>
                          <li>
                            <b>Combo sách HOT - GIẢM 25% </b>
                            <a href="#">&gt;&gt;Xem ngay</a>
                          </li>
                        </ul>
                      </div>
                      <div className="soluong d-flex">
                        <label className="font-weight-bold">Số lượng: </label>
                        <div className="input-number input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text btn-spin btn-dec">
                              -
                            </span>
                          </div>
                          <input
                            type="text"
                            defaultValue={1}
                            className="soluongsp  text-center"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text btn-spin btn-inc">
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="nutmua btn w-100 text-uppercase">
                        Chọn mua
                      </div>
                      <a
                        className="huongdanmuahang text-decoration-none"
                        href="#"
                      >
                        (Vui lòng xem hướng dẫn mua hàng)
                      </a>

                      <div
                        className="fb-like"
                        data-href="https://www.facebook.com/DealBook-110745443947730/"
                        data-width="300px"
                        data-layout="button"
                        data-action="like"
                        data-size="small"
                        data-share="true"
                      />
                    </div>
                    {/* thông tin khác của sản phẩm:  tác giả, ngày xuất bản, kích thước ....  */}
                  </div>
                </div>
              ))}
              {/* decripstion của 1 sản phẩm: giới thiệu , đánh giá độc giả  */}
              <div className="product-description col-md-12">
                {/* 2 tab ở trên  */}
                {/* <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">

                     
                    </div>
                  </nav> */}
                <hr style={{ color: "orange", height: "6px" }} />
                {/* nội dung của từng tab  */}
                {productDetail.map((value, index) => (
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active ml-3 "
                      id="nav-gioithieu"
                      role="tabpanel"
                      aria-labelledby="nav-gioithieu-tab"
                    >
                      <div className="row">
                        <h3 style={{ marginTop: "5px", marginBottom: "-15px" }}>
                          Chi Tiết Sản Phẩm
                        </h3>
                        <div className="col-md-5 mt-4 giua ">
                          <div className="tonggiatien">
                            {Object.keys(value.details).map((value, index) => (
                              <div className="group d-flex justify-content-between">
                                <span className="label">{value}</span>
                              </div>
                            ))}
                            <div className="details">
                              {Object.values(value.details).map(
                                (value, index) => (
                                  <div className="group d-flex justify-content-right">
                                    <span className="label">{value}</span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr style={{ marginTop: "50px" }} />
                      <h3>Mô Tả Sản Phẩm</h3>
                      <h6 className="tieude font-weight-bold">{value.name}</h6>
                      <p>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: value.description,
                          }}
                        ></span>
                      </p>
                    </div>

                    <hr />
                    {/* het tab nav-danhgia  */}
                  </div>
                ))}
                {/* het tab-content  */}
              </div>
              {/* het product-description */}
            </div>
            {/* het row  */}
          </div>
          {/* het product-detail */}
        </div>
        {/* het container  */}
      </section>
      {/* het product-page */}
      {/* khối sản phẩm tương tự */}
      <section
        className="_1khoi sachmoi"
        style={{ background: "#F0F0F0", marginBottom: "-1%" }}
      >
        <div
          className="container detail1"
          style={{ marginTop: "-25px", width: "82%" }}
        >
          <div className="noidung bg-white" style={{ padding: "1%" }}>
            <div className="row">
              {/*header*/}
              <div
                className="col-12 d-flex justify-content-between align-items-center pb-2 bg-light pt-2"
                style={{ marginTop: "20px" }}
              >
                <h5
                  className="header text-uppercase"
                  style={{ fontWeight: 400 }}
                >
                  Sản phẩm tương tự
                </h5>
              </div>
            </div>
            <div className="khoisanpham" style={{ paddingBottom: "5rem" }}>
              {/* 1 sản phẩm */}
              <div className="card">
                <a
                  href="Lap-trinh-ke-hoach-kinh-doanh-hieu-qua.html"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                    alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Lập Kế Hoạch Kinh Doanh Hiệu Quả
                    </h6>
                    <small className="tacgia text-muted">Brian Finch</small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="Ma-bun-luu-manh-va-nhung-cau-chuyen-khac-cua-nguyen-tri.html"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                        Trí"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/ma-bun-luu-manh.jpg"
                    alt="ma-bun-luu-manh"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn Trí
                    </h6>
                    <small className="tacgia text-muted">Nguyễn Trí</small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">68.000 ₫</div>
                      <div className="giacu text-muted">85.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="#"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/bank-4.0.jpg"
                    alt="bank-4.0"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng
                    </h6>
                    <small className="tacgia text-muted">Brett King</small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="#"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/bo-sach-500-cau-chuyen-dao-duc.jpg"
                    alt="bo-sach-500-cau-chuyen-dao-duc"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện Tình
                      Thân (Bộ 8 Cuốn)
                    </h6>
                    <small className="tacgia text-muted">
                      Nguyễn Hạnh - Trần Thị Thanh Nguyên
                    </small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="#"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/ung-thu-hoang-de-cua-bach-benh.jpg"
                    alt="ung-thu-hoang-de-cua-bach-benh"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh
                    </h6>
                    <small className="tacgia text-muted">
                      Siddhartha Mukherjee
                    </small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="#"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/troi-dem-huyen-dieu.jpg"
                    alt="troi-dem-huyen-dieu"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu
                    </h6>
                    <small className="tacgia text-muted">Disney Learning</small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="#"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5 Cuốn)"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te.jpg"
                    alt="bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">
                      Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5
                      Cuốn)
                    </h6>
                    <small className="tacgia text-muted">Nhiều Tác Giả</small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a
                  href="#"
                  className="motsanpham"
                  style={{ textDecoration: "none", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Lịch Sử Thế Giới"
                >
                  <img
                    className="card-img-top anh"
                    src="/images/lich-su-the-gioi.jpg"
                    alt="lich-su-the-gioi"
                  />
                  <div className="card-body noidungsp mt-3">
                    <h6 className="card-title ten">Lịch Sử Thế Giới</h6>
                    <small className="tacgia text-muted">
                      Nam Phong tùng thư - Phạm Quỳnh chủ nhiệm
                    </small>
                    <div className="gia d-flex align-items-baseline">
                      <div className="giamoi">111.200 ₫</div>
                      <div className="giacu text-muted">139.000 ₫</div>
                      <div className="sale">-20%</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a
            href="sach-moi-tuyen-chon.html"
            className="btn btn-warning btn-sm text-white btnRelated"
          >
            Xem tất cả
          </a>
        </div>
      </section>
      {/* khối sản phẩm đã xem  */}

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
      <div className="new" style={{ padding: "1%", background: "#F0F0F0" }}>
        <footer>
          <div
            className="container py-4"
            style={{ background: "white", width: "82%", marginTop: "-1%" }}
          >
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <div className="gioithieu">
                  <h3 className="header text-uppercase font-weight-bold">
                    Về DealBook
                  </h3>
                  <a href="#">
                    Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM Công Ty Cổ Phần
                    Phát Hành Sách - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM
                  </a>
                  <a href="#">
                    Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi.
                    KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng
                    cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                  </a>
                  <a href="#">
                    <img
                      src="/images/dang-ky-bo-cong-thuong.png"
                      alt="jcb-payment"
                    />
                  </a>
                  <div
                    className="fb-like"
                    data-href="https://www.facebook.com/DealBook-110745443947730/"
                    data-width="300px"
                    data-layout="button"
                    data-action="like"
                    data-size="small"
                    data-share="true"
                  />
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="hotrokh">
                  <h3 className="header text-uppercase font-weight-bold">
                    HỖ TRỢ KHÁCH HÀNG
                  </h3>
                  <a href="#">Hướng dẫn đặt hàng</a>
                  <a href="#">Phương thức thanh toán</a>
                  <a href="#">Phương thức vận chuyển</a>
                  <a href="#">Chính sách đổi trả</a>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="ptthanhtoan">
                  <a href="#">
                    <img
                      className="anhfanpage"
                      src="/images/footer_icon1.png"
                      style={{ marginLeft: "-10px" }}
                      alt="jcb-payment"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* nut cuon len dau trang */}
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
    </div>
  );
};

export default ProductDetail;
