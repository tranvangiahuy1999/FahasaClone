import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Nav from "./Nav";
import Footer from "./Footer";
import shopApis from "../../../apis/ShopApis";
import { HTTP_RESPONSE_STATUS } from "../../../constants/http-response.contanst";
import { formatCurrency } from "../../../utils/format-string.util";

const ProductDetail = () => {
  const params = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [defaultPrice, setDefaultPrice] = useState(null);
  const [defaultProduct, setDefaultProduct] = useState(null);

  useEffect(() => {
    getProductDetailData();
  }, []);

  const getProductDetailData = async () => {
    try {
      const result = await shopApis.getProductDetail(params.id);

      if (result.status === HTTP_RESPONSE_STATUS.SUCCESS) {
        result.data.map((productDetail) => {
          const firstParameter = productDetail.parameters[0];

          setDefaultPrice({
            price: firstParameter.price,
            _id: firstParameter._id,
            name: firstParameter.name,
          });

          setDefaultProduct({
            _id: firstParameter.price,
            price: firstParameter.price,
            name: productDetail.name,
            iamge: productDetail.image[0].url,
          });
        });

        setProductDetail(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <Nav />
        <section className="history-link-container">
          <h3 className="history-link-item">
            Sách Tiếng Việt > Thiếu Nhi > Truyện Thiếu Nhi
          </h3>
        </section>
        {productDetail.map((product, index) => (
          <div key={index}>
            <section className="product-detail-item-container">
              <div className="product-detail-item-wrapper">
                <div className="product-detail-image-container">
                  <div className="product-detail-image-wrapper">
                    <div className="main-image-container">
                      <img
                        alt=""
                        className="main-image"
                        src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_188285.jpg"
                      />
                    </div>

                    <div className="option-images-container">
                      <div className="option-images-wrapper">
                        <div className="option-image-item">
                          <img
                            className="option-image"
                            alt=""
                            src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_188285.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-detail-content-container">
                  <div className="product-detail-content-wrapper">
                    <div className="product-title-container">
                      <h3 className="product-title-value">{product.name}</h3>
                    </div>
                    <div className="product-price-container">
                      <p className="product-price-describe">
                        Giá bán tại nhà sách Kiên Giang:
                      </p>
                      <p className="product-price-value">
                        {formatCurrency(defaultPrice.price)}₫
                      </p>
                    </div>

                    <div className="marketing-describe-container">
                      <h6 className="describe-text">
                        Tại Nhà sách Kiên Giang:{" "}
                      </h6>
                      <p>
                        Giao hàng cho đơn hàng ở Rạch Giá và ở Tỉnh/Thành khác
                      </p>
                      <p> Combo sách HOT - GIẢM 25% >> Xem ngay</p>
                    </div>

                    <div className="product-quantity-container">
                      <p className="product-quantity-describe">Số Lượng: </p>
                      <div className="product-quantity-box">
                        <button className="quantity-dec-btn-container">
                          <p className="quantity-adjust-item">-</p>
                        </button>
                        <div className="product-quantity-value-container">
                          <p className="product-quantity-value">1</p>
                        </div>
                        <button className="quantity-inc-btn-container">
                          <p className="quantity-adjust-item">+</p>
                        </button>
                      </div>
                    </div>

                    <div className="buy-method-container">
                      <Button
                        style={{
                          marginRight: "10px",
                          backgroundColor: "white",
                          color: "#74AC74",
                          border: "2px solid #74AC74",
                        }}
                        variant="outlined"
                      >
                        Thêm Vào Giỏ Hàng
                      </Button>
                      <Button
                        style={{
                          marginRight: "10px",
                          backgroundColor: "#74AC74",
                          color: "white",
                          border: "2px solid #74AC74",
                        }}
                        variant="outlined"
                      >
                        Mua Ngay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                <div className="product-description-container">
                  <p className="product-descripiton-text">
                    <div>{ReactHtmlParser(product.description)}</div>
                  </p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
