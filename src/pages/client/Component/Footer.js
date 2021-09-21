import React, { Component } from 'react';

function Footer() {
    
        return (
            <div>
            <footer>
              <div className="container py-4">
                <div className="row">
                  <div className="col-md-4 col-xs-6">
                    <div className="gioithieu">
                      <h3 className="header text-uppercase font-weight-bold">Về DealBook</h3>
                      <a href="#">Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM Công Ty Cổ Phần Phát Hành Sách - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM</a>
                      <a href="#"></a>
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
                    <div className="lienket">
                      <h3 className="header text-uppercase font-weight-bold">HỢP TÁC VÀ LIÊN KẾT</h3>
                      <img src="images/dang-ky-bo-cong-thuong.png" alt="dang-ky-bo-cong-thuong" />
                    </div>
                  </div>
                  <div className="col-md-2 col-xs-6">
                    <div className="ptthanhtoan">
                      <h3 className="header text-uppercase font-weight-bold">Phương thức thanh toán</h3>
                      <img src="images/visa-payment.jpg" alt="visa-payment" />
                      <img src="images/master-card-payment.jpg" alt="master-card-payment" />
                      <img src="images/jcb-payment.jpg" alt="jcb-payment" />
                      <img src="images/atm-payment.jpg" alt="atm-payment" />
                      <img src="images/cod-payment.jpg" alt="cod-payment" />
                      <img src="images/payoo-payment.jpg" alt="payoo-payment" />
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