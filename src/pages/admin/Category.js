import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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
import { LOGO_COLOR } from "../../constants/index";
import adminApis from "../../apis/AdminApis";
import CreateCategoryModal from "../../components/CreateCategoryModal";

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
        <TableCell padding="checkbox">
          <div className="text-center">STT</div>
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
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "true",
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

export default function Category() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const res = await adminApis.getCategory();
      if (res.status === 200) {
        setCategoryList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createModalHandleOpen = () => {
    setOpenCreateModal(true);
  };

  const createModalHandleClose = () => {
    setOpenCreateModal(false);
  };

  const createModalHandleCloseAfterSave = () => {
    createModalHandleClose();
    getCategoryList();
  };

  const convertTime = (unformatTime) => {
    let date = new Date(unformatTime);
    const formatedTime =
      date.getDate() +
      " / " +
      (date.getMonth() + 1) +
      " / " +
      date.getFullYear();
    return formatedTime;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = categoryList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <CreateCategoryModal
        open={openCreateModal}
        closeModal={createModalHandleClose}
        closeModalAfterSave={createModalHandleCloseAfterSave}
        title="Tạo danh mục cấp 1"
      ></CreateCategoryModal>
      <div className="row mb-2">
        <div className="col-lg-6 col-md-6">
          <h5>Danh sách danh mục</h5>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <div className="col-lg-6 p-2">
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
            <div className="col-lg-6 p-2 right-wrapper">
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
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={categoryList.length}
            />
            <TableBody>
              {categoryList.length ? (
                stableSort(categoryList, getComparator(order, orderBy)).map(
                  (row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <div className="text-center">{index + 1}</div>
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
                        <TableCell align="center">{row.level}</TableCell>
                        <TableCell align="center">
                          {convertTime(row.createdAt)}
                        </TableCell>
                        <TableCell align="center">
                          {row.subCate.length}
                        </TableCell>
                        <TableCell align="center">
                          {row.active ? (
                            <div>Đang được bày bán</div>
                          ) : (
                            <div>Không được bày bán</div>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
