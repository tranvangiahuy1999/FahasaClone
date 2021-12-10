import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container bg-white p-3">
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12">
            <div>
              <h3 className="header text-uppercase font-weight-bold">
                Về nhà sách kiên giang
              </h3>
              <div className="footer-text">
                Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM Công Ty Cổ Phần Phát
                Hành Sách - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM
              </div>
              <div className="footer-text">
                Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG
                hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất
                cả Hệ Thống Fahasa trên toàn quốc.
              </div>
              <img src="images/dang-ky-bo-cong-thuong.png" alt="" />
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
          <div className="col-md-6 col-12">
            <div>
              <h3 className="header text-uppercase font-weight-bold">
                HỖ TRỢ KHÁCH HÀNG
              </h3>
              <div className="footer-text">Hướng dẫn đặt hàng</div>
              <div className="footer-text">Phương thức thanh toán</div>
              <div className="footer-text">Phương thức vận chuyển</div>
              <div className="footer-text">Chính sách đổi trả</div>
            </div>
          </div>          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
