import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@material-ui/core";
import shopApis from '../../../apis/ShopApis';
import { PRIMARY_HOME_COLOR } from "../../../constants/index";
import Controller from "../../../utils/Controller";
import { Link } from "react-router-dom";
import NoProductImg from '../../../assets/image/no-product.png'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProductsCardList = (props) => {
    const classes = useStyles();
    const [products, setProducts] = useState([])
    const [cateData, setCateData] = useState()
    const [onLoad, setOnLoad] = useState(true);

    useEffect(() => {
        if (props.cateData) {
            getProductsList(props.cateData.category)
            setCateData(props.cateData)
        }
    }, [props.cateData])

    const getProductsList = async (cateId) => {
        try {
            const res = await shopApis.getProductByCate(1, cateId, 5, null);
            if (res.status === 200) {
                setProducts([...res.data.product])
            }
        } catch (e) {

        }
        setOnLoad(false)
    }

    return (
        <div className="bg-white">
            <div className="row m-0 p-0 product-cart-list-section">
                {
                    onLoad ? (<div className={classes.root}><CircularProgress className='m-auto' style={{ color: PRIMARY_HOME_COLOR }} size="40px" /></div>) : products.length ? products.filter((item, idx) => idx < 5).map((value) => (
                        <div key={value._id} className="col-lg-4 col-md-3 col-sm-4 col-6 p-3">
                            <Link
                                to={
                                    "/chi-tiet/" +
                                    Controller.formatURL(value.name) +
                                    "." +
                                    value._id
                                }
                            >
                                <ProductCard
                                    img={
                                        value.image.length ? value.image[0].url : ""
                                    }
                                    productName={value.name}
                                    productPrice={value.parameters.length ? value.parameters[0].price : "0"}
                                ></ProductCard>
                            </Link>
                        </div>
                    ))
                        : <div className='text-center no-product-img-container mt-auto mb-auto'>
                            <img className="no-product-img" alt="" src={NoProductImg}></img>
                        </div>
                }
            </div>
            <div className="see-more col-12 p-3 text-center">
                <Link
                    to={cateData ?
                        "/danh-sach/" +
                        Controller.formatURL(cateData.name) +
                        "." +
                        cateData.category : ""
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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default ProductsCardList;
