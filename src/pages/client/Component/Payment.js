import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
function Payment() {
  
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
      <section className="content my-3">
        <div className="container">
          <div className="cart-page bg-white">
            <div className="row">
              {/* giao diện giỏ hàng khi không có item  */}
              <div className="col-12 cart-empty d-none">
                <div className="py-3 pl-3">
                  <h6 className="header-gio-hang">GIỎ HÀNG CỦA BẠN <span>(0 sản phẩm)</span></h6>
                  <div className="cart-empty-content w-100 text-center justify-content-center">
                    <img src="images/shopping-cart-not-product.png" alt="shopping-cart-not-product" />
                    <p>Chưa có sản phẩm nào trong giở hàng của bạn</p>
                    <a href="index.html" className="btn nutmuathem mb-3">Mua thêm</a>
                  </div>
                </div>
              </div>
              {/* giao diện giỏ hàng khi có hàng (phần comment màu xanh bên dưới là phần 2 sản phẩm trong giỏ hàng nhưng giờ đã demo bằng jquery) */}
              <div className="col-md-4 cart right ">
                <div className="cart-content py-3 pl-3 text-right">
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
                                    </div>
                                </div>
                            </div> */}
                           
                       
                </div>
              </div>
              {/* giao diện phần thanh toán nằm bên phải  */}
              <div className="col-md-8 cart-steps pl-0 le">
                <div id="cart-steps-accordion" role="tablist" aria-multiselectable="true">
                  {/* bước số 1: đăng nhập hoặc đăng ký */}
                 
                  {/* bước số 2: nhập địa chỉ giao hàng  */}
                  <div className="card">
                    <div className="card-header" role="tab" id="step2header">
                      <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#cart-steps-accordion" href="#step2contentid" aria-expanded="true" aria-controls="step2contentid" className="text-uppercase header"><span className="steps">1</span>
                          <span className="label">Địa chỉ giao hàng</span>
                          <i className="fa fa-chevron-right float-right" />
                        </a>
                      </h5>
                    </div>
                    <div id="step2contentid" className="collapse in" role="tabpanel" aria-labelledby="step2header">
                      <div className="card-body">
                        <form className="form-diachigiaohang">
                          <div className="form-label-group">
                            <input type="text" id="inputName" className="form-control" placeholder="Nhập họ và tên" name="name" required autofocus />
                          </div>
                          <div className="form-label-group">
                            <input type="text" id="inputPhone" className="form-control" placeholder="Nhập số điện thoại" name="phone" required />
                          </div>
                          <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Nhập địa chỉ email" name="email" required />
                          </div>
                          <div className="form-label-group">
                            <input type="text" id="inputAddress" className="form-control" placeholder="Nhập Địa chỉ giao hàng" name="address" required />
                          </div>
                          <div className="form-label-group">
                            <input type="text" id="inputCity" className="form-control" placeholder="Nhập Tỉnh/Thành phố" name="city" required />
                          </div>
                          <div className="form-label-group">
                            <input type="text" id="inputDistrict" className="form-control" placeholder="Nhập Quận/Huyện" name="district" required />
                          </div>
                          <div className="form-label-group">
                            <textarea type="text" id="inputNote" className="form-control" placeholder="Nhập ghi chú (Nếu có)" name="note" defaultValue={""} />
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* bước 3: thanh toán đặt mua  */}
                    
                  </div>
                </div>
              </div>
              {/* het div cart-steps  */}
            </div>
            {/* het row  */}
        
          </div>
          {/* het cart-page  */}
        </div>
        {/* het container  */}
      </section>
           
           <div className="privacy py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          {/* tittle heading */}
          <h3 className="tittle-w3l text-left mb-lg-5 mb-sm-4 mb-3">
            <span>P</span>hương Thức Vận Chuyển</h3>
          {/* //tittle heading */}
          <div className="checkout-right">
            {/*Horizontal Tab*/}
            <div id="parentHorizontalTab">
              <ul className="resp-tabs-list hor_1">
                <li>Cash on delivery (COD)</li>
                <li>Credit/Debit</li>
                <li>Net Banking</li>
                <li>Paypal Account</li>
              </ul>
              <div className="resp-tabs-container hor_1">
                <div>
                  <div className="vertical_post check_box_agile">
                    <h5>COD</h5>
                    <div className="checkbox">
                      <div className="check_box_one cashon_delivery">
                        <label className="anim">
                          <input type="checkbox" className="checkbox" />
                          <span> We also accept Credit/Debit card on delivery. Please Check with the agent.</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form action="#" method="post" className="creditly-card-form agileinfo_form">
                    <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                      <div className="credit-card-wrapper">
                        <div className="first-row form-group">
                          <div className="controls">
                            <label className="control-label">Name on Card</label>
                            <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                          </div>
                          <div className="w3_agileits_card_number_grids my-3">
                            <div className="w3_agileits_card_number_grid_left">
                              <div className="controls">
                                <label className="control-label">Card Number</label>
                                <input className="number credit-card-number form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="•••• •••• •••• ••••" />
                              </div>
                            </div>
                            <div className="w3_agileits_card_number_grid_right mt-2">
                              <div className="controls">
                                <label className="control-label">CVV</label>
                                <input className="security-code form-control" Â· inputMode="numeric" type="text" name="security-code" placeholder="•••" />
                              </div>
                            </div>
                            <div className="clear"> </div>
                          </div>
                          <div className="controls">
                            <label className="control-label">Expiration Date</label>
                            <input className="expiration-month-and-year form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                          </div>
                        </div>
                     
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <div className="vertical_post">
                    <form action="#" method="post">
                      <h5>Select From Popular Banks</h5>
                      <div className="swit-radio">
                        <div className="check_box_one">
                          <div className="radio_one">
                            <label>
                              <input type="radio" name="radio" defaultChecked />
                              <i />Syndicate Bank</label>
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            <label>
                              <input type="radio" name="radio" />
                              <i />Bank of Baroda</label>
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            <label>
                              <input type="radio" name="radio" />
                              <i />Canara Bank</label>
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            <label>
                              <input type="radio" name="radio" />
                              <i />ICICI Bank</label>
                          </div>
                        </div>
                        <div className="check_box_one">
                          <div className="radio_one">
                            <label>
                              <input type="radio" name="radio" />
                              <i />State Bank Of India</label>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <h5>Or Select Other Bank</h5>
                      <div className="section_room_pay">
                        <select className="year">
                          <option value>=== Other Banks ===</option>
                          <option value="ALB-NA">Allahabad Bank NetBanking</option>
                          <option value="ADB-NA">Andhra Bank</option>
                          <option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option>
                          <option value="BBC-NA">Bank of Baroda Corporate NetBanking</option>
                          <option value="BBR-NA">Bank of Baroda Retail NetBanking</option>
                          <option value="BOI-NA">Bank of India NetBanking</option>
                          <option value="BOM-NA">Bank of Maharashtra NetBanking</option>
                          <option value="CSB-NA">Catholic Syrian Bank NetBanking</option>
                          <option value="CBI-NA">Central Bank of India</option>
                          <option value="CUB-NA">City Union Bank NetBanking</option>
                          <option value="CRP-NA">Corporation Bank</option>
                          <option value="DBK-NA">Deutsche Bank NetBanking</option>
                          <option value="DCB-NA">Development Credit Bank</option>
                          <option value="DC2-NA">Development Credit Bank - Corporate</option>
                          <option value="DLB-NA">Dhanlaxmi Bank NetBanking</option>
                          <option value="FBK-NA">Federal Bank NetBanking</option>
                          <option value="IDS-NA">Indusind Bank NetBanking</option>
                          <option value="IOB-NA">Indian Overseas Bank</option>
                          <option value="ING-NA">ING Vysya Bank (now Kotak)</option>
                          <option value="JKB-NA">Jammu and Kashmir NetBanking</option>
                          <option value="JSB-NA">Janata Sahakari Bank Limited</option>
                          <option value="KBL-NA">Karnataka Bank NetBanking</option>
                          <option value="KVB-NA">Karur Vysya Bank NetBanking</option>
                          <option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option>
                          <option value="OBC-NA">Oriental Bank of Commerce NetBanking</option>
                          <option value="CPN-NA">PNB Corporate NetBanking</option>
                          <option value="PNB-NA">PNB NetBanking</option>
                          <option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit Card</option>
                          <option value="RBS-NA">RBS (The Royal Bank of Scotland)</option>
                          <option value="SWB-NA">Saraswat Bank NetBanking</option>
                          <option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option>
                          <option value="SBH-NA">SB Hyderabad NetBanking</option>
                          <option value="SBM-NA">SB Mysore NetBanking</option>
                          <option value="SBT-NA">SB Travancore NetBanking</option>
                          <option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option>
                          <option value="SIB-NA">South Indian Bank NetBanking</option>
                          <option value="SBP-NA">State Bank of Patiala NetBanking</option>
                          <option value="SYD-NA">Syndicate Bank NetBanking</option>
                          <option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking</option>
                          <option value="UCO-NA">UCO Bank NetBanking</option>
                          <option value="UBI-NA">Union Bank NetBanking</option>
                          <option value="UNI-NA">United Bank of India NetBanking</option>
                          <option value="VJB-NA">Vijaya Bank NetBanking</option>
                        </select>
                      </div>
                     
                    </form>
                  </div>
                </div>
                <div>
                  <div id="tab4" className="tab-grid" style={{display: 'block'}}>
                    <div className="row">
                      <div className="col-md-6 pay-forms">
                        <img className="pp-img" src="images/paypal.png" alt="Image Alternative text" title="Image Title" />
                        <p>Important: You will be redirected to PayPal's website to securely complete your payment.</p>
                        <a className="btn btn-primary">Checkout via Paypal</a>
                      </div>
                      <div className="col-md-6 number-paymk">
                        <form action="#" method="post" className="creditly-card-form-2 shopf-sear-headinfo_form">
                          <section className="creditly-wrapper payf_wrapper">
                            <div className="credit-card-wrapper">
                              <div className="first-row form-group">
                                <div className="controls">
                                  <label className="control-label">Card Holder </label>
                                  <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                </div>
                                <div className="paymntf_card_number_grids my-2">
                                  <div className="fpay_card_number_grid_left">
                                    <div className="controls">
                                      <label className="control-label">Card Number</label>
                                      <input className="number credit-card-number-2 form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="•••• •••• •••• ••••" />
                                    </div>
                                  </div>
                                  <div className="fpay_card_number_grid_right mt-2">
                                    <div className="controls">
                                      <label className="control-label">CVV</label>
                                      <input className="security-code-2 form-control" Â· inputMode="numeric" type="text" name="security-code" placeholder="•••" />
                                    </div>
                                  </div>
                                  <div className="clear"> </div>
                                </div>
                                <div className="controls">
                                  <label className="control-label">Valid Thru</label>
                                  <input className="expiration-month-and-year-2 form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                </div>
                              </div>
                         
                            </div>
                          </section>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            {/*Plug-in Initialisation*/}
          </div>
        </div>
        <a href="/thanh-toan" className="col-md-4"><button type="button" className="btn btn-success paybtn">Xác Nhận Đặt Hàng</button></a>
      </div>
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


export default Payment;