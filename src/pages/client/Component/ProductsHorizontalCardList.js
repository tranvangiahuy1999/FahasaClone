import React, { useEffect, useState } from "react";
import HorizontalProductCard from "./HorizontalProductCard";
import shopApis from '../../../apis/ShopApis';
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import Controller from "../../../utils/Controller";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import NoProductImg from '../../../assets/image/no-product.png'

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
                setProducts([...res.data])
            }
        } catch (e) {

        }
        setOnLoad(false)
    }

    return (
        <div className="bg-white">
            <div className="row m-0 p-0 product-cart-list-section">
                {
                    onLoad ? (<div className={classes.root}><CircularProgress className='m-auto' style={{ color: PRIMARY_HOME_COLOR }} size="40px" /></div>) :
                        products.length ? products.filter((item, idx) => idx < 4).map((value) => (
                            <div key={value._id} className="col-6">
                                <Link
                                    to={
                                        "/chi-tiet/" +
                                        Controller.formatURL(value.name) +
                                        "." +
                                        value._id
                                    }
                                >
                                    <HorizontalProductCard
                                        img={
                                            value.image.length ? value.image[0].url : ""
                                        } 
                                        productName={value.name}
                                        productPrice={value.parameters.length ? value.parameters[0].price : "0"}
                                    ></HorizontalProductCard>
                                </Link>
                            </div>
                        ))
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
