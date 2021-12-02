import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Pagination from "@material-ui/lab/Pagination";
import Paper from "@material-ui/core/Paper";
import { IoTrashBin } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import ReactBnbGallery from "react-bnb-gallery";
import { LOGO_COLOR } from "../../constants/index";
import { Link } from "react-router-dom";
import adminApis from "../../apis/AdminApis";
import ConfirmModal from "../../components/ConfirmModal";
import alert from "../../utils/Alert";
import { useHistory } from "react-router-dom";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Tên sản phẩm",
  },
  { id: "date", numeric: true, disablePadding: false, label: "Ngày tạo" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" align="center">
          <span>STT</span>
        </TableCell>
        <TableCell padding="normal" align="center">
          <span>Hình ảnh</span>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="normal" align="center">
          <span>Tùy chỉnh</span>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function Product() {
  const classes = useStyles();
  const history = useHistory();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [photoData, setPhotoData] = useState([]);
  const [actionItemId, setActionItemId] = useState();
  const [confirmModalState, setConfirmModalState] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAllProducts(page);
  }, []);

  // useEffect(() => {

  // }, [search]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const setDefaultPageAndAlert = () => {
    alert({ icon: "error", title: "Trang không tồn tại" });
    setProductList([]);
    setTotalPage(1);
    setPage(1)
  }

  const getAllProducts = async (page) => {
    try {
      setLoader(true);
      const res = await adminApis.getAllProducts(page);
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
      const res = await adminApis.getProductByPageAndBarcode(page, value);
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

  const deleteProduct = async (id) => {
    try {
      setLoader(true);
      const res = await adminApis.deleteProduct(id);
      if (res.status === 200) {
        alert({ icon: "success", title: "Đã xóa thành công" });
        pageChange(0, page);
      } else {
        alert({ icon: "error", title: "Đã có lỗi xảy ra" });
      }
      setConfirmModalState(false);
    } catch (e) {
      console.log(e);
    }
    setLoader(false);
  };

  const openWidePhoto = (photo) => {
    let array = [];
    photo.forEach((item) => {
      array.push(item.url);
    });
    setIsOpen(true);
    setPhotoData(array);
  };

  const formatSingleDayMonth = (string) => {
    let stringtemp = string.toString();
    if (stringtemp.length < 2) {
      const temp = "0" + stringtemp;
      return temp;
    }
    return stringtemp;
  };

  const convertTime = (unformatTime) => {
    let date = new Date(unformatTime);
    const formatedTime =
      formatSingleDayMonth(date.getDate()) +
      " / " +
      formatSingleDayMonth(date.getMonth() + 1) +
      " / " +
      date.getFullYear();
    return formatedTime;
  };

  const pageChange = (event, page) => {
    if (search) {
      searchProductByPageAndBarcode(page, search);
      return;
    }
    getAllProducts(page);
  };

  const handleDeleteItem = (id) => {
    setConfirmModalState(true);
    setActionItemId(id);
  };

  const goToCreateProductPage = () => {
    history.push('/admin/product/add-product')
  }

  const onSearchProduct = (e) => {
    if (e.key === 'Enter') {
      searchProductByPageAndBarcode(1, e.target.value)
    }
  }

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="row mb-2">
        <ReactBnbGallery
          opacity={0.8}
          show={isOpen}
          photos={photoData}
          onClose={() => setIsOpen(false)}
        />
        <ConfirmModal
          open={confirmModalState}
          handleClose={() => setConfirmModalState(false)}
          accept={() => deleteProduct(actionItemId)}
        ></ConfirmModal>
        <h5>Danh sách sản phẩm</h5>
        <div className="row mb-2">
          <div className="col-lg-6 col-md-6 pt-2 pb-2">
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
          <div className="col-lg-6 col-md-6 pt-2 pb-2 right-wrapper">
            <Button
              style={{
                backgroundColor: LOGO_COLOR,
                color: "white",
              }}
              size="small"
              variant="contained"
              startIcon={<GoPlus></GoPlus>}
              onClick={goToCreateProductPage}
            >
              Thêm sản phẩm
            </Button>
          </div>
        </div>
      </div>

      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={productList.length}
            />
            <TableBody>
              {stableSort(productList, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell padding="checkbox" align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell padding="none" align="center">
                        {row.image[0] ? (
                          <div
                            className="img-wrapper"
                            onClick={() => openWidePhoto(row.image)}
                          >
                            <img alt="" src={row.image[0].url}></img>
                          </div>
                        ) : (
                          <span className="img-broke-wrapper">
                            Không có hình ảnh
                          </span>
                        )}
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center">
                        {convertTime(row.createdAt)}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/admin/product/update-product/${row._id}`}>
                          <IconButton
                            color="primary"
                            aria-label="update category"
                          >
                            <FaRegEdit color={LOGO_COLOR} size={18} />
                          </IconButton>
                        </Link>

                        <IconButton color="secondary">
                          <IoTrashBin
                            size={18}
                            onClick={() => handleDeleteItem(row._id)}
                          ></IoTrashBin>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {productList.length === 0 && (
          <div className="empty-data-text">Chưa có dữ liệu</div>
        )}
        <div className="p-4 right-wrapper">
          <Pagination
            count={totalPage}
            page={page}
            onChange={pageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "true",
    padding: 20,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    width: "100%",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
