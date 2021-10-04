import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
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
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { LOGO_COLOR } from "../../constants/index";
import CreateCategoryModal from "../../components/CreateCategoryModal";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import adminApis from "../../apis/AdminApis";
import { FaRegEdit } from "react-icons/fa";

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
  { id: "level", numeric: true, disablePadding: false, label: "Cấp" },
  { id: "createdAt", numeric: false, disablePadding: false, label: "Ngày tạo" },
  {
    id: "subCate",
    numeric: true,
    disablePadding: false,
    label: "Danh mục con",
  },
  { id: "active", numeric: false, disablePadding: false, label: "Trạng thái" },
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Category(props) {
  let { id } = useParams();
  let query = useQuery();
  const cateList = useSelector((state) => state.admin);
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [categoryList, getCategoryList] = useState([]);
  const [parentId, setParentId] = useState();
  const [editCateData, setEditCateData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const temp = new URLSearchParams(query);
    setParentId(temp.get("parentId"));

    if (id) {
      getCategoryByParentId(id);
    } else {
      getCategoryList([...cateList.categoryData]);
    }
  }, [id, cateList]);

  const getCategoryByParentId = async (id) => {
    try {
      const query = `?parentId=${id}`;
      const res = await adminApis.getCategoryByParent(query);
      if (res.status === 200) {
        getCategoryList([...res.data]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const editModalHandleOpen = (data) => {
    setEditCateData(data);
    console.log(data);
    setOpenCreateModal(true);
  };

  const createModalHandleOpen = () => {
    setOpenCreateModal(true);
  };

  const createModalHandleClose = () => {
    setEditCateData();
    setOpenCreateModal(false);
  };

  const createModalHandleCloseAfterSave = () => {
    createModalHandleClose();
    props.getCategoryList();
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

  return (
    <div className={classes.root}>
      <CreateCategoryModal
        open={openCreateModal}
        closeModal={createModalHandleClose}
        closeModalAfterSave={createModalHandleCloseAfterSave}
        title="Tạo danh mục"
        parentId={id}
        cateEditFilter={editCateData}
      ></CreateCategoryModal>
      <div className="row m-0 p-0">
        <h5>Danh sách danh mục</h5>
        <span className="pl-3">
          <Breadcrumbs
            separator={<IoIosArrowForward size="16px" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" to="/admin/category">
              Danh mục 1
            </Link>
            {parentId && (
              <Link
                color="inherit"
                to={`/admin/category/${parentId}?parentId=${parentId}`}
              >
                Danh mục 2
              </Link>
            )}
            {id && parentId && id !== parentId && (
              <Link
                color="inherit"
                to={`/admin/category/${id}?parentId=${parentId}`}
              >
                Danh mục 3
              </Link>
            )}
          </Breadcrumbs>
        </span>
      </div>

      <div className="row mb-2">
        <div className="col-lg-6 col-md-6 pt-2 pb-2">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Tìm kiếm danh mục"
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
            Thêm danh mục
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
              rowCount={categoryList.length}
            />
            {categoryList.length ? (
              <TableBody>
                {stableSort(categoryList, getComparator(order, orderBy)).map(
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
                          {row.level === 3 ? (
                            <span>{row.name}</span>
                          ) : (
                            <Link
                              to={
                                parentId
                                  ? `/admin/category/${row._id}?parentId=${parentId}`
                                  : `/admin/category/${row._id}?parentId=${row._id}`
                              }
                            >
                              {row.name}
                            </Link>
                          )}
                        </TableCell>
                        <TableCell align="center">{row.level}</TableCell>
                        <TableCell align="center">
                          {convertTime(row.createdAt)}
                        </TableCell>
                        <TableCell align="center">
                          <span>{row.subCate.length} danh mục</span>
                        </TableCell>
                        <TableCell align="center">
                          {row.active ? (
                            <span>Đang được bày bán</span>
                          ) : (
                            <span>Không được bày bán</span>
                          )}
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="primary"
                            aria-label="update category"
                            onClick={() => editModalHandleOpen(row)}
                          >
                            <FaRegEdit color={LOGO_COLOR} size={18} />
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
        {categoryList.length === 0 && (
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
}));
