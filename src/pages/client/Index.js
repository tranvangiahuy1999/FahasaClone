import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
function HomePage() {
  return (
    <div style={{ background: "#F0F0F0" }} className="all">
      <Nav />
      <Header />

      <div>
        {/* khoi sach moi  */}
        <section className="_1khoi sachmoi " style={{ background: "#F0F0F0" }}>
          <div
            className="container mobileNewbook"
            style={{ width: "81%", background: "white" }}
          >
            <div
              className="noidung"
              style={{ background: "white", marginTop: "40px" }}
            >
              <div
                className="row"
                style={{ background: "#d5c6e0", marginBottom: "10px" }}
              >
                <div className="col-12 d-flex justify-content-between align-items-center bg-transparent pt-2">
                  <h1
                    className="header text-uppercase"
                    style={{ fontWeight: 400 }}
                  >
                    SÁCH MỚI TUYỂN CHỌN
                  </h1>
                </div>
              </div>
              <div
                className="khoisanpham container"
                style={{ paddingBottom: "2rem" }}
              >
                {/* 1 san pham */}
                <div className="card">
                  <a
                    href="/chi-tiet"
                    className="motsanpham"
                    style={{ textDecoration: "none", color: "black" }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                  >
                    <img
                      className="card-img-top anh"
                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                      </h3>
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
                      src="images/ma-bun-luu-manh.jpg"
                      alt="ma-bun-luu-manh"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn Trí
                      </h3>
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
                      src="images/bank-4.0.jpg"
                      alt="bank-4.0"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng
                      </h3>
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
                      src="images/bo-sach-500-cau-chuyen-dao-duc.jpg"
                      alt="bo-sach-500-cau-chuyen-dao-duc"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện Tình
                        Thân (Bộ 8 Cuốn)
                      </h3>
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
                      src="images/ung-thu-hoang-de-cua-bach-benh.jpg"
                      alt="ung-thu-hoang-de-cua-bach-benh"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh
                      </h3>
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
                      src="images/troi-dem-huyen-dieu.jpg"
                      alt="troi-dem-huyen-dieu"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu
                      </h3>
                      <small className="tacgia text-muted">
                        Disney Learning
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
                    title="Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5 Cuốn)"
                  >
                    <img
                      className="card-img-top anh"
                      src="images/bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te.jpg"
                      alt="bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5
                        Cuốn)
                      </h3>
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
                      src="images/lich-su-the-gioi.jpg"
                      alt="lich-su-the-gioi"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">Lịch Sử Thế Giới</h3>
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
              className="btn btn-warning btn-sm text-white"
            >
              Xem tất cả
            </a>
          </div>
        </section>
        {/* khoi sach combo hot  */}
        <section className="_1khoi combohot " style={{marginTop:'2.5rem'}}>
          <div className="container listProduct" style={{ width: "81%", padding: "0px" }}>
            <div
              className="noidung"
              style={{
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <div
                className="row"
                style={{
                  width: "100%",
                  marginLeft: "0px",
                  paddingTop: "10px",
                  background: "#bee3db",
                }}
              >
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <h2
                    className="header text-uppercase"
                    style={{ fontWeight: 400 }}
                  >
                    COMBO SÁCH HOT - GIẢM ĐẾN 25%
                  </h2>
                </div>
              </div>
              <div className="privacy py-sm-5 py-4 up">
                <div className="container py-xl-4 py-lg-2">
                  {/* tittle heading */}

                  {/* //tittle heading */}
                  <div className="checkout-right">
                    {/*Horizontal Tab*/}
                    <div id="parentHorizontalTab">
                      <ul className="resp-tabs-list hor_1">
                        <li className="tittle">Xu hướng Theo Ngày</li>
                        <li className="tittle">Sách HOT-Giảm Sốc</li>
                        <li className="tittle">BestSeller Ngữ Văn</li>
                      </ul>
                      <div className="resp-tabs-container hor_1">
                        {/* khối 1 */}
                        <div>
                          <div className="items">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item DavikClark">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item TSLêThẩmDương">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item SimonSinek">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="sach-moi-tuyen-chon.html"
                            className="btn btn-warning bth_inner mt-5 btn-sm text-white"
                          >
                            Xem tất cả
                          </a>
                        </div>
                        {/* hetkhoi1 */}
                        {/* khối 2 */}
                        <div>
                          <div className="items">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-4 col-xs-6 item DavikClark">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item TSLêThẩmDương">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item SimonSinek">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="sach-moi-tuyen-chon.html"
                            className="btn btn-warning mt-5 bth_inner btn-sm text-white"
                          >
                            Xem tất cả
                          </a>
                        </div>
                        {/* het khoi 2 */}
                        {/* Khối 3 */}
                        <div>
                          <div className="items">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-4 col-xs-6 item DavikClark">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200 ₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-xs-6 item TSLêThẩmDương">
                                <div className="card ">
                                  <a
                                    href="product-item.html"
                                    className="motsanpham"
                                    style={{
                                      textDecoration: "none",
                                      color: "black",
                                    }}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Lập Kế Hoạch Kinh Doanh Hiệu Quả"
                                  >
                                    <img
                                      className="card-img-top anh img_ipad"
                                      src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg"
                                      alt="lap-ke-hoach-kinh-doanh-hieu-qua"
                                    />
                                    <div className="card-body noidungsp mt-3">
                                      <h6 className="card-title ten">
                                        Lập Kế Hoạch Kinh Doanh Hiệu Quả
                                      </h6>
                                      <small className="tacgia text-muted">
                                        Brian Finch
                                      </small>
                                      <div className="gia d-flex align-items-baseline">
                                        <div className="giamoi">111.200₫</div>
                                        <div className="giacu text-muted">
                                          139.000₫
                                        </div>
                                        {/* <div className="sale">-20%</div> */}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="sach-moi-tuyen-chon.html"
                            className="btn btn-warning mt-5 btn-sm text-white"
                          >
                            Xem tất cả
                          </a>
                        </div>
                        {/* hết khối 3 */}
                      </div>
                    </div>

                    {/*Plug-in Initialisation*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* khoi sach sap phathanh  */}
        <section className="_1khoi sapphathanh  " style={{ marginTop: "90px" }}>
          <div className="container releaseProduct" style={{ width: "81%", padding: "0px" }}>
            <div className="noidung bg-white" style={{ width: "100%" }}>
              <div
                className="row"
                style={{
                  width: "100%",
                  marginLeft: "0px",
                  paddingTop: "10px",
                  background: "#bee3db",
                }}
              >
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <h2
                    className="header text-uppercase"
                    style={{ fontWeight: 400 }}
                  >
                    SÁCH SẮP PHÁT HÀNH / ĐẶT TRƯỚC
                  </h2>
                </div>
              </div>
              <div className="khoisanpham">
                {/* 1 san pham */}
                <div className="card">
                  <a
                    href="#"
                    className="motsanpham"
                    style={{ textDecoration: "none", color: "black" }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Ngoại Giao Của Chính Quyền Sài Gòn"
                  >
                    <img
                      className="card-img-top anh"
                      src="images/ngoai-giao-cua-chinh-quyen-sai-gon.jpg"
                      alt="ngoai-giao-cua-chinh-quyen-sai-gon"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Ngoại Giao Của Chính Quyền Sài Gòn
                      </h3>
                      <small className="tacgia text-muted">Brian Finch</small>
                      <div className="gia d-flex align-items-baseline"></div>
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
                    title="Đường Mây Trên Đất Hoa"
                  >
                    <img
                      className="card-img-top anh"
                      src="images/duong-may-tren-dat-hoa.jpg"
                      alt="duong-may-tren-dat-hoa"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">Đường Mây Trên Đất Hoa</h3>
                      <small className="tacgia text-muted">Brian Finch</small>
                      <div className="gia d-flex align-items-baseline"></div>
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
                    title="Muôn Kiếp Nhân Sinh"
                  >
                    <img
                      className="card-img-top anh"
                      src="images/muon-kiep-nhan-sinh.jpg"
                      alt="muon-kiep-nhan-sinh"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">Muôn Kiếp Nhân Sinh</h3>
                      <small className="tacgia text-muted">Brian Finch</small>
                      <div className="gia d-flex align-items-baseline"></div>
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
                    title="Đường Mây Trong Cõi Mộng"
                  >
                    <img
                      className="card-img-top anh"
                      src="images/duong-may-trong-coi-mong.jpg"
                      alt="duong-may-trong-coi-mong.jpg"
                    />
                    <div className="card-body noidungsp mt-3">
                      <h3 className="card-title ten">
                        Đường Mây Trong Cõi Mộng
                      </h3>
                      <small className="tacgia text-muted">Brian Finch</small>
                      <div className="gia d-flex align-items-baseline"></div>
                    </div>
                  </a>
                </div>
              </div>
              <a
                href="sach-moi-tuyen-chon.html"
                className="btn btn-warning btn-sm mt-5 text-white"
              >
                Xem tất cả
              </a>
            </div>
          </div>
        </section>
        {/* div _1khoi -- khoi sachnendoc */}
        <section
          className="_1khoi sachnendoc mt-5"
          style={{ background: "#F0F0F0" }}
        >
          <div
            className="container readbook"
            style={{
              width: "81%",
              background: "white",
              marginTop: "-5px",
              marginBottom: "40px",
            }}
          >
            <div className="noidung" style={{ width: "100%" }}>
              <div className="row">
                {/*header*/}
                <div className="col-12 d-flex justify-content-between align-items-center" style={{backgroundColor:'rgb(213, 198, 224)',marginBottom:'2%'}}>
                  <h2
                    className="header text-uppercase"
                    style={{ fontWeight: 400 }}
                  >
                    SÁCH HAY NÊN ĐỌC
                  </h2>
                </div>
                {/* 1 san pham */}
                <div className="col-lg col-sm-4">
                  <div className="card">
                    <a
                      href="#"
                      className="motsanpham"
                      style={{ textDecoration: "none", color: "black" }}
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Từng bước chân nở hoa: Khi câu kinh bước tới"
                    >
                      <img
                        className="card-img-top anh"
                        src="images/tung-buoc-chan-no-hoa.jpg"
                        alt="tung-buoc-chan-no-hoa"
                      />
                    </a>
                    <div className="card-body noidungsp mt-3">
                      <a
                        href="#"
                        className="motsanpham"
                        style={{ textDecoration: "none", color: "black" }}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Từng bước chân nở hoa: Khi câu kinh bước tới"
                      >
                        <h3 className="card-title ten">
                          Từng bước chân nở hoa: Khi câu kinh bước tới
                        </h3>
                        <small className="thoigian text-muted">
                          03/04/2020
                        </small>
                      </a>
                      <div>
                        <a
                          href="#"
                          className="motsanpham"
                          style={{ textDecoration: "none", color: "black" }}
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Từng bước chân nở hoa: Khi câu kinh bước tới"
                        />
                        <a className="detail" href="#">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="card">
                    <a
                      href="#"
                      className="motsanpham"
                      style={{ textDecoration: "none", color: "black" }}
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Cảm ơn vì đã được thương"
                    >
                      <img
                        className="card-img-top anh"
                        src="images/cam-on-vi-da-duoc-thuong.jpg"
                        alt="cam-on-vi-da-duoc-thuong"
                      />
                    </a>
                    <div className="card-body noidungsp mt-3">
                      <a
                        href="#"
                        className="motsanpham"
                        style={{ textDecoration: "none", color: "black" }}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Cảm ơn vì đã được thương"
                      >
                        <h3 className="card-title ten">
                          Cảm ơn vì đã được thương
                        </h3>
                        <small className="thoigian text-muted">
                          31/03/2020
                        </small>
                      </a>
                      <div>
                        <a
                          href="#"
                          className="motsanpham"
                          style={{ textDecoration: "none", color: "black" }}
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Cảm ơn vì đã được thương"
                        />
                        <a className="detail" href="#">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="card">
                    <a
                      href="#"
                      className="motsanpham"
                      style={{ textDecoration: "none", color: "black" }}
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Hào quang của vua Gia Long trong mắt Michel Gaultier"
                    >
                      <img
                        className="card-img-top anh"
                        src="images/vua-gia-long.jpg"
                        alt="vua-gia-long"
                      />
                    </a>
                    <div className="card-body noidungsp mt-3">
                      <a
                        href="#"
                        className="motsanpham"
                        style={{ textDecoration: "none", color: "black" }}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Hào quang của vua Gia Long trong mắt Michel Gaultier"
                      >
                        <h3 className="card-title ten">
                          Hào quang của vua Gia Long trong mắt Michel Gaultier
                        </h3>
                        <small className="thoigian text-muted">
                          21/03/2020
                        </small>
                      </a>
                      <div>
                        <a
                          href="#"
                          className="motsanpham"
                          style={{ textDecoration: "none", color: "black" }}
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Hào quang của vua Gia Long trong mắt Michel Gaultier"
                        />
                        <a className="detail" href="#">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="card">
                    <a
                      href="#"
                      className="motsanpham"
                      style={{ textDecoration: "none", color: "black" }}
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Suối nguồn” và cái tôi hiện sinh trong từng cá thể"
                    >
                      <img
                        className="card-img-top anh"
                        src="images/suoi-nguon-va-cai-toi-trong-tung-ca-the.jpg"
                        alt="suoi-nguon-va-cai-toi-trong-tung-ca-the"
                      />
                    </a>
                    <div className="card-body noidungsp mt-3">
                      <a
                        href="#"
                        className="motsanpham"
                        style={{ textDecoration: "none", color: "black" }}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Suối nguồn” và cái tôi hiện sinh trong từng cá thể"
                      >
                        <h3 className="card-title ten">
                          "Suối nguồn” và cái tôi hiện sinh trong từng cá thể
                        </h3>
                        <small className="thoigian text-muted">
                          16/03/2020
                        </small>
                      </a>
                      <div>
                        <a
                          href="#"
                          className="motsanpham"
                          style={{ textDecoration: "none", color: "black" }}
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Suối nguồn” và cái tôi hiện sinh trong từng cá thể"
                        />
                        <a className="detail" href="#">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg col-sm-4">
                  <div className="card cuoicung">
                    <a
                      href="#"
                      className="motsanpham"
                      style={{ textDecoration: "none", color: "black" }}
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="Đại dịch trên những con đường tơ lụa"
                    >
                      <img
                        className="card-img-top anh"
                        src="images/dai-dich-tren-con-duong-to-lua.jpg"
                        alt="dai-dich-tren-con-duong-to-lua"
                      />
                    </a>
                    <div className="card-body noidungsp mt-3">
                      <a
                        href="#"
                        className="motsanpham"
                        style={{ textDecoration: "none", color: "black" }}
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Đại dịch trên những con đường tơ lụa"
                      >
                        <h3 className="card-title ten">
                          Đại dịch trên những con đường tơ lụa
                        </h3>
                        <small className="thoigian text-muted">
                          16/03/2020
                        </small>
                      </a>
                      <div>
                        <a
                          href="#"
                          className="motsanpham"
                          style={{ textDecoration: "none", color: "black" }}
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Đại dịch trên những con đường tơ lụa"
                        />
                        <a className="detail" href="#">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="sach-moi-tuyen-chon.html"
                className="btn btn-warning mt-4 btn-sm mb-5 text-white"
              >
                Xem tất cả
              </a>
            </div>
          </div>
        </section>
        {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
        <section className="abovefooter text-white">
          <div
            className="container index_footer"
            style={{ backgroundColor: "#64ae55", width: "81%" }}
          >
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-books.png" alt="icon-books" />
                  <div className="noidung">
                    <h3 className="tieude font-weight-bold">
                      HƠN 14.000 TỰA SÁCH
                    </h3>
                    <p className="detail">Tuyển chọn bởi DealBooks</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-ship.png" alt="icon-ship" />
                  <div className="noidung">
                    <h3 className="tieude font-weight-bold">
                      MIỄN PHÍ GIAO HÀNG
                    </h3>
                    <p className="detail">Từ 150.000đ ở TP.HCM</p>
                    <p className="detail">Từ 150.000đ ở TP.HN</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-gift.png" alt="icon-gift" />
                  <div className="noidung">
                    <h3 className="tieude font-weight-bold">
                      QUÀ TẶNG MIỄN PHÍ
                    </h3>
                    <p className="detail">Tặng Bookmark</p>
                    <p className="detail">Bao sách miễn phí</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-return.png" alt="icon-return" />
                  <div className="noidung">
                    <h3 className="tieude font-weight-bold">
                      ĐỔI TRẢ NHANH CHÓNG
                    </h3>
                    <p className="detail">
                      Hàng bị lỗi được đổi trả nhanh chóng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
