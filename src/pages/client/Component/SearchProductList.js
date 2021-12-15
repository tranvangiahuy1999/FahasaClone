import React, { useEffect, useState } from "react";
import shopApis from "../../../apis/ShopApis";
import Pagination from "@material-ui/lab/Pagination";
import { convertURL, formatCurrency } from "../../../utils/format-string.util";
import CardItemVertical from "./Card/CardItemVertical";
import "../../../styles/style.css";
import CategorySideBar from "./SideBar/CategorySideBar";
import { Switch, Route, useRouteMatch, useParams, useLocation } from "react-router-dom";
import { CircularProgress, Box } from "@material-ui/core";

const SearchProductList = () => {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/:name`} component={ProductListContent} />
        </Switch>
    )
}

const ProductListContent = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [productId1, setProductId1] = useState();
    const [productId2, setProductId2] = useState();
    const params = useParams();

    useEffect(() => {
        getCategoryData();
    }, []);

    const getCategoryData = async () => {
        try {
            const res = await shopApis.getCategoryList();
            if (res.status === 200) {
                res.data.map((value, index) => {
                    value.subCate.map((value1, index) => {
                        if (value1.subCate && value1.subCate.length > 0) {
                            value1.subCate.map(value2 => {
                                setProductId1(value1.parent_cate);
                                setProductId2(value2.parent_cate);

                            })
                        } else {
                            setProductId1(value1.parent_cate);
                        }
                    });
                });
                setCategoryList(res.data);
            }
        } catch (e) {
        }
    };


    return (
        <div className='product-list mt-3'>
            <div className='product-list-container'>
                <div className="row m-0 p-0">
                    <div className="d-none d-md-block col-md-3 col-12 pl-0">
                        <div className="bg-white py-3 mb-3 px-0 category-list-wrapper" >
                            <div className="px-3">
                                <h6 className="font-weight-bold"> Nhóm Sản Phẩm </h6>
                                <p>Tất Cả Sản Phẩm</p>
                            </div>
                            <div className="category-list">
                                <CategorySideBar listdata={categoryList} parentidlevel1={productId1} parentidlevel2={productId2} currentId={""} />
                            </div>
                        </div>
                    </div>
                    <CustomerProductListContent className="product-content col-md-9 col-12 bg-white mb-3" />
                </div>
            </div>
        </div>
    );
};

const CustomerProductListContent = (props) => {
    const { ...other } = props;
    const [productList, setProductList] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(16);
    const [sortType, setSortType] = useState("price_up");
    const params = useParams();

    useEffect(() => {
        getProductData(page, perPage, sortType);
    }, [params]);

    const getProductData = async (page, perPage, sortType) => {
        try {
            setLoader(true);
            const res = await shopApis.getProductBySearch(page, params.name);
            if (res.status === 200) {
                setProductList(res.data.products);
                setTotalPage(res.data.total_page);
            }
        } catch (e) {
        }
        setLoader(false);
    };
    const pageChange = async (event, page) => {
        await getProductData(page, perPage, sortType);
        setPage(page);
    };
    const perPageChange = (event) => {
        getProductData(page, event.target.value, sortType);
        setPerPage(event.target.value);
    }
    const sortTypeChange = (event) => {
        getProductData(page, perPage, event.target.value);
        setSortType(event.target.value);
    }
    const formatToItemIntro = (value, beforeURL) => {
        let result = {
            _id: value._id,
            title: value.name ? value.name : "",
            description: value.description ? value.description : "",
            href: value._id ? (beforeURL + convertURL(value.name) + "." + value._id) : "",
            img: {
                src: value.image[0] ? value.image[0].url : "",
                alt: value.name ? value.name : ""
            },
            price: value.parameters[0] ? formatCurrency(value.parameters[0].price) + "đ" : ""
        }
        return result;
    }
    return (
        <div {...other}>
            {
                loader ? <Box className="d-flex justify-content-center my-3">
                    <CircularProgress color="inherit" />
                </Box> :
                    (productList.length > 0 ?
                        <div>
                            <div className="list-sort d-md-flex my-3">
                                <div className="sort-item mr-2 mr-md-5 mb-2 mb-md-0">
                                    <label className="label-select">
                                        Hiển thị :
                                    </label>
                                    <select onChange={perPageChange} value={perPage}>
                                        <option value={4}>4</option>
                                        <option value={8}>8</option>
                                        <option value={16}>16</option>
                                        <option value={32}>32</option>
                                        <option value={64}>64</option>
                                    </select>
                                </div>
                                <div className="sort-item">
                                    <label className="label-select">
                                        Sắp xếp :
                                    </label>
                                    <select onChange={sortTypeChange} value={sortType}>
                                        <option value="price_up">Giá: Thấp - Cao</option>
                                        <option value="price_down">Giá: Cao - Thấp</option>
                                    </select>
                                </div>
                            </div>

                            <div className="items">
                                <div className="product-grid mx-0">
                                    {productList.map((value, index) => (
                                        <CardItemVertical
                                            className="list-card-item px-0 my-2"
                                            item={formatToItemIntro(value, "/chi-tiet/")}
                                            key={value._id}
                                            showDescription={false}></CardItemVertical>
                                    ))}
                                </div>
                            </div>
                            <div className="pagination-bar my-3">
                                <div className="d-flex pr-3">
                                    <nav className="mx-auto">
                                        <Pagination
                                            count={totalPage}
                                            page={page}
                                            onChange={pageChange}
                                            variant="outlined"
                                            shape="rounded"
                                        />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="my-3">
                            <div className="no-product-img-container mt-auto mb-auto">
                                <img className="no-product-img" alt="" src="/static/media/no-product.79c372d7.png" />

                            </div>
                            <div className="my-3">
                                <p className="text-secondary text-center">Không tìm thấy sản phẩm nào phù hợp.</p>
                            </div>
                        </div>

                    )
            }
        </div>
    )
}
export default SearchProductList;
