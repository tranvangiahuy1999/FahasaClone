import React, { useEffect, useState } from "react";
import MutipleItemCarousel from "./MutipleItemCarousel";
import shopApis from "../../../../apis/ShopApis";
import { HTTP_RESPONSE_STATUS } from "../../../../constants/http-response.contanst";
import { formatCurrency, convertURL } from "../../../../utils/format-string.util";
import { CircularProgress, Box } from "@material-ui/core";
export default function VisitedCarousel(props) {
    const { ...other } = props;
    const [loader, setLoader] = useState(true);
    const [display, setDisplay] = useState(true);
    const [listProduct, setListProduct] = useState([]);
    const [localVistedList, setLocalVistedList] = useState([]);
    useEffect(() => {
        setLocalVistedList(getLocalStorageVisitedList());
    }, []);
    useEffect(() => {
        if (localVistedList.length > 0) {
            getVisistedList();
        } else {
            setDisplay(false);
        }
    }, [localVistedList]);
    const getLocalStorageVisitedList = () => {
        var localVistedList = localStorage.getItem("VisitedProductList");
        var result = [];
        if (localVistedList) {
            JSON.parse(localVistedList).map(item => result.push(item.id));
        }
        return result;
    }

    const getVisistedList = async () => {
        if (localVistedList && localVistedList.length > 0) {
            try {
                var items = [];
                for (const idItem of localVistedList) {
                    const res = await shopApis.getProductDetail(idItem);
                    if (res.status === HTTP_RESPONSE_STATUS.SUCCESS) {
                        // items.push(formatToItemIntro(res.data[0],"/chi-tiet/"));
                        items.push({
                            _id: res.data[0]._id,
                            title: res.data[0].name ? res.data[0].name : "",
                            description: res.data[0].description ? res.data[0].description : "",
                            href: res.data[0]._id ? ("/chi-tiet/" + convertURL(res.data[0].name) + "." + res.data[0]._id) : "",
                            img: {
                                src: res.data[0].image[0] ? res.data[0].image[0].url : "",
                                alt: res.data[0].name ? res.data[0].name : ""
                            },
                            price: res.data[0].parameters[0] ? formatCurrency(res.data[0].parameters[0].price) + "đ" : ""
                        });
                        setDisplay(true);
                    }
                }
                
                // const res = await shopApis.getListProductByListId(localVistedList);
                // if (res.status === HTTP_RESPONSE_STATUS.SUCCESS) {
                    
                //     res.data.map(item => items.push({
                //         _id: item._id,
                //         title: item.name ? item.name : "",
                //         description: item.description ? item.description : "",
                //         href: item._id ? ("/chi-tiet/" + convertURL(item.name) + "." + item._id) : "",
                //         img: {
                //             src: item.image[0] ? item.image[0].url : "",
                //             alt: item.name ? item.name : ""
                //         },
                //         price: item.parameters[0] ? formatCurrency(item.parameters[0].price) + "đ" : ""
                //     }))
                //     setDisplay(true);
                // }
                setListProduct(items);
            } catch (e) {
            }
        }
        setLoader(false);

    }
    return (
        <div>
            {
                display ?
                    <div className="product-list-of-boxtag bg-white mb-4 row mx-0 pb-3">
                        <div className="product-list-of-boxtag-title">Sản phẩm đã xem </div>
                        {loader ?
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <CircularProgress color="inherit" />
                            </Box>
                            : (listProduct.length > 0 ?
                                <MutipleItemCarousel listData={listProduct}
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
                                    }} />
                                : <div className="text-center no-product-img-container mt-auto mb-auto">
                                    <img className="no-product-img" alt="" src="/static/media/no-product.79c372d7.png" />
                                </div>)}
                    </div> : (<></>)}
        </div>
    )
}