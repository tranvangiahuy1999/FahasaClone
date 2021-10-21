import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
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
import Paper from "@material-ui/core/Paper";
import { GoPlus } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { LOGO_COLOR } from "../../constants/index";
import CreateCategoryModal from "../../components/CreateCategoryModal";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import alert from "../../utils/Alert";
import adminApis from "../../apis/AdminApis";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import ConfirmModal from "../../components/ConfirmModal";

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
          >
            {headCell.label}
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
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [prototypeCateList, setPrototypeCateList] = useState([]);
  const [categoryList, getCategoryList] = useState([]);
  const [parentId, setParentId] = useState();
  const [editCateData, setEditCateData] = useState();
  const [confirmModalState, setConfirmModalState] = useState(false);

  const [updateBtnState, setUpdateBtnState] = useState(true);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const temp = new URLSearchParams(query);
    setParentId(temp.get("parentId"));
    if (id) {
      getCategoryByParentId(id);
    } else {
      getCategoryList([...cateList.categoryData]);
      setPrototypeCateList([...cateList.categoryData]);
      setLoader(false);
    }
  }, [id, cateList]);

  const getCategoryByParentId = async (id) => {
    try {
      setLoader(true);
      const query = `?parentId=${id}`;
      const res = await adminApis.getCategoryByParent(query);
      if (res.status === 200) {
        getCategoryList([...res.data]);
        setPrototypeCateList([...res.data]);
      }
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  const editModalHandleOpen = (data) => {
    setEditCateData(data);
    setOpenCreateModal(true);
  };

  const createModalHandleOpen = () => {
    setOpenCreateModal(true);
  };

  const createModalHandleClose = () => {
    setEditCateData();
    setOpenCreateModal(false);
  };

  const createModalHandleCloseAfterSave = async () => {
    createModalHandleClose();
    setLoader(true);
    await props.getCategoryList();
    setLoader(false);
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

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    setUpdateBtnState(false);
    const items = Array.from(categoryList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    getCategoryList([...items]);
    setPrototypeCateList([...items]);
  };

  const updateCategoryPosition = async () => {
    try {
      if (!categoryList.length) return;
      const reqArray = formatUpdateCategoryData(categoryList);
      const reqData = { cateList: reqArray };
      setUpdateBtnState(true);
      setLoader(true);
      const res = await adminApis.updateCategoryPosition(reqData);
      if (res.status === 200) {
        alert({
          icon: "success",
          title: "Cập nhật thứ tự danh mục thành công",
        });
        await props.getCategoryList();
        setUpdateBtnState(true);
      } else {
        alert({ icon: "error", title: "Cập nhật thứ tự danh mục thất bại" });
      }
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  const formatUpdateCategoryData = (array) => {
    let temp = [];
    array.map((value) => {
      temp.push(value._id);
    });
    return temp;
  };

  const openConfirmDeleteModal = (data) => {
    setEditCateData(data);
    setConfirmModalState(true);
  };

  const closeAfterSaveConfirmModal = () => {
    closeConfirmModal();
  };

  const closeConfirmModal = () => {
    setEditCateData();
    setConfirmModalState(false);
  };

  const deleteCategotyUIHandler = (cateId) => {
    let temp = categoryList;
    let res = temp.filter((ele) => {
      return ele._id !== cateId;
    });
    return res;
  };

  const deleteCategory = async () => {
    try {
      setLoader(true);
      const cateId = editCateData;
      const res = await adminApis.deleteCategoty(cateId);
      if (res.status === 200) {
        alert({ icon: "success", title: "Xóa danh mục thành công" });
        const deletedArr = deleteCategotyUIHandler(cateId);
        getCategoryList([...deletedArr]);
        setPrototypeCateList([...deletedArr]);
        closeAfterSaveConfirmModal();
      } else {
        alert({ icon: "error", title: "Xóa danh mục thất bại" });
        closeConfirmModal();
      }
      setLoader(false);
    } catch (e) {}
  };

  const searchCategory = (value) => {
    let result = prototypeCateList.filter((item) => item.name.includes(value));
    getCategoryList([...result]);
  };

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ConfirmModal
        open={confirmModalState}
        handleClose={() => setConfirmModalState(false)}
        accept={deleteCategory}
      ></ConfirmModal>
      <CreateCategoryModal
        open={openCreateModal}
        closeModal={createModalHandleClose}
        closeModalAfterSave={createModalHandleCloseAfterSave}
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
            onChange={(e) => searchCategory(e.target.value)}
            variant="standard"
          />
        </div>
        <div className="col-lg-6 col-md-6 pt-2 pb-2 row ">
          <div className="col-6 right-wrapper">
            <Button
              style={{
                color: "white",
                backgroundColor: updateBtnState ? "lightgray" : LOGO_COLOR,
              }}
              disabled={updateBtnState}
              size="small"
              onClick={updateCategoryPosition}
              variant="contained"
            >
              Cập nhật thứ tự
            </Button>
          </div>
          <div className="col-6 right-wrapper">
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
              rowCount={categoryList.length}
            />
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="characters">
                {(provided) => (
                  <TableBody
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {categoryList.length ? (
                      categoryList.map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <Draggable
                            key={row._id}
                            draggableId={row._id}
                            index={index}
                          >
                            {(provided) => (
                              <TableRow
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                hover
                                role="checkbox"
                                tabIndex={-1}
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
                                <TableCell align="center">
                                  {row.level}
                                </TableCell>
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
                                  <IconButton
                                    color="secondary"
                                    onClick={() =>
                                      openConfirmDeleteModal(row._id)
                                    }
                                  >
                                    <IoTrashBin
                                      className="text-danger"
                                      size={18}
                                    ></IoTrashBin>
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            )}
                          </Draggable>
                        );
                      })
                    ) : (
                      <></>
                    )}
                    {provided.placeholder}
                  </TableBody>
                )}
              </Droppable>
            </DragDropContext>
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
