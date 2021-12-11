import React from "react";

const HorizontalProductCard = (props) => {
  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  return (
    <div className="product-card-horizontal row ml-1">
      <div className="col-4">
        <div className="product-card-horizontal-img-wrapper">
          <img alt="" src={props.img}></img>
        </div>
      </div>
      <div className="col-8">
        <div className="product-card-name two-line-text">
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
