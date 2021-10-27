import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

const ProductInfo = ({ product }) => {
  const [isLoadMore, setIsLoadMore] = useState(false);

  const handleLoadMoreBtn = () => {
    setIsLoadMore(!isLoadMore);
  };
  return (
    <div className="product-info-main-container">
      <section className="product-info-container">
        <div className="product-info-wrapper">
          <div className="product-info-header">
            <h4 className="describe-text">Thông Tin Chi Tiết</h4>
          </div>
          <hr />
          <Paper className="product-info-table" elevation={0}>
            <Table>
              <TableBody>
                {Object.keys(product.details).map((key, index) => (
                  <TableRow key={index}>
                    <TableCell className="product-info-table-left-cell">
                      {key}
                    </TableCell>
                    <TableCell className="product-info-table-right-cell ">
                      {product.details[key]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </section>

      <section className="product-info-container">
        <div className="product-info-wrapper">
          <div className="product-info-header">
            <h4 className="describe-text">Mô Tả Sản Phẩm</h4>
          </div>
          <hr />

          {isLoadMore ? (
            <div className="product-description-full-text-container">
              <div className="product-descripiton-full-text">
                <span className="description-html-full-text">
                  {ReactHtmlParser(product.description)}
                </span>
              </div>
              <div className="load-more-container">
                <span
                  className="load-more-text"
                  onClick={() => handleLoadMoreBtn()}
                >
                  Thu Gọn
                </span>
              </div>
            </div>
          ) : (
            <div className="product-description-container">
              <div className="product-descripiton-text">
                <span className="description-html-text">
                  {ReactHtmlParser(product.description)}
                </span>
              </div>
              <div className="load-more-container">
                <span
                  className="load-more-text"
                  onClick={() => handleLoadMoreBtn()}
                >
                  Xem Thêm...
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
