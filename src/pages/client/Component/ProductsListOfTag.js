import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import shopApis from "../../../apis/ShopApis";
import { Button } from "@material-ui/core";
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import Controller from "../../../utils/Controller";
import NoProductImg from '../../../assets/image/no-product.png'
import { Link, Redirect } from "react-router-dom";

const ProductsListOfTag = (props) => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    if (props.cateInfo) {
      getRelateProducts(props.cateInfo._id)
    }
  }, [props.cateInfo])

  const getRelateProducts = async (cateId) => {
    try {
      const res = await shopApis.getProductByCate(1, cateId, 4, "")
      if (res.status === 200) {
        setProductList([...res.data.product])
      }
    } catch (e) {

    }
  }

  return (
    <div className="product-list-of-tag-container bg-white">
      <div className="product-list-of-tag-title">{props.title}</div>
      <div className="row m-0 p-0">
        {
          productList.length ? productList.map((ele) => (
            <div key={ele._id} className="col-lg-3 col-md-4 col-sm-4 col-6 p-3">
              <Link to={"/chi-tiet/" +
                Controller.formatURL(ele.name) +
                "." +
                ele._id}>
                <ProductCard
                  img={
                    ele.image.length ? ele.image[0].url : ""
                  }
                  productName={ele.name}
                  productPrice={ele.parameters.length ? ele.parameters[0].price : "0"}
                ></ProductCard>
              </Link>
            </div>
          )) : (
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
              paddingLeft: "50px",
              paddingRight: "50px",
              fontSize: "0.9rem",
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
