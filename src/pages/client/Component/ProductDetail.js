import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import ProductsListOfTag from './ProductsListOfTag'

import { Button, makeStyles } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import HistoryLink from "./ProductDetail/HistoryLink";
import ProductInfo from "./ProductDetail/ProductInfo";
import MarketingBox from "./ProductDetail/MarketingBox";

import shopApis from "../../../apis/ShopApis";
import alert from "../../../utils/Alert";
import { formatCurrency } from "../../../utils/format-string.util";
import { HTTP_RESPONSE_STATUS } from "../../../constants/http-response.contanst";

const ProductDetail = () => {
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [productDetail, setProductDetail] = useState([]);
  const [defaultPrice, setDefaultPrice] = useState(null);
  const [defaultProduct, setDefaultProduct] = useState(null);
  const [cateInfo, setCateInfo] = useState()
  const [selectedImage, setSelectedImage] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [defaultParameterName, setDefaultParameterName] = useState(null);
  const [loader, setLoader] = useState(true);
  // @ts-ignore
  const [parentId, setParentId] = useState([]);

  useEffect(() => {
    if (params) {
      window.scrollTo(0, 0)
      getProductDetailData();
    }
  }, [params]);

  const getProductDetailData = async () => {
    try {
      // @ts-ignore
      setLoader(true)
      const result = await shopApis.getProductDetail(params.id);

      if (result.status === HTTP_RESPONSE_STATUS.SUCCESS) {
        result.data.map((productDetail) => {
          const firstParameter = productDetail.parameters[0];

          setDefaultPrice(firstParameter.price);

          setDefaultProduct({
            _id: firstParameter._id,
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
        getExactCateId(result.data)
      }
    } catch (err) {
      alert({ icon: "error", title: "Đã có lỗi xảy ra hoặc sản phẩm không tồn tại!" });
      history.push("/")
    }
    setLoader(false)
  };

  const handleSelectImage = async (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleSelectParameter = async (parameter) => {
    setSelectedImage(parameter.image);
    setDefaultPrice(parameter.price);
    setDefaultParameterName(parameter.name);
    setDefaultProduct({
      _id: parameter._id,
      price: parameter.price,
      name: defaultProduct.name,
      image: defaultProduct.image
    })
  };

  const handleDecreaseAmount = () => {
    setProductQuantity(productQuantity > 1 ? productQuantity - 1 : 1);
  };

  const handleIncreaseAmount = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleAddToCartBtn = (event) => {
    if (productQuantity < 1) {
      // @ts-ignore
      alert({ icon: "error", title: "Số lượng không thể nhỏ hơn 0" });
      return;
    }

    const cartList = localStorage.getItem("Cart");

    if (!cartList) {
      const cartItem = [
        {
          parameter: defaultProduct._id,
          price: defaultPrice,
          checked: true,
          nameParam: defaultParameterName,
          name: defaultProduct.name,
          image: defaultProduct.image,
          // @ts-ignore
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
        parameter: defaultProduct._id,
        price: defaultPrice,
        checked: true,
        nameParam: defaultParameterName,
        name: defaultProduct.name,
        image: defaultProduct.image,
        // @ts-ignore
        id: params.id,
        count: Number(productQuantity),
      });
      localStorage.setItem("Cart", JSON.stringify(localCartList));
    }
    handleAddToCartEvent(event);
  };

  const handleAddToCartEvent = (event) => {
    if (event === "buyNow") return history.push("/gio-hang");
    // @ts-ignore
    alert({
      icon: "success",
      title: "Đã thêm vào giỏ hàng",
    });
  };

  const getExactCateId = (productDetail) => {
    if (productDetail[0].cate3) {
      setCateInfo(productDetail[0].cate3)
      return
    }
    if (productDetail[0].cate2) {
      setCateInfo(productDetail[0].cate2)
      return
    }
    setCateInfo(productDetail[0].cate1)
  }

  return (
    <div className="product-detail-container">
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="product-detail-wrapper">
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
                        {product.image.map((productDetailImage, index) =>
                        (
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
                        )
                        )}
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

                    <MarketingBox />

                    <div className="product-quantity-container text-center">
                      <p className="product-quantity-describe">Số Lượng: </p>
                      <div className="product-quantity-box-container">
                        <div className="product-quantity-box">
                          <button
                            className="quantity-dec-btn-container"
                            onClick={() => handleDecreaseAmount()}
                          >
                            <AiOutlineMinus className="icon-quantity" />
                          </button>
                          <div className="product-quantity-value-container">
                            <input
                              type="text"
                              className="product-quantity-value"
                              value={productQuantity}
                            />
                          </div>
                          <button
                            className="quantity-inc-btn-container"
                            onClick={() => handleIncreaseAmount()}
                          >
                            <AiOutlinePlus className="icon-quantity" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="buy-method-container">
                      <Button
                        onClick={() => handleAddToCartBtn()}
                        className="add-to-cart-btn"
                        variant="outlined"
                      >
                        <AiOutlineShoppingCart style={{ marginRight: "5px" }} />
                        Thêm Vào Giỏ Hàng
                      </Button>
                      <Button
                        onClick={() => handleAddToCartBtn("buyNow")}
                        className="buy-now-btn"
                        variant="outlined"
                      >
                        Mua Ngay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <ProductInfo product={product} />
            <div className="product-info-container">
              {
                cateInfo && (
                  <ProductsListOfTag title={"Sản phẩm liên quan"} cateInfo={cateInfo}></ProductsListOfTag>
                )
              }

            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default ProductDetail;
