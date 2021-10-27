import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { convertURL } from "../../../../utils/format-string.util";

const HistoryLink = ({ product }) => {
  return (
    <div>
      <section className="history-link-container">
        <h3 className="history-link-item">
          <Link
            className="link-item"
            to={`/danh-sach/${convertURL(product.cate1.name)}.${
              product.cate1._id
            }`}
          >
            {product.cate1.name}
          </Link>
          {product.cate2 ? (
            <div style={{ display: "inline" }}>
              <Link
                className="link-item"
                to={`/danh-sach/${convertURL(product.cate2.name)}.${
                  product.cate2._id
                }`}
              >
                <AiOutlineRight />
                {product.cate2.name}
              </Link>

              {product.cate3 ? (
                <div style={{ display: "inline" }}>
                  <Link
                    className="link-item"
                    to={`/danh-sach/${convertURL(product.cate3.name)}.${
                      product.cate3._id
                    }`}
                  >
                    <AiOutlineRight />
                    {product.cate3.name}
                  </Link>
                </div>
              ) : (
                <div />
              )}
            </div>
          ) : (
            <div />
          )}
        </h3>
      </section>
    </div>
  );
};

export default HistoryLink;
