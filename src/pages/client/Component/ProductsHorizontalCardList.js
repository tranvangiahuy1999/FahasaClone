import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import shopApis from '../../../apis/ShopApis';
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import NoProductImg from '../../../assets/image/no-product.png'
import MultipleRowsItemCarousel from './Carousel/MultipleRowsItemCarousel';
import { setBoxtagData } from '../../../reducers/BoxtagReducer'
import { formatCurrency, convertURL } from "../../../utils/format-string.util";

const ProductsHorizontalCardList = (props) => {
    const classes = useStyles();
    const boxtagData = useSelector((state) => state.boxtag.boxtagData)
    const dispatch = useDispatch()
    const [products, setProducts] = useState()
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
            <div className="product-cart-list-section">
                {
                    onLoad ? (<div className={classes.root}><CircularProgress className='m-auto' style={{ color: PRIMARY_HOME_COLOR }} size="40px" /></div>) :
                        products.products.length ? (
                            <MultipleRowsItemCarousel
                                listData={products.products}
                                settings={{
                                    centerMode: false,
                                    infinite: false,
                                    centerPadding: "0px",
                                    slidesToShow: 2,
                                    speed: 500,
                                    rows: 1,
                                    slidesPerRow: 2
                                }}>
                            </MultipleRowsItemCarousel>
                        )
                            : <div className='text-center no-product-img-container mt-auto mb-auto'>
                                <img className="no-product-img" alt="" src={NoProductImg}></img>
                            </div>
                }
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '266px',
    },
}));

export default ProductsHorizontalCardList;
