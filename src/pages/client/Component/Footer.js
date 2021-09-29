import React, { Component } from 'react';

function Footer() {
    
        return (
            <div>
            <footer>
              <div className="container py-4" style={{background:'white',width:'81%'}}>
                <div className="row">
                  <div className="col-md-6 col-xs-6">
                    <div className="gioithieu">
                      <h3 className="header text-uppercase font-weight-bold">Về DealBook</h3>
                      <a href="#">Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM Công Ty Cổ Phần Phát Hành Sách - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM</a>
                      <a href="#">Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</a>
                      <a href="#"><img src="images/dang-ky-bo-cong-thuong.png" alt="jcb-payment" /></a>
                      <div className="fb-like" data-href="https://www.facebook.com/DealBook-110745443947730/" data-width="300px" data-layout="button" data-action="like" data-size="small" data-share="true" />
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="hotrokh">
                      <h3 className="header text-uppercase font-weight-bold">HỖ TRỢ KHÁCH HÀNG</h3>
                      <a href="#">Hướng dẫn đặt hàng</a>
                      <a href="#">Phương thức thanh toán</a>
                      <a href="#">Phương thức vận chuyển</a>
                      <a href="#">Chính sách đổi trả</a>
                    
                    </div>
                  </div>
                
                  <div className="col-md-3 col-xs-6">
                    <div className="ptthanhtoan">
                    
                      <a href="#"><img src="images/footer_icon1.png" alt="jcb-payment" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* nut cuon len dau trang */}
            <div className="fixed-bottom">
              <div className="btn btn-warning float-right rounded-circle nutcuonlen" id="backtotop" href="#" style={{background: '#64ae55'}}><i className="fa fa-chevron-up text-white" /></div>
            </div>
          </div>
        
        );
    }


export default Footer;