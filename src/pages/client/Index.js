import React, { useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductsListOfTag from "./Component/ProductsListOfTag";
import { makeStyles } from "@material-ui/core";
import ProductListOfBoxTag from "./Component/ProductListOfBoxTag";
import ProductsHaveVisitedList from "./Component/ProductsHaveVisitedList";
import MutipleItemCarousel from "./Component/Carousel/MutipleItemCarousel";
import Header from "./Component/Header";
import shopApis from '../../apis/ShopApis';
import VisitedCarousel from "./Component/Carousel/VisistedCarousel";
import { formatCurrency, convertURL } from "../../utils/format-string.util";

const HomePage = () => {
  const classes = useStyles();
  const [boxtagData, setBoxtagData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    getHomeBoxtagData(0, 10);
  }, [])

  const getHomeBoxtagData = async (skip, limit) => {
    setLoader(true)
    try {
      const res = await shopApis.getBoxTagList(skip, limit);
      if (res.status === 200) {
        setBoxtagData([...res.data])
      }
    } catch (e) {
    }
    setLoader(false)
  }


  return (
    <div className="main-container mt-3 mb-5">
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Header></Header>
      <CarouselSpecialMutipleProduct />
      {
        boxtagData.length ? boxtagData.map((value) => (
          <ProductListOfBoxTag key={value._id} boxtagData={value}></ProductListOfBoxTag>
        )) :
          <></>
      }
      <VisitedCarousel />
    </div>
  );
};
const CarouselSpecialMutipleProduct = (props) => {
  const [specialProduct, setSpecialProduct] = useState([]);

  useEffect(() => {
    getSpecialProductData(1, 10, true);
  }, [])

  const getSpecialProductData = async (page, limit, home_page) => {
    try {
      const res = await shopApis.getListSpecialProduct(page, limit, home_page, true, false);
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
              price: product.parameters[0] ? formatCurrency(product.parameters[0].price) + "đ" : ""
            });
          })
        }
      })
    }
    return result;
  }

  return ((specialProduct && specialProduct.length > 0) ?
    <div>
      {
        specialProduct.map((item) =>
          <div key={item._id} className="product-list-of-boxtag bg-white mb-4 row mx-0 pb-3">
            <div className="product-list-of-boxtag-title">{item.name}</div>

            <MutipleItemCarousel
              listData={item.data}
              settings={{
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                initialSlide: 0,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      dots: false,
                      infinite: false,
                      speed: 500,
                      slidesToShow: 3,
                      initialSlide: 0
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      dots: false,
                      infinite: false,
                      speed: 500,
                      slidesToShow: 2,
                      initialSlide: 0
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      dots: false,
                      infinite: false,
                      speed: 500,
                      slidesToShow: 2,
                      initialSlide: 0
                    }
                  }
                ]
              }}
            />
          </div>
        )
      }


    </div> : <></>
  )
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default HomePage;
