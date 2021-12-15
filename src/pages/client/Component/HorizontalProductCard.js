import React from "react";

const HorizontalProductCard = (props) => {
  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  return (
    <div className="product-card-horizontal row m-1">
      <div className="col-lg-5 col-md-5 col-4 p-0">
        <div className="product-card-horizontal-img-wrapper">
          <img alt="" src={props.img}></img>
        </div>
      </div>
      <div className="col-lg-7 col-md-7 col-8 p-0">
        <div className="product-card-name three-line-text">
          {props.productName}
        </div>
        <div className="product-card-price">
          {formatCurrency(props.productPrice)}đ
        </div>
      </div>
    </div>
  );
};
export default HorizontalProductCard;
