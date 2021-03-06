import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import ProductsListOfTag from './ProductsListOfTag'
import MutipleItemCarousel from "./Carousel/MutipleItemCarousel";
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
import VisitedCarousel from "./Carousel/VisistedCarousel";

import shopApis from "../../../apis/ShopApis";
import alert from "../../../utils/Alert";
import { formatCurrency, convertURL } from "../../../utils/format-string.util";
import { HTTP_RESPONSE_STATUS } from "../../../constants/http-response.contanst";

const ProductDetail = (props) => {
  const params = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [productDetail, setProductDetail] = useState([]);
  const [specialProduct, setSpecialProduct] = useState([]);
  const [defaultIndex, setDefaultIndex] = useState(0)
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
    getSpecialProductData(1, 10, true);
    addToVisitedProductList(params.id);
  }, [params.id])

  useEffect(() => {
    if (params) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setDefaultIndex(0)
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
      alert({ icon: "error", title: "???? c?? l???i x???y ra ho???c s???n ph???m kh??ng t???n t???i!" });
      history.push("/")
    }
    setLoader(false)
  };

  const getSpecialProductData = async (page, limit, isSuggested) => {
    try {
      const res = await shopApis.getListSpecialProduct(page, limit, true, false, isSuggested);
      if (res.status === 200) {
        setSpecialProduct(formatSpecialListData(res.data));
      }
    } catch (e) {

    }
  }

  const formatSpecialListData = (data) => {
    var result = [];
    if (data.tag && data.tag.length > 0) {
      data.tag.map((tag_item, tag_idx) => {
        result.push(
          {
            name: tag_item.name,
            _id: tag_item._id,
            data: []
          }
        );
        if (tag_item.products && tag_item.products.length > 0) {
          tag_item.products.map((product, product_idx) => {
            result[tag_idx].data.push({
              _id: product._id,
              title: product.name ? product.name : "",
              description: product.description ? product.description : "",
              href: product._id ? ("/chi-tiet/" + convertURL(product.name) + "." + product._id) : "",
              img: {
                src: product.image[0] ? product.image[0].url : "",
                alt: product.name ? product.name : ""
              },
              price: product.parameters[0] ? formatCurrency(product.parameters[0].price) + "??" : ""
            })
          })
        }
      })
    }
    return result;
  }

  const handleSelectImage = async (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleSelectParameter = async (parameter, index) => {
    setDefaultIndex(index)
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
      alert({ icon: "error", title: "S??? l?????ng kh??ng th??? nh??? h??n 0" });
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
        if (localCartList[i].id === params.id && localCartList[i].parameter === defaultProduct._id) {
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
      title: "???? th??m v??o gi??? h??ng",
    });
    props.handleBadge(1);
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
  const addToVisitedProductList = (id) => {
    const visitedProductList = localStorage.getItem("VisitedProductList");
    var visitedProductListJson = [];
    if (visitedProductList) {
      visitedProductListJson = JSON.parse(visitedProductList);
      visitedProductListJson = visitedProductListJson.filter(item => item.id != id);
      visitedProductListJson.unshift({ id: id });
      visitedProductListJson = visitedProductListJson.slice(0, 10)
    } else {
      visitedProductListJson.push({ id: id });
    }
    localStorage.setItem("VisitedProductList", JSON.stringify(visitedProductListJson));
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
                        Gi?? b??n t???i nh?? s??ch Ki??n Giang:
                      </p>
                      <p className="product-price-value">
                        {formatCurrency(defaultPrice)}???
                      </p>
                    </div>
                    {product.parameters.length > 1 ? (
                      <div className="product-parameters-container">
                        {product.parameters.map((parameter, index) => {
                          return (
                            <Button
                              key={index}
                              onClick={() => handleSelectParameter(parameter, index)}
                              style={{
                                marginRight: "10px",
                                backgroundColor: defaultIndex === index ? "#74AC74" : "white",
                                color: defaultIndex === index ? "white" : "#74AC74",
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
                      <p className="product-quantity-describe">S??? L?????ng: </p>
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
                        Th??m V??o Gi??? H??ng
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
                  <ProductsListOfTag title={"S???n ph???m li??n quan"} cateInfo={cateInfo}></ProductsListOfTag>
                )
              }

              {
                (specialProduct && specialProduct.length > 0) ?
                  <div className="mt-4">
                    {
                      specialProduct.map((item) =>
                        <div key={item._id} className="product-list-of-boxtag bg-white mb-4">
                          <div className="product-list-of-boxtag-title">{item.name}</div>
                          <MutipleItemCarousel
                            listData={item.data}
                            settings={{
                              dots: false,
                              infinite: false,
                              speed: 500,
                              slidesToShow: 5,
                              slidesToScroll: 1,
                              initialSlide: 0,
                              responsive: [
                                {
                                  breakpoint: 1024,
                                  settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: false,
                                    dots: false
                                  }
                                },
                                {
                                  breakpoint: 600,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    initialSlide: 0
                                  }
                                },
                                {
                                  breakpoint: 480,
                                  settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                  }
                                }
                              ]
                            }}
                          />
                        </div>
                      )
                    }


                  </div> : <></>
              }
              <VisitedCarousel prodId={params.id}></VisitedCarousel>
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
