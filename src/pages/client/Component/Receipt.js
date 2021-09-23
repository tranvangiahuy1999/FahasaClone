import React, {  useEffect, useState  } from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import { display } from '@material-ui/system';
import shopApis from "../../../apis/ShopApis";
const  Receipt=()=> {
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
                  <ul >
                  {categoryList.length ? (
                    categoryList
                      .filter((item, idx) => idx < 11)
                      .map((value, index) => (
                    <li  key={index}> <a href="/danh-sach"> {value.name}</a><i className="fa fa-chevron-right icon float-right" />
                      <ul className="categorydetail container">
                      <div className="row " style={{height:'185px'}} >
                      {value.subCate.length ? (
                              value.subCate
                                .filter((item, idx) => idx < 6)
                                .map((value, index) => (
                       
                          <div className="col-4"key={index}>
                          <li className="liheader"><a href="/danh-sach" className="header text-uppercase"> {value.name}
                          </a></li>
                        <div className="content trai">
                        {value.subCate.length ? (
                                        value.subCate
                                          .filter((item, idx) => idx < 5)
                                          .map((value, index) => (
                          <li key={index}><a href="/danh-sach">{value.name}</a></li>
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
            {/* giao diện giỏ hàng  */}
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
                  
                  </div>
                </div>
              </div>
              {/* giao diện giỏ hàng khi có hàng (phần comment màu xanh bên dưới là phần 2 sản phẩm trong giỏ hàng nhưng giờ đã demo bằng jquery) */}
              <div className="col-md-8 cart">
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
                                    </div>
                                </div>
                            </div> */}
                </div>
              </div>
              {/* giao diện phần thanh toán nằm bên phải  */}
              <div className="col-md-4 cart-steps pl-0">
                <div id="cart-steps-accordion" role="tablist" aria-multiselectable="true">
               
                  
                  {/* bước số 2: nhập địa chỉ giao hàng  */}
                  <div className="card">
                    
                          <span style={{textAlign:'center',paddingTop:'15px',fontSize:'20px',fontWeight:'bold'}} className="label">Địa chỉ giao hàng</span>
                
                    
                    <div  role="tabpanel" aria-labelledby="step2header">
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
                        
                        <div className="card-body" style={{padding: '15px'}}>
                          <div className="goigiaohang">
                            <h6 className="header text-uppercase">Chọn gói giao hàng</h6>
                            <div className="option">
                              <input type="radio" name="goigiaohang" id="ghtc" defaultChecked />
                              <label htmlFor="ghtc">Giao hàng tiêu chuẩn</label>
                              <p>Từ 1-3 ngày tại TP. Hồ Chí Minh; từ 3-5 ngày đối với các Tỉnh /
                                Thành khác</p>
                            </div>
                            <div className="option">
                              <input type="radio" name="goigiaohang" id="ghn" />
                              <label htmlFor="ghn">Giao hàng nhanh</label>
                              <p>1 ngày tại TP. Hồ Chí Minh; từ 2-3 ngày đối với các Tỉnh / Thành
                                khác</p>
                            </div>
                          </div>
                          <hr />
                          <div className="pttt">
                            <h6 className="header text-uppercase">Chọn phương thức thanh toán</h6>
                            <div className="option mb-2">
                              <input type="radio" name="pttt" id="cod" defaultChecked />
                              <label htmlFor="cod">Thanh toán bằng tiền mặt khi nhận hàng</label>
                            </div>
                            <div className="option option2">
                              <input type="radio" name="pttt" id="atm" />
                              <label htmlFor="atm" className="chuyenkhoan">Thanh toán chuyển khoản trước
                                qua Thẻ ATM/Internet Banking</label>
                              <p className="mt-4">- Quý khách chỉ chuyển khoản khi được xác nhận có đủ
                                sách qua điện thoại từ DealBook.</p>
                              <p>- Thời gian chuyển khoản là trong tối đa 2 ngày từ khi có xác
                                nhận đủ sách.</p>
                              <p>- Nội dung chuyển khoản cần ghi: <a href="#">[Mã đơn hàng]</a> ;
                                hoặc <a href="#">[số điện thoại dùng đặt hàng]</a> </p>
                              <p>- Xem thông tin chuyển khoản của NetaBooks <a href="phuong-thuc-thanh-toan.html">tại đây</a> </p>
                            </div>
                          </div>
                          <hr />
                          <button className="btn btn-lg btn-block btn-checkout text-uppercase text-white" style={{background: '#F5A623'}}>Đặt mua</button>
                          <p className="text-center note-before-checkout">(Vui lòng kiểm tra lại đơn hàng
                            trước khi Đặt Mua)</p>
                        </div>
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
      {/* het khoi content  */}
            {/* thanh cac dich vu :mien phi giao hang, qua tang mien phi ........ */}
            <section className="abovefooter text-white" >
              <div className="container"style={{backgroundColor: '#64ae55'}}>
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


export default Receipt;
