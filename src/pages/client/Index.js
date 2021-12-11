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

const HomePage = () => {
  const classes = useStyles();
  const [boxtagData, setBoxtagData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)
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
      <ProductsHaveVisitedList></ProductsHaveVisitedList>
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
              name: product.name,
              img: product.image[0].url,
              price: product.parameters[0].price
            })
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
          <div key={item._id} className="product-list-of-boxtag bg-white mb-4">
            <div className="product-list-of-boxtag-title">{item.name}</div>
            <MutipleItemCarousel
              listData={item.data}
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
