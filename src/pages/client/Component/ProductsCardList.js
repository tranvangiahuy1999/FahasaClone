import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@material-ui/core";
import shopApis from '../../../apis/ShopApis';
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import { Link } from "react-router-dom";
import NoProductImg from '../../../assets/image/no-product.png'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MutipleItemCarousel from "./Carousel/MutipleItemCarousel";
import { formatCurrency, convertURL } from "../../../utils/format-string.util";

const ProductsCardList = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState([])    
    const [onLoad, setOnLoad] = useState(true);

    useEffect(() => {
        if (props.tagId) {
            getProductsList(props.tagId)            
        }
    }, [props.tagId])

    const getProductsList = async (tagId) => {
        try {
            const res = await shopApis.getProductByTagId(tagId);
            if (res.status === 200) {                
                setProducts(formatSpecialListData(res.data))                
            }
        } catch (e) {

        }
        setOnLoad(false)
    }    

    const formatSpecialListData = (data) => {
        var result = [];
        if (data.length) {
            data.map((item) => {
                result.push(
                    {
                        _id: item._id,
                        title: item.name ? item.name : "",
                        description: item.description ? item.description : "",
                        href: item._id ? ("/chi-tiet/" + convertURL(item.name) + "." + item._id) : "",
                        img: {
                        src: item.image[0] ? item.image[0].url : "",
                        alt: item.name ? item.name : ""
                      },
                        price: item.parameters[0] ? formatCurrency(item.parameters[0].price) + "đ" : ""
                      }
                );
            })
        }        
        return result;
    }

    return (
        <div className="bg-white">
            <div className="row m-0 p-0 product-cart-list-section">
                {
                    onLoad ? (<div className={classes.root}><CircularProgress className='m-auto' style={{ color: PRIMARY_HOME_COLOR }} size="40px" /></div>) : products.length ? (
                        <MutipleItemCarousel
                            listData={products}
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
                    )
                        : <div className='text-center no-product-img-container mt-auto mb-auto'>
                            <img className="no-product-img" alt="" src={NoProductImg}></img>
                        </div>
                }
            </div>
            <div className="see-more col-12 p-3 text-center">
                <Link
                    to={props.cateData ?
                        "/danh-sach/" +
                        convertURL(props.cateData.name) +
                        "." +
                        props.cateData.category : ""
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default ProductsCardList;
