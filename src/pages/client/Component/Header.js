import React, { Component } from 'react';

function Header() {
  
        return (
            <div>
        {/* thanh tieu de "danh muc sach" + hotline + ho tro truc tuyen */}
        <section className="duoinavbar">
          <div className="container text-white">
            <div className="row justify">
              <div className="col-md-3">
                <div className="categoryheader">
                  <div className="noidungheader text-white" >
                    <i className="fa fa-bars"id=" menuId" />
                    <span className="text-uppercase font-weight-bold ml-1">Danh mục sách</span>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
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
        {/* noi dung danh muc sach(categories) + banner slider */}
        <section className="header bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3" style={{marginRight: '0px',paddingLeft:'35px'}}>
                {/* CATEGORIES */}
                <div className="categorycontent display" >
                  <ul >
                    <li> <a href="/danh-sach"> Sách Kinh Tế - Kỹ Năng</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="/danh-sach" className="header text-uppercase">Sách Kinh Tế 
                          </a></li>
                        <div className="content trai">
                          <li><a href="/danh-sach">Kinh Tế - Chính Trị</a></li>
                          <li><a href="#">Sách Khởi Nghiệp</a></li>
                          <li><a href="#">Sách Tài Chính, Kế Toán</a></li>
                          <li><a href="#">Sách Quản Trị Nhân Sự</a></li>
                          <li><a href="#">Sách Kỹ Năng Làm Việc</a></li>
                        </div>
                        <li className="liheader1"><a href="#" className="header text-uppercase">Sách Kỹ
                            Năng</a></li>
                        <div className="content phai">
                          <li><a href="#">Nhân Vật - Bài Học Kinh Doanh</a></li>
                          <li><a href="#">Sách Quản Trị - Lãnh Đạo</a></li>
                          <li><a href="#">Sách Kinh Tế Học</a></li>
                          <li><a href="#">Sách Chứng Khoán - Bất Động Sản - Đầu Tư</a></li>
                          <li><a href="#">Sách Marketing - Bán Hàng</a></li>
                        </div>

                        
                      </ul>
                    </li>
                    <li><a href="#">Nghệ Thuật Sống - Tâm Lý </a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Nghệ Thuật Sống</a></li>
                        <div className="content trai">
                          <li><a href="#">Sách Nghệ Thuật Sống</a></li>
                          <li><a href="#">Sách Tâm Lý</a></li>
                          <li><a href="#">Sách Hướng Nghiệp</a></li>
                        </div>
                        <li className="liheader1"><a href="#" className="header text-uppercase">Sách Tâm Lý</a></li>
                        <div className="content phai">
                          <li><a href="#">Sách Nghệ Thuật Sống Đẹp</a></li>
                          <li><a href="#">Sách Tư Duy </a></li>
                        </div>
                      </ul>
                      
                    </li>
                    
                    <li><a href="#">Sách Văn Học Việt Nam</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Văn Học Việt
                            Nam</a></li>
                        <div className="content trai">
                          <li><a href="#">Truyện Ngắn - Tản Văn </a></li>
                          <li><a href="#">Tiểu Thuyết lịch Sử </a></li>
                          <li><a href="#">Phóng Sự - Ký Sự - Du ký - Tùy Bút</a></li>
                          <li><a href="#">Thơ</a></li>
                        </div>
                        <li className="liheader1"><a href="#" className="header text-uppercase">Sách Tiểu Sử</a></li>
                        <div className="content phai">
                          <li><a href="#">Tiểu thuyết</a></li>
                          <li><a href="#">Tiểu sử - Hồi ký</a></li>
                          <li><a href="#">Phê Bình Văn Học</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Văn Học Nước Ngoài</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Văn Học Nước
                            Ngoài</a></li>
                        <div className="content trai">
                          <li><a href="#">Văn Học Hiện Đại</a></li>
                          <li><a href="#">Tiểu Thuyết </a></li>
                          <li><a href="#">Truyện Trinh Thám</a></li>
                          <li><a href="#">Thần Thoại - Cổ Tích</a></li>
                        </div>
                        <li className="liheader1"><a href="#" className="header text-uppercase">Sách Thể Loại
                          </a></li>
                        <div className="content phai">
                          <li><a href="#">Văn Học Kinh Điển</a></li>
                          <li><a href="#">Sách Giả Tưởng - Kinh Dị</a></li>
                          <li><a href="#">Truyện Kiếm Hiệp</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Thiếu Nhi</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Thiếu Nhi</a>
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
                    <li><a href="#">Sách Giáo Dục - Gia Đình</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Giáo Dục - Gia
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
                    <li><a href="#">Sách Lịch Sử</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Lịch Sử</a></li>
                        <div className="content trai">
                          <li><a href="#">Lịch Sử Việt Nam</a></li>
                        </div>
                        <div className="content phai">
                          <li><a href="#">Lịch Sử Thế Giới</a></li>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#">Sách Văn Hóa - Nghệ Thuật</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Văn Hóa - Nghệ
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
                    <li><a href="#">Sách Khoa Học - Triết Học</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
                        <li className="liheader"><a href="#" className="header text-uppercase">Sách Khoa Học - Triết
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
                    <li><a href="#">Sách Tâm Linh - Tôn Giáo</a><i className="fa fa-chevron-right icon float-right" />
                    </li>
                    <li><a href="#">Sách Y Học - Thực Dưỡng</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail">
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
              {/* banner slider  */}
              <div className="col-md-9 px-0">
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                  <ol className="nutcarousel carousel-indicators rounded-circle">
                    <li data-target="#carouselId" data-slide-to={0} className="active" />
                    <li data-target="#carouselId" data-slide-to={1} />
                    <li data-target="#carouselId" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active"style={{width: '965px'}} >
                      <a href="#"><img src="images/banner-sach-moi.jpg" className="img-fluid" style={{height: '386px'}} width="965px" alt="First slide" /></a>
                    </div>
                    <div className="carousel-item">
                      <a href="#"><img src="images/banner-beethoven.jpg" className="img-fluid" style={{height: '386px'}} width="965px" alt="Second slide" /></a>
                    </div>
                    <div className="carousel-item">
                      <a href="#"><img src="images/neu-toi-biet-duoc-khi-20-full-banner.jpg" className="img-fluid" style={{height: '386px'}} width="965px" alt="Third slide" /></a>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselId" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselId" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        
        );
    }


export default Header;