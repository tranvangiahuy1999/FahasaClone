import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineDoubleRight } from "react-icons/ai";

const MarketingBox = () => {
  return (
    <div className="marketing-main-container">
      <div className="marketing-describe-container">
        <h6 className="describe-text">Tại Nhà sách Kiên Giang: </h6>
        <p className="icon">
          <AiOutlineDoubleRight /> Giao hàng cho đơn hàng ở Rạch Giá và ở
          Tỉnh/Thành khác
        </p>
        <p className="icon">
          <AiOutlineDoubleRight /> Combo sách HOT - GIẢM 25%{" "}
          <Link style={{ color: "orange" }} to="/">
            <AiOutlineDoubleRight /> Xem ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MarketingBox;
