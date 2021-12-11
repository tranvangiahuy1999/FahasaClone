import React, { useEffect, useState } from "react";
import shopApis from '../../../apis/ShopApis';
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import NoProductImg from '../../../assets/image/no-product.png'
import MultipleRowsItemCarousel from './Carousel/MultipleRowsItemCarousel'

const ProductsHorizontalCardList = (props) => {
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
        <div className="bg-white">
            <div className="product-cart-list-section">
                {
                    onLoad ? (<div className={classes.root}><CircularProgress className='m-auto' style={{ color: PRIMARY_HOME_COLOR }} size="40px" /></div>) :
                        products.length ? (
                            <MultipleRowsItemCarousel
                                listData={products}
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
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default ProductsHorizontalCardList;
