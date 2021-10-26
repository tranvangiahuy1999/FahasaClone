import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { AiOutlineDoubleRight } from "react-icons/ai";
import HistoryLink from "./HistoryLink";

const ProductDetail = () => {
  const params = useParams();
  const history = useHistory();
  const [productDetail, setProductDetail] = useState([]);
  const [defaultPrice, setDefaultPrice] = useState(null);
  const [defaultProduct, setDefaultProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [parentId, setParentId] = useState([]);

  useEffect(() => {
    getProductDetailData();
  }, []);

  const getProductDetailData = async () => {
    try {
      const result = await shopApis.getProductDetail(params.id);

      if (result.status === HTTP_RESPONSE_STATUS.SUCCESS) {
        result.data.map((productDetail) => {
          const firstParameter = productDetail.parameters[0];

          setDefaultPrice(firstParameter.price);

          setDefaultProduct({
            _id: firstParameter.price,
            price: firstParameter.price,
            name: productDetail.name,
            image: productDetail.image.length
              ? productDetail.image[0].url
              : null,
          });
          if (selectedImage === null)
            setSelectedImage(
              productDetail.image.length
                ? productDetail.image[0].url
                : firstParameter.image
            );
        });

        setProductDetail(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectImage = async (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleSelectParameter = async (parameter) => {
    setSelectedImage(parameter.image);
    setDefaultPrice(parameter.price);
  };

  const handleDecreaseAmount = () => {
    setProductQuantity(productQuantity > 1 ? productQuantity - 1 : 1);
  };

  const handleIncreaseAmount = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleAddToCartBtn = (event) => {
    if (productQuantity < 1) {
      alert({ icon: "error", title: "Số lượng không thể nhỏ hơn 0" });
      return;
    }

    const cartList = localStorage.getItem("Cart");

    if (!cartList) {
      const cartItem = [
        {
          parameter: defaultProduct._id,
          price: defaultProduct.price,
          nameParam: defaultPrice.name,
          name: defaultProduct.name,
          image: defaultProduct.image,
          id: params.id,
          count: Number(productQuantity),
        },
      ];
      localStorage.setItem("Cart", JSON.stringify(cartItem));
    } else {
      const localCartList = JSON.parse(cartList);

      for (let i = 0; i < localCartList.length; i++) {
        if (localCartList[i].id === parentId) {
          localCartList[i].count += productQuantity;

          localStorage.setItem("Cart", JSON.stringify(localCartList));
          return handleAddToCartEvent(event);
        }
      }

      localCartList.push({
        parameter: defaultPrice._id,
        price: defaultPrice.price,
        nameParam: defaultPrice.name,
        name: defaultProduct.name,
        image: defaultProduct.image,
        id: params.id,
        count: Number(productQuantity),
      });
      localStorage.setItem("Cart", JSON.stringify(localCartList));
    }
    handleAddToCartEvent(event);
  };

  const handleAddToCartEvent = (event) => {
    if (event === "buyNow") return history.push("/gio-hang");
    alert({ icon: "success", title: "Đã thêm vào giỏ hàng" });
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <Nav />
        {productDetail.map((product, index) => (
          <div key={index}>
            <HistoryLink product={product} />
            <section className="product-detail-item-container">
              <div className="product-detail-item-wrapper">
                <div className="product-detail-image-container">
                  <div className="product-detail-image-wrapper">
                    <div className="main-image-container">
                      <img
                        key={index}
                        alt=""
                        className="main-image"
                        src={selectedImage}
                      />
                    </div>

                    <div className="option-images-container">
                      <div className="option-images-wrapper">
                        {product.image.map((productDetailImage, index) => {
                          return (
                            <div
                              className="option-image-item"
                              key={index}
                              onClick={() =>
                                handleSelectImage(productDetailImage.url)
                              }
                            >
                              <img
                                key={index}
                                className="option-image"
                                alt=""
                                src={productDetailImage.url}
                              />
                            </div>
                          );
                        })}
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
                        {formatCurrency(defaultPrice)}₫
                      </p>
                    </div>

                    {product.parameters.length > 1 ? (
                      <div className="product-parameters-container">
                        {product.parameters.map((parameter, index) => {
                          return (
                            <Button
                              key={index}
                              onClick={() => handleSelectParameter(parameter)}
                              style={{
                                marginRight: "10px",
                                backgroundColor: "white",
                                color: "#74AC74",
                                border: "1px solid #74AC74",
                              }}
                              variant="outlined"
                            >
                              {parameter.name}
                            </Button>
                          );
                        })}
                      </div>
                    ) : (
                      <div />
                    )}

                    <div className="marketing-describe-container">
                      <h6 className="describe-text">
                        Tại Nhà sách Kiên Giang:{" "}
                      </h6>
                      <p className="icon">
                        <AiOutlineDoubleRight /> Giao hàng cho đơn hàng ở Rạch
                        Giá và ở Tỉnh/Thành khác
                      </p>
                      <p className="icon">
                        <AiOutlineDoubleRight /> Combo sách HOT - GIẢM 25%{" "}
                        <Link style={{ color: "orange" }} to="/">
                          <AiOutlineDoubleRight /> Xem ngay
                        </Link>
                      </p>
                    </div>

                    <div className="product-quantity-container">
                      <p className="product-quantity-describe">Số Lượng: </p>
                      <div className="product-quantity-box">
                        <button
                          className="quantity-dec-btn-container"
                          onClick={() => handleDecreaseAmount()}
                        >
                          <p className="quantity-adjust-item">-</p>
                        </button>
                        <div className="product-quantity-value-container">
                          <p className="product-quantity-value">
                            {productQuantity}
                          </p>
                        </div>
                        <button
                          className="quantity-inc-btn-container"
                          onClick={() => handleIncreaseAmount()}
                        >
                          <p className="quantity-adjust-item">+</p>
                        </button>
                      </div>
                    </div>

                    <div className="buy-method-container">
                      <Button
                        onClick={() => handleAddToCartBtn()}
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
                        onClick={() => handleAddToCartBtn("buyNow")}
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
                  <div className="product-descripiton-text">
                    <div>
                      <span>{ReactHtmlParser(product.description)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
