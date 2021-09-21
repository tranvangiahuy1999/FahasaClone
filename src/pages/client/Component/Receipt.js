import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { display } from "@material-ui/system";
function Receipt() {
  return (
    <div>
      <Nav />
      <section className="duoinavbar">
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
                    <li>
                      {" "}
                      <a href="#"> Sách Kinh Tế - Kỹ Năng</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Kinh Tế - Kỹ Năng
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Kinh Tế - Chính Trị</a>
                          </li>
                          <li>
                            <a href="#">Sách Khởi Nghiệp</a>
                          </li>
                          <li>
                            <a href="#">Sách Tài Chính, Kế Toán</a>
                          </li>
                          <li>
                            <a href="#">Sách Quản Trị Nhân Sự</a>
                          </li>
                          <li>
                            <a href="#">Sách Kỹ Năng Làm Việc</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Nhân Vật - Bài Học Kinh Doanh</a>
                          </li>
                          <li>
                            <a href="#">Sách Quản Trị - Lãnh Đạo</a>
                          </li>
                          <li>
                            <a href="#">Sách Kinh Tế Học</a>
                          </li>
                          <li>
                            <a href="#">
                              Sách Chứng Khoán - Bất Động Sản - Đầu Tư
                            </a>
                          </li>
                          <li>
                            <a href="#">Sách Marketing - Bán Hàng</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href>Nghệ Thuật Sống - Tâm Lý </a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Nghệ Thuật Sống - Tâm Lý
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Sách Nghệ Thuật Sống</a>
                          </li>
                          <li>
                            <a href="#">Sách Tâm Lý</a>
                          </li>
                          <li>
                            <a href="#">Sách Hướng Nghiệp</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Sách Nghệ Thuật Sống Đẹp</a>
                          </li>
                          <li>
                            <a href="#">Sách Tư Duy </a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Văn Học Việt Nam</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Văn Học Việt Nam
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Truyện Ngắn - Tản Văn </a>
                          </li>
                          <li>
                            <a href="#">Tiểu Thuyết lịch Sử </a>
                          </li>
                          <li>
                            <a href="#">Phóng Sự - Ký Sự - Du ký - Tùy Bút</a>
                          </li>
                          <li>
                            <a href="#">Thơ</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Tiểu thuyết</a>
                          </li>
                          <li>
                            <a href="#">Tiểu sử - Hồi ký</a>
                          </li>
                          <li>
                            <a href="#">Phê Bình Văn Học</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Văn Học Nước Ngoài</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Văn Học Nước Ngoài
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Văn Học Hiện Đại</a>
                          </li>
                          <li>
                            <a href="#">Tiểu Thuyết </a>
                          </li>
                          <li>
                            <a href="#">Truyện Trinh Thám</a>
                          </li>
                          <li>
                            <a href="#">Thần Thoại - Cổ Tích</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Văn Học Kinh Điển</a>
                          </li>
                          <li>
                            <a href="#">Sách Giả Tưởng - Kinh Dị</a>
                          </li>
                          <li>
                            <a href="#">Truyện Kiếm Hiệp</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Thiếu Nhi</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Thiếu Nhi
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Mẫu Giáo</a>
                          </li>
                          <li>
                            <a href="#">Thiếu Niên</a>
                          </li>
                          <li>
                            <a href="#">Kiến Thức - Bách Khoa</a>
                          </li>
                          <li>
                            <a href="#">Truyện Cổ Tích</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Nhi Đồng</a>
                          </li>
                          <li>
                            <a href="#">Văn Học Thiếu Nhi</a>
                          </li>
                          <li>
                            <a href="#">Kỹ Năng Sống</a>
                          </li>
                          <li>
                            <a href="#">Truyện Tranh</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Giáo Dục - Gia Đình</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Giáo Dục - Gia Đình
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Giáo dục</a>
                          </li>
                          <li>
                            <a href="#">Thai Giáo</a>
                          </li>
                          <li>
                            <a href="#">Sách Dinh Dưỡng - Chăm Sóc Trẻ</a>
                          </li>
                          <li>
                            <a href="#">Ẩm Thực - Nấu Ăn</a>
                          </li>
                          <li>
                            <a href="#">Sách Tham Khảo</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Giới Tính</a>
                          </li>
                          <li>
                            <a href="#">Sách Làm Cha Mẹ</a>
                          </li>
                          <li>
                            <a href="#">Kiến Thức - Kỹ Năng Cho Trẻ</a>
                          </li>
                          <li>
                            <a href="#">Ngoại Ngữ - Từ Điển</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Lịch Sử</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Lịch Sử
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Lịch Sử Việt Nam</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Lịch Sử Thế Giới</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Văn Hóa - Nghệ Thuật</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Văn Hóa - Nghệ Thuật
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Văn Hóa</a>
                          </li>
                          <li>
                            <a href="#">Phong Tục Tập Quán</a>
                          </li>
                          <li>
                            <a href="#">Phong Thủy</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Nghệ Thuật</a>
                          </li>
                          <li>
                            <a href="#">Kiến Trúc</a>
                          </li>
                          <li>
                            <a href="#">Du Lịch</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Khoa Học - Triết Học</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Khoa Học - Triết Học
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Triết Học Phương Tây</a>
                          </li>
                          <li>
                            <a href="#">Khoa Học Cơ Bản</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Minh Tiết Phương Đông</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sách Tâm Linh - Tôn Giáo</a>
                      <i className="fa fa-chevron-right float-right" />
                    </li>
                    <li>
                      <a href="#">Sách Y Học - Thực Dưỡng</a>
                      <i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader">
                          <a href="#" className="header text-uppercase">
                            Sách Y Học - Thực Dưỡng
                          </a>
                        </li>
                        <div className="content trai">
                          <li>
                            <a href="#">Chăm Sóc Sức Khỏe</a>
                          </li>
                          <li>
                            <a href="#">Y Học</a>
                          </li>
                          <li>
                            <a href="#">Thiền - Yoga</a>
                          </li>
                        </div>
                        <div className="content phai">
                          <li>
                            <a href="#">Thực Dưỡng</a>
                          </li>
                          <li>
                            <a href="#">Đông Y - Cổ Truyền</a>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 ml-auto contact d-none d-md-block">
              <div className="benphai float-right">
                <div className="hotline">
                  <i className="fa fa-phone" />
                  <span>
                    Hotline:<b>1900 1999</b>{" "}
                  </span>
                </div>
                <i className="fas fa-comments-dollar" />
                <a href="#">Hỗ trợ trực tuyến </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content my-3">
        <div className="container">
          <div className="cart-page bg-white">
            <div className="row">
              {/* giao diện giỏ hàng khi không có item  */}
              <div className="col-12 cart-empty d-none">
                <div className="py-3 pl-3">
                  <h6 className="header-gio-hang">
                    GIỎ HÀNG CỦA BẠN <span>(0 sản phẩm)</span>
                  </h6>
                  <div className="cart-empty-content w-100 text-center justify-content-center">
                    <img
                      src="images/shopping-cart-not-product.png"
                      alt="shopping-cart-not-product"
                    />
                    <p>Chưa có sản phẩm nào trong giở hàng của bạn</p>
                    <a href="/" className="btn nutmuathem mb-3">
                      Mua thêm
                    </a>
                  </div>
                </div>
              </div>
              {/* giao diện giỏ hàng khi có hàng (phần comment màu xanh bên dưới là phần 2 sản phẩm trong giỏ hàng nhưng giờ đã demo bằng jquery) */}
              <div className="col-md-12 cart center">
                <div className="cart-content py-3 pl-3">
                  {/* <h6 class="header-gio-hang">GIỎ HÀNG CỦA BẠN <span>(1 sản phẩm)</span></h6>
                                <div class="cart-list-items">
                                    <div class="cart-item d-flex">
                                        <a href="product-item.html" class="img">
                                            <img src="images/anhsp1.jpg" class="img-fluid" alt="anhsp1">
                                        </a>
                                        <div class="item-caption d-flex w-100">
                                            <div class="item-info ml-3">
                                                <a href="product-item.html" class="ten">Lập kế hoạch kinh doanh hiệu quả</a>
                                                <div class="soluong d-flex">
                                                    <div class="input-number input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text btn-spin btn-dec">-</span>
                                                        </div>
                                                        <input type="text" value="1" class="soluongsp  text-center">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text btn-spin btn-inc">+</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-price ml-auto d-flex flex-column align-items-end">
                                                <div class="giamoi">111.200 ₫</div>
                                                <div class="giacu">139.000 ₫</div>
                                                <span class="remove mt-auto"><i class="far fa-trash-alt"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr>
                                </div> */}
                  {/* <div class="row">
                                    <div class="col-md-3">
                                        <a href="index.html" class="btn nutmuathem mb-3">Mua thêm</a>
                                    </div>
                                    <div class="col-md-5 offset-md-4">
                                        <div class="tonggiatien">
                                            <div class="group d-flex justify-content-between">
                                                <p class="label">Tạm tính:</p>
                                                <p class="tamtinh">328.000 ₫</p>
                                            </div>
                                            <div class="group d-flex justify-content-between">
                                                <p class="label">Giảm giá:</p>
                                                <p class="giamgia">0 ₫</p>
                                            </div>
                                            <div class="group d-flex justify-content-between">
                                                <p class="label">Phí vận chuyển:</p>
                                                <p class="phivanchuyen">0 ₫</p>
                                            </div>
                                            <div class="group d-flex justify-content-between">
                                                <p class="label">Phí dịch vụ:</p>
                                                <p class="phidicvu">0 ₫</p>
                                            </div>
                                            <div class="group d-flex justify-content-between align-items-center">
                                                <strong class="text-uppercase">Tổng cộng:</strong>
                                                <p class="tongcong">328.000 ₫</p>
                                            </div>
                                            <small class="note d-flex justify-content-end text-muted">
                                                (Giá đã bao gồm VAT)
                                            </small>
                                            <button type="button" className="btn btn-danger">Danger</button>
                                        </div>
                                    </div>
                                </div> */}
                </div>
              </div>
            </div>
            {/* het row  */}
            <a href="/thanh-toan" className="col-md-4">
              <button type="button" className="btn btn-success receiptbtn mt-2">
                Thanh Toán
              </button>
            </a>
          </div>
          {/* het cart-page  */}
        </div>
        {/* het container  */}
      </section>
      {/* het khoi content  */}
      {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
      <section
        className="abovefooter text-white"
        style={{ backgroundColor: "#64ae55" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="dichvu d-flex align-items-center">
                <img src="images/icon-books.png" alt="icon-books" />
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
                <img src="images/icon-ship.png" alt="icon-ship" />
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
                <img src="images/icon-gift.png" alt="icon-gift" />
                <div className="noidung">
                  <h6 className="tieude font-weight-bold">QUÀ TẶNG MIỄN PHÍ</h6>
                  <p className="detail">Tặng Bookmark</p>
                  <p className="detail">Bao sách miễn phí</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="dichvu d-flex align-items-center">
                <img src="images/icon-return.png" alt="icon-return" />
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
      <Footer />
    </div>
  );
}

export default Receipt;
