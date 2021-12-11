import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import shopApis from "../../../apis/ShopApis";
import { Button } from "@material-ui/core";
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import Controller from "../../../utils/Controller";
import NoProductImg from '../../../assets/image/no-product.png'
import { Link, Redirect } from "react-router-dom";
import MutipleItemCarousel from "./Carousel/MutipleItemCarousel";

const ProductsListOfTag = (props) => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    if (props.cateInfo) {
      getRelateProducts(props.cateInfo._id)
    }
  }, [props.cateInfo])

  const getRelateProducts = async (cateId) => {
    try {
      const res = await shopApis.getProductByCate(1, cateId, 10, "")
      if (res.status === 200) {
        setProductList(formatSpecialListData(res.data.product))          
      }
    } catch (e) {

    }
  }

  const formatSpecialListData = (data) => {
    var result = [];
    if (data.length) {
      data.map((item) => {
        result.push(
          {
            _id: item._id,
            name: item.name,
            img: item.image[0].url,
            price: item.parameters[0].price,
          }
        );  
      })
    }    
    return result;
  }

  return (
    <div className="product-list-of-tag-container bg-white">
      <div className="product-list-of-tag-title">{props.title}</div>
      <div className="row mt-2">
        {
          productList.length ? (
            <MutipleItemCarousel
              listData={productList}
              settings={{
                dots: true,
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
                      infinite: true,
                      dots: true
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
          ) : (
            <div className='text-center no-product-img-container mt-auto mb-auto'>
              <img className="no-product-img" alt="" src={NoProductImg}></img>
            </div>
          )
        }

      </div>
      <div className="see-more p-3 text-center">
        <Link
          to={
            "/danh-sach/" +
            Controller.formatURL(props.cateInfo.name) +
            "." +
            props.cateInfo._id
          }
        >
          <Button
            variant="outlined"
            style={{
              color: PRIMARY_HOME_COLOR,
              border: `2px solid ${PRIMARY_HOME_COLOR}`,
              paddingLeft: "40px",
              paddingRight: "40px",
              fontSize: "0.8rem",
            }}
          >
            Xem thêm
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsListOfTag;
