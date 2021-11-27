import React from "react";

const ProductCard = (props) => {
  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };
  return (
    <div className="product-card">
      <div className="product-card-img-wrapper">
        <img alt="" src={props.img}></img>
      </div>
      <div className="product-card-name two-line-text">{props.productName}</div>
      <div className="product-card-price">
        {formatCurrency(props.productPrice)}đ
      </div>
    </div>
  );
};

export default ProductCard;
