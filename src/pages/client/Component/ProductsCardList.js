import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@material-ui/core";
import shopApis from '../../../apis/ShopApis';
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import { Link } from "react-router-dom";
import NoProductImg from '../../../assets/image/no-product.png'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MutipleItemCarousel from "./Carousel/MutipleItemCarousel";
import { formatCurrency, convertURL } from "../../../utils/format-string.util";
import { setBoxtagData } from '../../../reducers/BoxtagReducer'

const ProductsCardList = (props) => {
    const classes = useStyles();
    const boxtagData = useSelector((state) => state.boxtag.boxtagData)
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [onLoad, setOnLoad] = useState(true);

    useEffect(() => {
        for (const item of boxtagData) {
            if (item.tagId === props.tagId) {                
                setProducts(item)
                setOnLoad(false)
                return
            }
        }
        getProductsList(props.tagId)
    }, [props.tagId])

    const getProductsList = async (tagId) => {
        try {
            const res = await shopApis.getProductByTagId(tagId);
            if (res.status === 200) {
                const formatedProductsData = formatSpecialListData(res.data) 
                setProducts(formatedProductsData)
                dispatch(setBoxtagData(formatedProductsData))
            }
        } catch (e) {

        }
        setOnLoad(false)
    }

    const formatSpecialListData = (data) => {
        var result = {
            tagId: props.tagId,
            products: []
        };
        if (data.length) {
            data.map((item) => {
                result.products.push(
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
                    onLoad ? (<div className={classes.root}><CircularProgress className='m-auto' style={{ color: PRIMARY_HOME_COLOR }} size="40px" /></div>) : products.products.length ? (
                        <MutipleItemCarousel
                            listData={products.products}
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
