import React from "react";

const Service = () => {
  return (
    <div className="main-container">
      <section className="text-white" style={{ background: "#F0F0F0" }}>
        <div style={{ backgroundColor: "#64ae55" }}>
          <div className="row m-0 p-0">
            <div className="col-lg-3 col-sm-6">
              <div className="service-item d-flex align-items-center">
                <img src="/images/icon-books.png" alt="icon-books" />
                <div className="service-content">
                  <h6 className="service-title font-weight-bold">
                    HƠN 14.000 TỰA SÁCH HAY
                  </h6>
                  <p className="service-detail">Tuyển chọn bởi DealBooks</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item d-flex align-items-center">
                <img src="/images/icon-ship.png" alt="icon-ship" />
                <div className="service-content">
                  <h6 className="service-title font-weight-bold">
                    MIỄN PHÍ GIAO HÀNG
                  </h6>
                  <p className="service-detail">Từ 150.000đ ở TP.HCM</p>
                  <p className="service-detail">
                    Từ 300.000đ ở tỉnh thành khác
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item d-flex align-items-center">
                <img src="/images/icon-gift.png" alt="icon-gift" />
                <div className="service-content">
                  <h6 className="service-title font-weight-bold">
                    QUÀ TẶNG MIỄN PHÍ
                  </h6>
                  <p className="service-detail">Tặng Bookmark</p>
                  <p className="service-detail">Bao sách miễn phí</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="service-item d-flex align-items-center">
                <img src="/images/icon-return.png" alt="icon-return" />
                <div className="service-content">
                  <h6 className="service-title font-weight-bold">
                    ĐỔI TRẢ NHANH CHÓNG
                  </h6>
                  <p className="service-detail">Đối với sản phẩm bị lỗi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
