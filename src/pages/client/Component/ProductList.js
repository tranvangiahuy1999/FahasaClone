import React, { Component } from 'react';
import Nav from "./Nav";
import Footer from './Footer';
function ProductList() {
    
        return (
            <div>
                <Nav/>
                <section className="duoinavbar">
        <div className="container text-white">
          <div className="row justify">
            <div className="col-lg-3 col-md-5">
              <div className="categoryheader">
                <div className="noidungheader text-white">
                  <i className="fa fa-bars" />
                  <span className="text-uppercase font-weight-bold ml-1">Danh mục sách</span>
                </div>
                {/* CATEGORIES */}
                <div className="categorycontent1" >
                  <ul>
                    <li> <a href="#"> Sách Kinh Tế - Kỹ Năng</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Kinh Tế - Kỹ
                            Năng</a></li>
                        <div className="content trai">
                          <li><a href="#">Kinh Tế - Chính Trị</a></li>
                          <li><a href="#">Sách Khởi Nghiệp</a></li>
                          <li><a href="#">Sách Tài Chính, Kế Toán</a></li>
                          <li><a href="#">Sách Quản Trị Nhân Sự</a></li>
                          <li><a href="#">Sách Kỹ Năng Làm Việc</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Nhân Vật - Bài Học Kinh Doanh</a></li>
                          <li><a href="#">Sách Quản Trị - Lãnh Đạo</a></li>
                          <li><a href="#">Sách Kinh Tế Học</a></li>
                          <li><a href="#">Sách Chứng Khoán - Bất Động Sản - Đầu Tư</a></li>
                          <li><a href="#">Sách Marketing - Bán Hàng</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href>Nghệ Thuật Sống - Tâm Lý </a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Nghệ Thuật Sống -
                            Tâm
                            Lý</a></li>
                        <div className="content trai">
                          <li><a href="#">Sách Nghệ Thuật Sống</a></li>
                          <li><a href="#">Sách Tâm Lý</a></li>
                          <li><a href="#">Sách Hướng Nghiệp</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Sách Nghệ Thuật Sống Đẹp</a></li>
                          <li><a href="#">Sách Tư Duy </a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Văn Học Việt Nam</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Văn Học Việt
                            Nam</a></li>
                        <div className="content trai">
                          <li><a href="#">Truyện Ngắn - Tản Văn </a></li>
                          <li><a href="#">Tiểu Thuyết lịch Sử </a></li>
                          <li><a href="#">Phóng Sự - Ký Sự - Du ký - Tùy Bút</a></li>
                          <li><a href="#">Thơ</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Tiểu thuyết</a></li>
                          <li><a href="#">Tiểu sử - Hồi ký</a></li>
                          <li><a href="#">Phê Bình Văn Học</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Văn Học Nước Ngoài</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Văn Học Nước
                            Ngoài</a></li>
                        <div className="content trai">
                          <li><a href="#">Văn Học Hiện Đại</a></li>
                          <li><a href="#">Tiểu Thuyết </a></li>
                          <li><a href="#">Truyện Trinh Thám</a></li>
                          <li><a href="#">Thần Thoại - Cổ Tích</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Văn Học Kinh Điển</a></li>
                          <li><a href="#">Sách Giả Tưởng - Kinh Dị</a></li>
                          <li><a href="#">Truyện Kiếm Hiệp</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Thiếu Nhi</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Thiếu
                            Nhi</a>
                        </li>
                        <div className="content trai">
                          <li><a href="#">Mẫu Giáo</a></li>
                          <li><a href="#">Thiếu Niên</a></li>
                          <li><a href="#">Kiến Thức - Bách Khoa</a></li>
                          <li><a href="#">Truyện Cổ Tích</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Nhi Đồng</a></li>
                          <li><a href="#">Văn Học Thiếu Nhi</a></li>
                          <li><a href="#">Kỹ Năng Sống</a></li>
                          <li><a href="#">Truyện Tranh</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Giáo Dục - Gia Đình</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Giáo Dục -
                            Gia
                            Đình</a></li>
                        <div className="content trai">
                          <li><a href="#">Giáo dục</a></li>
                          <li><a href="#">Thai Giáo</a></li>
                          <li><a href="#">Sách Dinh Dưỡng - Chăm Sóc Trẻ</a></li>
                          <li><a href="#">Ẩm Thực - Nấu Ăn</a></li>
                          <li><a href="#">Sách Tham Khảo</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Giới Tính</a></li>
                          <li><a href="#">Sách Làm Cha Mẹ</a></li>
                          <li><a href="#">Kiến Thức - Kỹ Năng Cho Trẻ</a></li>
                          <li><a href="#">Ngoại Ngữ - Từ Điển</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Lịch Sử</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Lịch Sử</a>
                        </li>
                        <div className="content trai">
                          <li><a href="#">Lịch Sử Việt Nam</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Lịch Sử Thế Giới</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Văn Hóa - Nghệ Thuật</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Văn Hóa -
                            Nghệ
                            Thuật</a></li>
                        <div className="content trai">
                          <li><a href="#">Văn Hóa</a></li>
                          <li><a href="#">Phong Tục Tập Quán</a></li>
                          <li><a href="#">Phong Thủy</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Nghệ Thuật</a></li>
                          <li><a href="#">Kiến Trúc</a></li>
                          <li><a href="#">Du Lịch</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Khoa Học - Triết Học</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Khoa Học -
                            Triết
                            Học</a></li>
                        <div className="content trai">
                          <li><a href="#">Triết Học Phương Tây</a></li>
                          <li><a href="#">Khoa Học Cơ Bản</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Minh Tiết Phương Đông</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Tâm Linh - Tôn Giáo</a><i className="fa fa-chevron-right float-right" />
                    </li>
                    <li><a href="#">Sách Y Học - Thực Dưỡng</a><i className="fa fa-chevron-right float-right" />
                      <ul>
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Y Học - Thực
                            Dưỡng</a></li>
                        <div className="content trai">
                          <li><a href="#">Chăm Sóc Sức Khỏe</a></li>
                          <li><a href="#">Y Học</a></li>
                          <li><a href="#">Thiền - Yoga</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Thực Dưỡng</a></li>
                          <li><a href="#">Đông Y - Cổ Truyền</a></li>
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
                  <span>Hotline:<b>1900 1999</b> </span>
                </div>
                <i className="fas fa-comments-dollar" />
                <a href="#">Hỗ trợ trực tuyến </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="breadcrumbbar">
          <div className="container">
            <ol className="breadcrumb mb-0 p-0 bg-transparent">
              <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
              <li className="breadcrumb-item active"><a href="sach-kinh-te.html">Sách kinh tế - kỹ năng</a></li>
            </ol>
          </div>
        </section>
        {/* ảnh banner  */}
        <section className="banner">
          <div className="container">
            <a href="sach-moi-tuyen-chon.html"><img src="images/banner-sach-ktkn.jpg" alt="banner-sach-ktkn" className="img-fluid" /></a>
          </div>
        </section>
        {/* thể loại sách: kinh tế chính trị nhân vật bài học kinh doanh ( từng ô vuông) */}
        <section className="page-content my-3">
          <div className="container">
            <div>
              <h1 className="header text-uppercase">sách kinh tế - kỹ năng</h1>
            </div>
            <div className="the-loai-sach">
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-kinh-te-chinh-tri.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Kinh tế - chính trị
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-nhan-vat-bai-hoc-kinh-doanh.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Nhân vật - Bài học kinh doanh
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-khoi-nghiep.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách Khởi Nghiệp
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-quan-tri-lanh-dao.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách Quản trị - Lãnh đạo
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-tai-chinh-ke-toan.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách tài chính - kế toán
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-kinh-te-hoc.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách Kinh tế học
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-quan-tri-nhan-su.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách quản trị nhân sự
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-chung-khoan-bat-dong-san-dau-tu.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách chứng khoán - bất động sản
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-ky-nang-lam-viec.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách kỹ năng làm việc
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="danh-muc text-decoration-none">
                    <div className="img text-center">
                      <img src="images/tls-sach-marketing-ban-hang.png" alt="tls-kinh-te-chinh-tri" />
                    </div>
                    <div className="ten">
                      Sách marketing - bán hàng
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* khối sản phẩm  */}
        <section className="content my-4">
          <div className="container">
            <div className="noidung bg-white" style={{width: '100%'}}>
              {/* header của khối sản phẩm : tag(tác giả), bộ lọc và sắp xếp  */}
              <div className="header-khoi-sp d-flex">
                <div className="tag">
                  <label>Tác giả nổi bật:</label>
                  <a href="#">Tất cả</a>
                  <a href="#" data-tacgia=".MarieForleo">Marie Forleo</a>
                  <a href="#" data-tacgia=".DeanGraziosi">Dean Graziosi</a>
                  <a href="#" data-tacgia=".DavikClark">Davik Clark</a>
                  <a href="#" data-tacgia=".TSLêThẩmDương">TS Lê Thẩm Dương</a>
                  <a href="#" data-tacgia=".SimonSinek">Simon Sinek</a>
                </div>
                <div className="sort d-flex ml-auto">
                  <div className="hien-thi">
                    <label htmlFor="hienthi-select" className="label-select">Hiển thị</label>
                    <select className="hienthi-select">
                      <option value={30}>30</option>
                      <option value={60}>60</option>
                    </select>
                  </div>
                  <div className="sap-xep">
                    <label htmlFor="sapxep-select" className="label-select">Sắp xếp</label>
                    <select className="sapxep-select">
                      <option value="moinhat">Mới nhất</option>
                      <option value="thap-cao">Giá: Thấp - Cao</option>
                      <option value="cao-thap">Giá: Cao - Thấp</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* các sản phẩm  */}
              <div className="items">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item DeanGraziosi">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item MarieForleo">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item DavikClark">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item TSLêThẩmDương">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6 item SimonSinek">
                    <div className="card ">
                      <a href="product-item.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
                        <img className="card-img-top anh" src="images/lap-ke-hoach-kinh-doanh-hieu-qua.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua" />
                        <div className="card-body noidungsp mt-3">
                          <h6 className="card-title ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                          <small className="tacgia text-muted">Brian Finch</small>
                          <div className="gia d-flex align-items-baseline">
                            <div className="giamoi">111.200 ₫</div>
                            <div className="giacu text-muted">139.000 ₫</div>
                            <div className="sale">-20%</div>
                          </div>
                          <div className="danhgia">
                            <ul className="d-flex" style={{listStyle: 'none'}}>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li className="active"><i className="fa fa-star" /></li>
                              <li><i className="fa fa-star" /></li>
                              <span className="text-muted">0 nhận xét</span>
                            </ul>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* pagination bar */}
              <div className="pagination-bar my-3">
                <div className="row">
                  <div className="col-12">
                    <nav>
                      <ul className="pagination justify-content-center">
                        {/* <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li> */}
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">›</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/*het khoi san pham*/}
            </div>
            {/*het div noidung*/}
          </div>
          {/*het container*/}
        </section>
        {/*het _1khoi*/}
        <section className="abovefooter text-white" style={{backgroundColor: '#64ae55'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-books.png" alt="icon-books" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">HƠN 14.000 TỰA SÁCH HAY</h6>
                    <p className="detail">Tuyển chọn bởi DealBooks</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="dichvu d-flex align-items-center">
                  <img src="images/icon-ship.png" alt="icon-ship" />
                  <div className="noidung">
                    <h6 className="tieude font-weight-bold">MIỄN PHÍ GIAO HÀNG</h6>
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
                    <h6 className="tieude font-weight-bold">ĐỔI TRẢ NHANH CHÓNG</h6>
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
    }


export default ProductList;