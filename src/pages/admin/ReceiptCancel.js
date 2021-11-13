import React, { useState, useEffect, Fragment } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import AdminApi from "../../apis/AdminApis";
import { ICON_COLOR, LOGO_COLOR } from "../../constants/index";
import { FaRegEdit } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import alert from "../../utils/Alert";
import ChangeStatusModal from "../../components/ChangeStatusModal/index";
import downloadReceiptReport from '../../utils/downloadReceiptReport'

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

function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" align="center">
          STT
        </TableCell>
        <TableCell padding="normal" align="center">
          Tên KH
        </TableCell>
        <TableCell padding="normal" align="center">
          Điện thoại
        </TableCell>
        <TableCell padding="normal" align="center">
          Địa chỉ
        </TableCell>
        <TableCell padding="normal" align="center">
          Ngày đặt
        </TableCell>
        <TableCell padding="normal" align="center">
          Tổng cộng
        </TableCell>
        <TableCell padding="normal" align="center">
          Trạng thái
        </TableCell>
        <TableCell padding="normal" align="center">
          Tùy chỉnh
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function ReceiptUndone() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [open, setOpen] = useState(false);
  const [updateItemId, setUpdateItemId] = useState();
  const [updateItemState, setUpdateState] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [receiptProccess, setReceiptProccess] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getReceiptData(1, false);
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getReceiptData = async (page, status) => {
    try {
      setLoader(true);
      const res = await AdminApi.getListReceipt(page, status);
      if (res.status === 200) {
        mapCollapseStateForEachReceipt(res.data.receipts);
        setTotalPage(res.data.total_page);
        setPage(res.data.page);
      }
    } catch (e) {
      console.log(e);
    }
    setLoader(false);
  };

  const mapCollapseStateForEachReceipt = (array) => {
    array.map((ele) => {
      ele["dropState"] = false;
    });
    setReceiptProccess([...array]);
  };

  const changeCollapseState = (index) => {
    let tempArr = receiptProccess;
    tempArr.map((ele, i) => {
      if (i === index) {
        ele.dropState = !ele.dropState;
      }
    });
    setReceiptProccess([...tempArr]);
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

  const adminChangeStatus = async (status, description) => {
    const data = {
      status: status,
      description: description,
    };
    try {
      setLoader(true);
      const res = await AdminApi.updateListReceipt(updateItemId, data);
      if (res.status === 200) {
        alert({
          icon: "success",
          title: res.message,
          msg: "Cập nhật thành công",
        });
        closeAfterSave();
        return;
      }
    } catch (e) {
      console.log(e);
    }
    setLoader(false);
    handleCloseModal();
  };

  const exportReceiptHandle = async () => {
    setLoader(true)
    await downloadReceiptReport()
    setLoader(false)
  }

  const pageChange = (event, page) => {
    getReceiptData(page, false);
  };

  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  const handleOpenModal = (ele) => {
    setUpdateItemId(ele._id);
    setUpdateState(ele.status.present);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setUpdateItemId();
    setUpdateState();
    setOpen(false);
  };

  const closeAfterSave = () => {
    getReceiptData(page, false);
    handleCloseModal();
  };

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ChangeStatusModal
        open={open}
        itemStatus={updateItemState}
        handleClose={handleCloseModal}
        onSubmit={adminChangeStatus}
      ></ChangeStatusModal>
      <h5>Đơn hàng chưa xử lý</h5>
      <div className="row mb-2">
        <div className="col-lg-6 col-md-6 pt-2 pb-2">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Tìm kiếm đơn hàng"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoSearch></IoSearch>
                </InputAdornment>
              ),
            }}
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
            onClick={exportReceiptHandle}
          >
            Xuất hóa đơn
          </Button>
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
              rowCount={receiptProccess.length}
            />
            <TableBody>
              {stableSort(receiptProccess, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Fragment key={index}>
                      <TableRow hover tabIndex={-1}>
                        <TableCell padding="checkbox" align="center">
                          {index + 1}
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="normal"
                          align="center"
                          onClick={() => changeCollapseState(index)}
                        >
                          <Link to="#" color="inherit" className='rrd-custom-link'>
                            {row.name}
                          </Link>
                        </TableCell>

                        <TableCell padding="normal" align="center">
                          {row.phone}
                        </TableCell>

                        <TableCell padding="normal" align="center">
                          {row.address}
                        </TableCell>

                        <TableCell padding="normal" align="center">
                          {convertTime(row.createdAt)}
                        </TableCell>

                        <TableCell padding="normal" align="center">
                          {formatCurrency(row.total_price)}đ
                        </TableCell>

                        <TableCell padding="normal" align="center">
                          {row.status.present}
                        </TableCell>

                        <TableCell padding="normal" align="center">
                          {row.status.present === "Đã vận chuyển" ? (
                            <IconButton
                              color="primary"
                              aria-label="update receipt"
                              onClick={() => handleOpenModal(row)}
                            >
                              <FaRegEdit color={ICON_COLOR} size={18} />
                            </IconButton>
                          ) : (
                            <IconButton aria-label="update receipt">
                              <FaRegEdit color="gray" size={18} />
                            </IconButton>
                          )}
                        </TableCell>
                      </TableRow>
                      {row.dropState ? (
                        <TableCell
                          className="receipt-detail-container"
                          colSpan={8}
                        >
                          <div className="row">
                            <div className="col-6">
                              <h5 className="font-weight-bold">
                                Thông tin đơn hàng
                              </h5>
                              <div className="row">
                                <div className="col-6 font-weight-bold">
                                  Tên khách hàng:
                                </div>
                                <div className="col-6">{row.name}</div>
                              </div>
                              <div className="row">
                                <div className="col-6 font-weight-bold">
                                  Mã đơn hàng:
                                </div>
                                <div className="col-6">{row.id_receipt}</div>
                              </div>
                              <div className="row">
                                <div className="col-6 font-weight-bold">
                                  Phương thức giao hàng:
                                </div>
                                <div className="col-6">{row.delivery}</div>
                              </div>
                              <div className="row">
                                <div className="col-6 font-weight-bold">
                                  Ghi chú:
                                </div>
                                <div className="col-6">
                                  {row.detail ? row.detail : "Không có"}
                                </div>
                              </div>
                            </div>
                            <div className="row m-0 col-6 col-border-left">
                              <div className="col-3 text-center font-weight-bold">
                                Mã sản phẩm
                              </div>
                              <div className="col-3 text-center font-weight-bold">
                                Tên
                              </div>
                              <div className="col-3 text-center font-weight-bold">
                                SL
                              </div>
                              <div className="col-3 text-center font-weight-bold">
                                Tổng cộng
                              </div>
                              {row.products.length ? (
                                row.products.map((ele, index) => (
                                  <div
                                    className="row m-0 p-0 mt-1 pt-2 detail-product-item"
                                    key={index}
                                  >
                                    <div className="col-3 text-center">
                                      {ele.product.parameter.bar_code}
                                    </div>
                                    <div className="col-3 text-center three-line-text">
                                      {ele.product.name +
                                        " " +
                                        ele.product.parameter.name}
                                    </div>
                                    <div className="col-3 text-center">
                                      {ele.total}
                                    </div>
                                    <div className="col-3 text-center">
                                      {formatCurrency(ele.total_price)}đ
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </TableCell>
                      ) : (
                        <Fragment />
                      )}
                    </Fragment>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {receiptProccess.length === 0 && (
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
    padding: "20px",
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
