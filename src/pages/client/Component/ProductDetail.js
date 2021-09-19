import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
function ProductDetail() {
    
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
        {/* breadcrumb  */}
        <section className="breadcrumbbar">
          <div className="container">
            <ol className="breadcrumb mb-0 p-0 bg-transparent">
              <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
              <li className="breadcrumb-item"><a href="#">Sách kinh tế</a></li>
              <li className="breadcrumb-item active"><a href="#">Sách kỹ năng làm việc</a></li>
            </ol>
          </div>
        </section>
        {/* nội dung của trang  */}
        <section className="product-page mb-4">
          <div className="container">
            {/* chi tiết 1 sản phẩm */}
            <div className="product-detail bg-white p-4">
              <div className="row">
                {/* ảnh  */}
                <div className="col-md-5 khoianh">
                  <div className="anhto mb-4">
                    <a className="active" href="/chi-tiet#thumb-img-1" data-fancybox="thumb-img">
                      <img className="product-image" src="images/lap-ke-hoach-kinh-doanh-hieu-qua-mt.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-mt" style={{width: '100%'}} />
                    </a>
                    <a href="images/lap-ke-hoach-kinh-doanh-hieu-qua-ms.jpg" data-fancybox="thumb-img" />
                  </div>
                  <div className="list-anhchitiet d-flex mb-4" style={{marginLeft: '2rem'}}>
                    <img className="thumb-img thumb1 mr-3" src="images/lap-ke-hoach-kinh-doanh-hieu-qua-mt.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-mt" />
                    <img className="thumb-img thumb2" src="images/lap-ke-hoach-kinh-doanh-hieu-qua-ms.jpg" alt="lap-ke-hoach-kinh-doanh-hieu-qua-ms" />
                  </div>
                </div>
                {/* thông tin sản phẩm: tên, giá bìa giá bán tiết kiệm, các khuyến mãi, nút chọn mua.... */}
                <div className="col-md-7 khoithongtin">
                  <div className="row">
                    <div className="col-md-12 header">
                      <h4 className="ten">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h4>
                      
                      <hr />
                    </div>
                    <div className="col-md-7">
                      <div className="gia">
                        <div className="giabia">Giá bìa:<span className="giacu ml-2">139.000 ₫</span></div>
                        <div className="giaban">Giá bán tại DealBooks: <span className="giamoi font-weight-bold">111.200 </span><span className="donvitien">₫</span></div>
                        <div className="tietkiem">Tiết kiệm: <b>27.800 ₫</b> <span className="sale">-20%</span>
                        </div>
                      </div>
                      <div className="uudai my-3">
                        <h6 className="header font-weight-bold">Khuyến mãi &amp; Ưu đãi tại DealBook:</h6>
                        <ul>
                          <li><b>Miễn phí giao hàng </b>cho đơn hàng từ 150.000đ ở TP.HCM và 300.000đ ở
                            Tỉnh/Thành khác <a href="#">&gt;&gt; Chi tiết</a></li>
                          <li><b>Combo sách HOT - GIẢM 25% </b><a href="#">&gt;&gt;Xem ngay</a></li>
                          <li>Tặng Bookmark cho mỗi đơn hàng</li>
                          <li>Bao sách miễn phí (theo yêu cầu)</li>
                        </ul>
                      </div>
                      <div className="soluong d-flex">
                        <label className="font-weight-bold">Số lượng: </label>
                        <div className="input-number input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text btn-spin btn-dec">-</span>
                          </div>
                          <input type="text" defaultValue={1} className="soluongsp  text-center" />
                          <div className="input-group-append">
                            <span className="input-group-text btn-spin btn-inc">+</span>
                          </div>
                        </div>
                      </div>
                      <div className="nutmua btn w-100 text-uppercase">Chọn mua</div>
                      <a className="huongdanmuahang text-decoration-none" href="#">(Vui lòng xem hướng dẫn mua
                        hàng)</a>
                      <small className="share">Share: </small>
                      <div className="fb-like" data-href="https://www.facebook.com/DealBook-110745443947730/" data-width="300px" data-layout="button" data-action="like" data-size="small" data-share="true" />
                    </div>
                    {/* thông tin khác của sản phẩm:  tác giả, ngày xuất bản, kích thước ....  */}
                    <div className="col-md-5">
                      <div className="thongtinsach">
                        <ul>
                          <li>Tác giả: <a href="#" className="tacgia">Brian Finch</a></li>
                          <li>Ngày xuất bản: <b>04-2020</b></li>
                          <li>Kích thước: <b>20.5 x 13.5 cm</b></li>
                          <li>Dịch giả: Skye Phan;</li>
                          <li>Nhà xuất bản: Nhà Xuất Bản Thanh Niên</li>
                          <li>Hình thức bìa: <b>Bìa mềm</b></li>
                          <li>Số trang: <b>336</b></li>
                          <li>Cân nặng: <b>0</b></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* decripstion của 1 sản phẩm: giới thiệu , đánh giá độc giả  */}
                <div className="product-description col-md-9">
                  {/* 2 tab ở trên  */}
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active text-uppercase" id="nav-gioithieu-tab" data-toggle="tab" href="#nav-gioithieu" role="tab" aria-controls="nav-gioithieu" aria-selected="true">Giới thiệu</a>
                      <a className="nav-item nav-link text-uppercase" id="nav-danhgia-tab" data-toggle="tab" href="#nav-danhgia" role="tab" aria-controls="nav-danhgia" aria-selected="false">Đánh
                        giá của độc giả</a>
                    </div>
                  </nav>
                  {/* nội dung của từng tab  */}
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active ml-3" id="nav-gioithieu" role="tabpanel" aria-labelledby="nav-gioithieu-tab">
                      <h6 className="tieude font-weight-bold">Lập Kế Hoạch Kinh Doanh Hiệu Quả</h6>
                      <p>
                        <span>Khi bắt đầu thành lập doanh nghiệp hay mở rộng quy mô hoạt động, lập ra một
                          bản kế hoạch kinh doanh là bước đi đầu tiên không thể thiếu. Bản kế hoạch kinh
                          doanh càng được chuẩn bị kỹ lưỡng và lôi cuốn bao nhiêu, cơ hội ghi điểm trước
                          các nhà đầu tư càng lớn bấy nhiêu. Phải chăng, thông qua bản kế hoạch kinh
                          doanh, bạn muốn người đọc:
                        </span>
                      </p>
                      <p>
                        <span>- Đầu tư vào một ý tưởng kinh doanh mới hay một doanh nghiệp đang hoạt
                          động?</span>
                      </p>
                      <p>
                        <span>- Mua lại doanh nghiệp của bạn?</span>
                      </p>
                      <p>
                        <span>- Tham gia liên doanh với bạn?</span>
                      </p>
                      <p>
                        <span>- Chấp nhận đề nghị của bạn để thực hiện hợp đồng?</span>
                      </p>
                      <p>
                        <span>- Cấp cho bạn một khoản hỗ trợ hoặc phê duyệt theo quy định?</span>
                      </p>
                      <p>
                        <span>- Thuyết phục hội đồng quản trị thay đổi phương hướng hoạt động doanh nghiệp
                          của bạn?</span>
                      </p>
                      <p>
                        <span>Cuốn sách “Lập kế hoạch kinh doanh hiệu quả” sẽ hướng dẫn bạn cách để tạo ra
                          bản kế hoạch kinh doanh thu hút mọi tổ chức tài chính, khiến họ phải đáp ứng
                          mong muốn của bạn và hỗ trợ bạn tới cùng trong công việc kinh doanh. Thông qua
                          cuốn sách, bạn sẽ biết cách:</span>
                      </p>
                      <p>
                        <span>Tạo ra bản kế hoạch kinh doanh hoàn chỉnh Xây dựng chiến lược hoạt động cho
                          doanh nghiệp.</span>
                      </p>
                      <p>
                        <span>Đưa ra dự báo kinh doanh sát với thực tế.</span>
                      </p>
                      <p>
                        <span>Nắm rõ các thông tin tài chính ảnh hưởng lớn tới doanh nghiệp.</span>
                      </p>
                      <p>
                        <span>Trong quá trình xây dựng kế hoạch, việc tham khảo ý kiến chuyên gia là điều
                          cần thiết nhưng bạn phải là người đóng góp chính và hiểu tường tận mỗi chi tiết
                          có trong đó. Hãy xem việc lập kế hoạch giống như việc truyền đạt câu chuyện của
                          mình nhằm thuyết phục người đọc đồng hành cùng bạn trên con đường chinh phục mục
                          tiêu kinh doanh.</span>
                      </p>
                      <p>
                        <span>Bạn chỉ có một cơ hội duy nhất để tạo ấn tượng đầu tiên tốt đẹp. Đừng để nó
                          vụt mất. Hãy trình bày một văn bản có tính thuyết phục cao, bố cục đẹp mắt,
                          không mắc lỗi chính tả, ngữ pháp, bao gồm các vấn đề trọng tâm và cuối cùng là
                          chứa các thông tin bổ trợ cần thiết.</span>
                      </p>
                      <p>
                        <span>Bằng kiến thức, kinh nghiệm của mình, Brian Finch - một chuyên gia trong lĩnh
                          vực tư vấn lập kế hoạch kinh doanh và quản lý tài chính - chắc chắn sẽ giúp bạn
                          xây dựng thành công kế hoạch kinh doanh của riêng mình.</span>
                      </p>
                    </div>
                    <div className="tab-pane fade" id="nav-danhgia" role="tabpanel" aria-labelledby="nav-danhgia-tab">
                      <div className="row">
                        <div className="col-md-3 text-center">
                          <p className="tieude">Đánh giá trung bình</p>
                          <div className="diem">0/5</div>
                          <div className="sao">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <p className="sonhanxet text-muted">(0 nhận xét)</p>
                        </div>
                        <div className="col-md-5">
                          <div className="tiledanhgia text-center">
                            <div className="motthanh d-flex align-items-center">5 <i className="fa fa-star" />
                              <div className="progress mx-2">
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div> 0%
                            </div>
                            <div className="motthanh d-flex align-items-center">4 <i className="fa fa-star" />
                              <div className="progress mx-2">
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div> 0%
                            </div>
                            <div className="motthanh d-flex align-items-center">3 <i className="fa fa-star" />
                              <div className="progress mx-2">
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div> 0%
                            </div>
                            <div className="motthanh d-flex align-items-center">2 <i className="fa fa-star" />
                              <div className="progress mx-2">
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div> 0%
                            </div>
                            <div className="motthanh d-flex align-items-center">1 <i className="fa fa-star" />
                              <div className="progress mx-2">
                                <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                              </div> 0%
                            </div>
                            <div className="btn vietdanhgia mt-3">Viết đánh giá của bạn</div>
                          </div>
                          {/* nội dung của form đánh giá  */}
                          <div className="formdanhgia">
                            <h6 className="tieude text-uppercase">GỬI ĐÁNH GIÁ CỦA BẠN</h6>
                            <span className="danhgiacuaban">Đánh giá của bạn về sản phẩm này:</span>
                            <div className="rating d-flex flex-row-reverse align-items-center justify-content-end">
                              <input type="radio" name="star" id="star1" /><label htmlFor="star1" />
                              <input type="radio" name="star" id="star2" /><label htmlFor="star2" />
                              <input type="radio" name="star" id="star3" /><label htmlFor="star3" />
                              <input type="radio" name="star" id="star4" /><label htmlFor="star4" />
                              <input type="radio" name="star" id="star5" /><label htmlFor="star5" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="txtFullname w-100" placeholder="Mời bạn nhập tên(Bắt buộc)" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="txtEmail w-100" placeholder="Mời bạn nhập email(Bắt buộc)" />
                            </div>
                            <div className="form-group">
                              <input type="text" className="txtComment w-100" placeholder="Đánh giá của bạn về sản phẩm này" />
                            </div>
                            <div className="btn nutguibl">Gửi bình luận</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    {/* het tab nav-danhgia  */}
                  </div>
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
        <section className="_1khoi sachmoi">
          <div className="container">
            <div className="noidung bg-white" style={{width: '100%'}}>
              <div className="row">
                {/*header*/}
                <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-light pt-4">
                  <h5 className="header text-uppercase" style={{fontWeight: 400}}>Sản phẩm tương tự</h5>
                  <a href="sach-moi-tuyen-chon.html" className="btn btn-warning btn-sm text-white">Xem tất cả</a>
                </div>
              </div>
              <div className="khoisanpham" style={{paddingBottom: '2rem'}}>
                {/* 1 sản phẩm */}
                <div className="card">
                  <a href="Lap-trinh-ke-hoach-kinh-doanh-hieu-qua.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lập Kế Hoạch Kinh Doanh Hiệu Quả">
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="Ma-bun-luu-manh-va-nhung-cau-chuyen-khac-cua-nguyen-tri.html" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                        Trí">
                    <img className="card-img-top anh" src="images/ma-bun-luu-manh.jpg" alt="ma-bun-luu-manh" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Ma Bùn Lưu Manh Và Những Câu Chuyện Khác Của Nguyễn
                        Trí</h6>
                      <small className="tacgia text-muted">Nguyễn Trí</small>
                      <div className="gia d-flex align-items-baseline">
                        <div className="giamoi">68.000 ₫</div>
                        <div className="giacu text-muted">85.000 ₫</div>
                        <div className="sale">-20%</div>
                      </div>
                      <div className="danhgia">
                        <ul className="d-flex" style={{listStyle: 'none'}}>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li className="active"><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng">
                    <img className="card-img-top anh" src="images/bank-4.0.jpg" alt="bank-4.0" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bank 4.0 - Giao dịch mọi nơi, không chỉ là ngân hàng
                      </h6>
                      <small className="tacgia text-muted">Brett King</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)">
                    <img className="card-img-top anh" src="images/bo-sach-500-cau-chuyen-dao-duc.jpg" alt="bo-sach-500-cau-chuyen-dao-duc" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bộ Sách 500 Câu Chuyện Đạo Đức - Những Câu Chuyện
                        Tình Thân (Bộ 8 Cuốn)</h6>
                      <small className="tacgia text-muted">Nguyễn Hạnh - Trần Thị Thanh Nguyên</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh">
                    <img className="card-img-top anh" src="images/ung-thu-hoang-de-cua-bach-benh.jpg" alt="ung-thu-hoang-de-cua-bach-benh" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Lịch Sử Ung Thư - Hoàng Đế Của Bách Bệnh</h6>
                      <small className="tacgia text-muted">Siddhartha Mukherjee</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu">
                    <img className="card-img-top anh" src="images/troi-dem-huyen-dieu.jpg" alt="troi-dem-huyen-dieu" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Cuốn Sách Khám Phá: Trời Đêm Huyền Diệu</h6>
                      <small className="tacgia text-muted">Disney Learning</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5 Cuốn)">
                    <img className="card-img-top anh" src="images/bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te.jpg" alt="bo-sach-nhung-cau-chuyen-cho-con-thanh-nguoi-tu-te" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bộ Sách Những Câu Chuyện Cho Con Thành Người Tử Tế (Bộ 5
                        Cuốn)</h6>
                      <small className="tacgia text-muted">Nhiều Tác Giả</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Lịch Sử Thế Giới">
                    <img className="card-img-top anh" src="images/lich-su-the-gioi.jpg" alt="lich-su-the-gioi" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Lịch Sử Thế Giới</h6>
                      <small className="tacgia text-muted">Nam Phong tùng thư - Phạm Quỳnh chủ nhiệm</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* khối sản phẩm đã xem  */}
        <section className="_1khoi combohot mt-4">
          <div className="container">
            <div className="noidung bg-white" style={{width: '100%'}}>
              <div className="row">
                {/*header*/}
                <div className="col-12 d-flex justify-content-between align-items-center pb-2 bg-light">
                  <h5 className="header text-uppercase" style={{fontWeight: 400}}>Sản phẩm bạn đã xem</h5>
                  <a href="#" className="btn btn-warning btn-sm text-white">Xem tất cả</a>
                </div>
              </div>
              <div className="khoisanpham">
                {/* 1 sản phẩm */}
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Chuyện Nghề Và Chuyện Đời - Bộ 4 Cuốn">
                    <img className="card-img-top anh" src="images/combo-chuyen-nghe-chuyen-doi.jpg" alt="combo-chuyen-nghe-chuyen-doi" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Chuyện Nghề Và Chuyện Đời - Bộ 4 Cuốn</h6>
                      <small className="tacgia text-muted">Nguyễn Hữu Long</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Combo Mẹ Con Sư Tử - Bồ Tát Ngàn Tay Ngàn Mắt">
                    <img className="card-img-top anh" src="images/combo-me-con-su-tu-bo-tat-ngan-tay-ngan-mat.jpg" alt="combo-me-con-su-tu-bo-tat-ngan-tay-ngan-mat" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Combo Mẹ Con Sư Tử - Bồ Tát Ngàn Tay Ngàn Mắt</h6>
                      <small className="tacgia text-muted">Thích Nhất Hạnh</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Combo Osho: Hạnh Phúc Tại Tâm, Can Đảm Biến Thách Thức Thành
                            Sức Mạnh & Sáng Tạo Bừng Cháy Sức Mạnh Bên Trong">
                    <img className="card-img-top anh" src="images/combo-hanh-phuc-sang-tao.jpg" alt="combo-hanh-phuc-sang-tao" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Combo Osho: Hạnh Phúc Tại Tâm, Can Đảm Biến Thách Thức Thành
                        Sức Mạnh &amp; Sáng Tạo Bừng Cháy Sức Mạnh Bên Trong
                      </h6>
                      <small className="tacgia text-muted">Gosho Aoyama, Mutsuki Watanabe, Takahisa Taira</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Combo Giáo Dục Và Ý Nghĩa Cuộc Sống Và Bạn Đang Nghịch Gì Với Đời Mình?">
                    <img className="card-img-top anh" src="images/combo-giao-duc-va-y-nghia-cuoc-song.jpg" alt="combo-giao-duc-va-y-nghia-cuoc-song" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Combo Giáo Dục Và Ý Nghĩa Cuộc Sống Và Bạn Đang Nghịch Gì Với
                        Đời Mình?</h6>
                      <small className="tacgia text-muted"> J.Krishnamurti</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Combo Dinh Dưỡng Xanh - Thần dược xanh">
                    <img className="card-img-top anh" src="images/combo-dinh-duong-than-duoc-xanh.jpg" alt="combo-dinh-duong-than-duoc-xanh" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Combo Dinh Dưỡng Xanh - Thần dược xanh</h6>
                      <small className="tacgia text-muted">Ryu Seung-SunVictoria Boutenko</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Combo Ăn Xanh Để Khỏe - Sống Lành Để Trẻ">
                    <img className="card-img-top anh" src="images/combo-an-xanh-song-lanh.jpg" alt="combo-an-xanh-song-lanh" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Combo Ăn Xanh Để Khỏe - Sống Lành Để Trẻ</h6>
                      <small className="tacgia text-muted">Norman W. Walker</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Combo Lược Sử Loài Người - Lược Sử Tương Lai - 21 Bài Học Cho Thế Kỷ 21">
                    <img className="card-img-top anh" src="images/combo-luoc-su-loai-nguoi.jpg" alt="combo-luoc-su-loai-nguoi" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Combo Lược Sử Loài Người - Lược Sử Tương Lai - 21 Bài Học Cho
                        Thế Kỷ 21</h6>
                      <small className="tacgia text-muted">Yuval Noah Harari</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card">
                  <a href="#" className="motsanpham" style={{textDecoration: 'none', color: 'black'}} data-toggle="tooltip" data-placement="bottom" title="Bộ Sách Phong Cách Sống (Bộ 5 Cuốn)">
                    <img className="card-img-top anh" src="images/combo-phong-cach-song.jpg" alt="combo-phong-cach-song" />
                    <div className="card-body noidungsp mt-3">
                      <h6 className="card-title ten">Bộ Sách Phong Cách Sống (Bộ 5 Cuốn)</h6>
                      <small className="tacgia text-muted">Marie Tourell Soderberg, Joanna Nylund, Yukari
                        Mitsuhashi, Margareta Magnusson, Linnea Dunne</small>
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
                          <li><span className="text-muted">0 nhận xét</span></li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
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


export default ProductDetail;