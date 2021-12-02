import React, { useState, useEffect } from 'react'
import AdminApi from "../apis/AdminApis";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { TextField, Button, FormGroup, FormControlLabel, Switch, FormControl } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import InputAdornment from "@material-ui/core/InputAdornment";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IoSearch } from "react-icons/io5";
import { LOGO_COLOR, ICON_COLOR, PRIMARY_COLOR } from "../constants/index";
import alert from "../utils/Alert";

const AddProductsToSpecialTagModal = (props) => {
    const classes = useStyles();
    const [tagId, setTagId] = useState()
    const [tagName, setTagName] = useState()
    const [isHide, setIsHide] = useState(false)
    const [isSuggest, setIsSuggest] = useState(false)
    const [homePage, setHomePage] = useState(false)
    const [productIdListOfTag, setProductListIdOfTag] = useState([])
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [search, setSearch] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getAllProducts(page)
    }, [])

    useEffect(() => {
        if (props.tagData) {
            setTagId(props.tagData._id)
            setTagName(props.tagData.name)
            setIsHide(props.tagData.is_hide)
            setIsSuggest(props.tagData.is_suggestion)
            setHomePage(props.tagData.home_page)
            setProductListIdOfTag([...props.tagData.products])
        }
    }, [props.tagData])

    const closeModal = () => {
        props.handleClose();
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!tagName || !tagId) return
        setLoader(true);
        try {
            const resArray = mapProductRequest(productIdListOfTag)
            const request = {
                "name": tagName,
                "is_hide": isHide,
                "is_suggestion": isSuggest,
                "home_page": homePage,
                'products': resArray,
            }

            console.log(request)
            const res = await AdminApi.updateSpecialTag(tagId, request)
            if (res.status === 200) {
                alert({ icon: "success", title: "Đã cập nhật special tag" });
                await props.reloadData();
            } else {
                alert({ icon: "error", title: "Đã có lỗi xảy ra" });
            }
        } catch (e) {

        }
        setLoader(false);
    }

    const mapProductRequest = (array) => {
        let resArray = []
        for (const ele of array) {
            resArray.push(ele._id)
        }
        return resArray
    }

    const getAllProducts = async (page) => {
        try {
            setLoader(true);
            const res = await AdminApi.getAllProducts(page);
            if (res.status === 200) {
                setProductList([...res.data.product]);
                setTotalPage(res.data.total_page);
                setPage(res.data.page);
            } else {
                setDefaultPageAndAlert()
            }
        } catch (e) {
            console.log(e);
        }
        setLoader(false);
    };

    const searchProductByPageAndBarcode = async (page, value) => {
        try {
            if (!value) {
                getAllProducts(1);
                return;
            }
            setLoader(true);
            const res = await AdminApi.getProductByPageAndBarcode(page, value);
            if (res.status === 200) {
                setProductList([...res.data.products]);
                setTotalPage(res.data.total_page);
                setPage(res.data.page);
            } else {
                setDefaultPageAndAlert()
            }
        } catch (e) {
            console.log(e);
        }
        setLoader(false);
    };

    const pageChange = (event, page) => {
        if (search) {
            searchProductByPageAndBarcode(page, search);
            return;
        }
        getAllProducts(page);
    };

    const setDefaultPageAndAlert = () => {
        alert({ icon: "error", title: "Trang không tồn tại" });
        setProductList([]);
        setTotalPage(1);
        setPage(1)
    }

    const onSearchProduct = (e) => {
        if (e.key === 'Enter') {
            searchProductByPageAndBarcode(1, e.target.value)
        }
    }

    const addProductIntoList = (item) => {
        const productArray = productIdListOfTag;
        const checkExist = checkIfProductExistInArray(item, productArray)
        if (!checkExist) {
            alert({ icon: "error", title: "Sản phẩm đã tồn tại trong danh sách" });
            return
        }
        productArray.push(item);
        setProductListIdOfTag([...productArray])
    }

    const removeProductOutOfList = (item) => {
        const productArray = productIdListOfTag.filter(ele => ele._id !== item._id);
        setProductListIdOfTag([...productArray])
    }

    const checkIfProductExistInArray = (item, array) => {
        for (const ele of array) {
            if (ele._id === item._id) {
                return false
            }
        }
        return true
    }

    return (
        <Modal
            open={props.open}
            onClose={closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            closeAfterTransition
            className={classes.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <div className={classes.paper}>
                    <h5>Chỉnh sửa special tag</h5>
                    <form className='edit-special-tag-modal-container' onSubmit={onSubmit}>
                        <FormGroup>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: classes.labelRoot,
                                    },
                                }}
                                placeholder="Tên tag"
                                value={tagName}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                    },
                                }}
                                onChange={(e) => setTagName(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup className='mt-1' row={true}>
                            <FormControlLabel
                                control={<Switch checked={isHide} onChange={() => setIsHide(!isHide)} />}
                                label={<span style={{ fontSize: "1rem" }}>Ẩn tag</span>}
                            />
                            <FormControlLabel
                                control={<Switch checked={isSuggest} onChange={() => setIsSuggest(!isSuggest)} />}
                                label={<span style={{ fontSize: "1rem" }}>Thuộc đề xuất</span>}
                            />
                            <FormControlLabel
                                control={<Switch checked={homePage} onChange={() => setHomePage(!homePage)} />}
                                label={<span style={{ fontSize: "1rem" }}>Thuộc trang chủ</span>}
                            />
                        </FormGroup>
                        <div className='edit-special-tag-tables-container row mt-1 p-0'>
                            <div className='row m-1'>
                                <div className='col-6'></div>
                                <div className='col-6'>
                                    <TextField
                                        id="input-with-icon-textfield"
                                        placeholder="Tìm kiếm sản phẩm"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IoSearch></IoSearch>
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={search}
                                        onKeyDown={onSearchProduct}
                                        onChange={(e) => setSearch(e.target.value)}
                                        variant="standard"
                                    />
                                </div>

                            </div>
                            <div className='col-6 pr-2'>
                                <div className='special-tag-table-header row p-2'>
                                    <div className='col-3 font-weight-bold text-center'>Hình ảnh</div>
                                    <div className='col-6 font-weight-bold'>Tên SP</div>
                                    <div className='col-3 font-weight-bold text-center'>Tùy chọn</div>
                                </div>
                                <div className='special-tag-table-contain'>
                                    {
                                        productIdListOfTag.length ? productIdListOfTag.map((row) => (
                                            <div key={row._id} className='special-tag-table-row row m-0 p-2'>
                                                <div className='col-3'>
                                                    {row.image[0] ? (
                                                        <div
                                                            className="small-img-wrapper"
                                                        >
                                                            <img alt="" src={row.image[0].url}></img>
                                                        </div>
                                                    ) : (
                                                        <span className="img-broke-wrapper">
                                                            Không có hình ảnh
                                                        </span>
                                                    )}
                                                </div>
                                                <div className='col-6 one-line-text'>{row.name}</div>
                                                <div className='col-3 text-center'>
                                                    <Button
                                                        type="button"
                                                        variant="contained"
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            backgroundColor: '#d9534f',
                                                            color: "white",
                                                        }}
                                                        onClick={() => removeProductOutOfList(row)}
                                                    >
                                                        Xóa
                                                    </Button></div>
                                            </div>
                                        )) : (
                                            <div className="empty-data-text">Chưa có dữ liệu</div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='col-6 pl-2'>
                                <div className='row m-0 p-0'>
                                    <div className='special-tag-table-header row m-0 p-2'>
                                        <div className='col-3 font-weight-bold text-center'>Hình ảnh</div>
                                        <div className='col-6 font-weight-bold'>Tên SP</div>
                                        <div className='col-3 font-weight-bold text-center'>Tùy chọn</div>
                                    </div>
                                    <div className='special-tag-table-contain'>
                                        {
                                            productList.length ? productList.map((row) => (
                                                <div key={row._id} className='special-tag-table-row row m-0 p-2'>
                                                    <div className='col-3'>
                                                        {row.image[0] ? (
                                                            <div
                                                                className="small-img-wrapper"
                                                            >
                                                                <img alt="" src={row.image[0].url}></img>
                                                            </div>
                                                        ) : (
                                                            <span className="img-broke-wrapper">
                                                                Không có hình ảnh
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className='col-6 one-line-text'>{row.name}</div>
                                                    <div className='col-3 text-center'>
                                                        <Button
                                                            type="button"
                                                            variant="contained"
                                                            style={{
                                                                fontSize: "0.7rem",
                                                                backgroundColor: LOGO_COLOR,
                                                                color: "white",
                                                            }}
                                                            onClick={() => addProductIntoList(row)}
                                                        >
                                                            Thêm
                                                        </Button></div>
                                                </div>
                                            )) : (
                                                <div className="empty-data-text">Chưa có dữ liệu</div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="p-4 right-wrapper">
                                    <Pagination
                                        count={totalPage}
                                        page={page}
                                        onChange={pageChange}
                                        variant="outlined"
                                        shape="rounded"
                                    />
                                </div>
                            </div>
                        </div>
                        <FormGroup className='mt-1 right-wrapper' row={true}>
                            <FormControl>
                                <Button
                                    style={{
                                        color: "white",
                                        backgroundColor: PRIMARY_COLOR,
                                        margin: '5px'
                                    }}
                                    size="small"
                                    variant="contained"
                                    type='button'
                                    onClick={closeModal}
                                >
                                    Trở về
                                </Button>
                            </FormControl>

                            <FormControl>
                                <Button
                                    style={{
                                        color: "white",
                                        backgroundColor: ICON_COLOR,
                                        margin: '5px'
                                    }}
                                    disabled={loader}
                                    size="small"
                                    variant="contained"
                                    type='submit'
                                >
                                    {
                                        loader ? <CircularProgress size={23} color='white'></CircularProgress> : "Lưu"
                                    }

                                </Button>
                            </FormControl>
                        </FormGroup>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
};

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3, 3, 3),
        borderRadius: "10px",
        width: '1050px',
        minWidth: '800px'
    },
    labelRoot: {
        fontSize: "1rem",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

export default AddProductsToSpecialTagModal;
