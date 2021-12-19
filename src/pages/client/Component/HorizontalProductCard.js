import React from "react";
import { Link } from "react-router-dom";

const HorizontalProductCard = (props) => {
  const { item } = props;
  return (
    <Link className="rrd-custom-link" to={item.href} title={item.img.alt} data-toggle="tooltip">
      <div className="product-card-horizontal row m-1">
        <div className="col-lg-5 col-md-5 col-4 p-0">
          <div className="product-card-horizontal-img-wrapper">
            <img alt="" src={item.img.src} alt={item.img.alt}></img>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-8 p-0">
          <div className="product-card-name three-line-text">
            {item.title}
          </div>
          <div className="product-card-price">
            {item.price}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default HorizontalProductCard;
