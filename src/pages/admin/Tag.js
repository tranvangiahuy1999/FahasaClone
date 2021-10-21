import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { GoPlus } from "react-icons/go";
import { IoSearch, IoTrashBin } from "react-icons/io5";
import { LOGO_COLOR } from "../../constants/index";
import CreateTagModal from "../../components/CreateTagModal";
import adminApis from "../../apis/AdminApis";
import { FaRegEdit } from "react-icons/fa";
import ConfirmModal from "../../components/ConfirmModal";
import alert from "../../utils/Alert";

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
    label: "Tên",
  },
  { id: "category", numeric: false, disablePadding: false, label: "Danh mục" },
  { id: "createdAt", numeric: false, disablePadding: false, label: "Ngày tạo" },
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
        <TableCell align="center" padding="normal">
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

export default function TagManagement(props) {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [prototypeTagList, setPrototypeTagList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [editTagData, setEditTagData] = useState();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [confirmModalState, setConfirmModalState] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getTagList();
  }, []);

  const getTagList = async () => {
    try {
      setLoader(true);
      const res = await adminApis.getTagList();
      if (res.status === 200) {
        setTagList([...res.data]);
        setPrototypeTagList([...res.data]);
      }
    } catch (e) {}
    setLoader(false);
  };

  const deleteTag = async () => {
    try {
      if (!editTagData) return;
      setLoader(true);
      const tagId = editTagData._id;
      const res = await adminApis.deleteTag(tagId);
      if (res.status === 200) {
        alert({ icon: "success", title: "Đã xóa tag" });
        closeAfterSaveConfirmModal();
      } else {
        alert({
          icon: "error",
          title: "Đã có lỗi xảy ra",
          msg: "Xin vui lòng thử lại sau",
        });
        closeConfirmModal();
      }
    } catch (e) {}
    setLoader(false);
  };

  const editModalHandleOpen = (data) => {
    setEditTagData(data);
    setOpenCreateModal(true);
  };

  const createModalHandleOpen = () => {
    setOpenCreateModal(true);
  };

  const createModalHandleClose = () => {
    setEditTagData();
    setOpenCreateModal(false);
  };

  const createModalHandleCloseAfterSave = () => {
    getTagList();
    createModalHandleClose();
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const openConfirmDeleteModal = (data) => {
    setEditTagData(data);
    setConfirmModalState(true);
  };

  const closeAfterSaveConfirmModal = () => {
    getTagList();
    closeConfirmModal();
  };

  const closeConfirmModal = () => {
    setEditTagData();
    setConfirmModalState(false);
  };

  const searchTag = (value) => {
    let result = prototypeTagList.filter((item) => item.name.includes(value));
    setTagList([...result]);
  };

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CreateTagModal
        open={openCreateModal}
        closeModal={createModalHandleClose}
        closeModalAfterSave={createModalHandleCloseAfterSave}
        tagEditFilter={editTagData}
      ></CreateTagModal>
      <ConfirmModal
        open={confirmModalState}
        handleClose={() => setConfirmModalState(false)}
        accept={deleteTag}
      ></ConfirmModal>
      <div className="row m-0 p-0">
        <h5>Danh sách Tag</h5>
      </div>

      <div className="row mb-2">
        <div className="col-lg-6 col-md-6 pt-2 pb-2">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Tìm kiếm Tag"
            onChange={(e) => searchTag(e.target.value)}
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
            onClick={createModalHandleOpen}
            variant="contained"
            startIcon={<GoPlus></GoPlus>}
          >
            Thêm tag
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
              rowCount={tagList.length}
            />
            {tagList.length ? (
              <TableBody>
                {stableSort(tagList, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        <TableCell padding="checkbox" align="center">
                          {index + 1}
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
                          {row.category.name}
                        </TableCell>
                        <TableCell align="center">
                          {convertTime(row.createdAt)}
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="primary"
                            aria-label="update category"
                            onClick={() => editModalHandleOpen(row)}
                          >
                            <FaRegEdit color={LOGO_COLOR} size={18} />
                          </IconButton>
                          <IconButton
                            color="secondary"
                            onClick={() => openConfirmDeleteModal(row)}
                          >
                            <IoTrashBin
                              className="text-danger"
                              size={18}
                            ></IoTrashBin>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            ) : (
              <></>
            )}
          </Table>
        </TableContainer>
        {tagList.length === 0 && (
          <div className="empty-data-text">Chưa có dữ liệu</div>
        )}
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
