import React from "react";

const HorizontalProductCard = (props) => {
  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  return (
    <div className="product-card-horizontal row m-1 p-0">
      <div className="col-5">
        <div className="product-card-horizontal-img-wrapper">
          <img alt="" src={props.img}></img>
        </div>
      </div>
      <div className="col-7">
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
