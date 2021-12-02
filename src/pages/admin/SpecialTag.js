import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
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
import { LOGO_COLOR } from "../../constants/index";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import alert from "../../utils/Alert";
import adminApis from "../../apis/AdminApis";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import ConfirmModal from "../../components/ConfirmModal";
import CreateSpecialTagModal from '../../components/CreateSpecialTagModal'
import AddProductsToSpecialTagModal from '../../components/AddProductsToSpecialTagModal'

const headCells = [
    {
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Tên",
    },
    {
        id: "is_suggestion",
        numeric: false,
        disablePadding: false,
        label: "Đề xuất",
    },
    {
        id: "home_page",
        numeric: false,
        disablePadding: false,
        label: "Trang chủ",
    },
    {
        id: "products",
        numeric: true,
        disablePadding: false,
        label: "Sản phẩm thuộc tag",
    },
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

export default function SpecialTag(props) {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setEditModal] = useState(false)
    const [specialTagList, setSpecialTagList] = useState([]);
    const [editSpecialTagData, setEditSpecialTagData] = useState();
    const [confirmModalState, setConfirmModalState] = useState(false);
    const [updateBtnState, setUpdateBtnState] = useState(true);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        getSpecialTagList(false, page, 10);
    }, []);

    const setDefaultPageAndAlert = () => {
        alert({ icon: "error", title: "Trang không tồn tại" });
        setSpecialTagList([]);
        setTotalPage(1);
        setPage(1)
    }

    const getSpecialTagList = async (isHide, page, limit) => {
        try {
            setLoader(true);
            const res = await adminApis.getSpecialTagList(isHide, page, limit);
            if (res.status === 200) {
                setPage(res.data.page);
                setTotalPage(res.data.total_page);
                setSpecialTagList([...res.data.tag]);
            } else {
                setDefaultPageAndAlert();
            }
        } catch (e) {
            console.log(e);
        }
        setLoader(false);
    };

    const editModalHandleOpen = (data) => {
        setEditSpecialTagData(data);
        setEditModal(true);
    };

    const editModalHandleClose = () => {
        setEditSpecialTagData();
        setEditModal(false);
    };

    const createModalHandleOpen = () => {
        setOpenCreateModal(true);
    };

    const createModalHandleClose = () => {
        setOpenCreateModal(false);
    };

    const createModalHandleCloseAfterSave = async () => {
        createModalHandleClose();
        editModalHandleClose();
        setLoader(true);
        await getSpecialTagList(false, page, 10);
        setLoader(false);
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        setUpdateBtnState(false);
        const items = Array.from(specialTagList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setSpecialTagList([...items]);
    };

    const updateCategoryPosition = async () => {
        try {
            if (!specialTagList.length) return;
            setUpdateBtnState(true);
            setLoader(true);
            const reqArray = formatUpdateCategoryData(specialTagList);
            const reqData = { boxTagList: reqArray };
            const res = await adminApis.updateOrderOfSpecialTag(reqData);
            if (res.status === 200) {
                alert({
                    icon: "success",
                    title: "Cập nhật thứ tự tag thành công",
                });
                await getSpecialTagList(false, page, 10);
            } else {
                alert({ icon: "error", title: "Cập nhật thứ tự tag thất bại" });
            }
        } catch (e) { }
        setUpdateBtnState(true);
        setLoader(false);
    };

    const formatUpdateCategoryData = (array) => {
        let temp = [];
        array.map((value) => {
            temp.push(value._id);
        });
        return temp;
    };

    const openConfirmDeleteModal = (data) => {
        setEditSpecialTagData(data);
        setConfirmModalState(true);
    };

    const closeAfterSaveConfirmModal = () => {
        closeConfirmModal();
    };

    const closeConfirmModal = () => {
        setEditSpecialTagData();
        setConfirmModalState(false);
    };

    const deleteCategory = async () => {
        try {
            setLoader(true);
            const tagId = editSpecialTagData;
            const res = await adminApis.deleteSpecialTag(tagId);
            if (res.status === 200) {
                alert({ icon: "success", title: "Xóa tag thành công" });
                pageChange(0, page)
                closeAfterSaveConfirmModal();
            } else {
                alert({ icon: "error", title: "Xóa tag thất bại" });
                closeConfirmModal();
            }
            setLoader(false);
        } catch (e) { }
    };

    const pageChange = (event, page) => {
        getSpecialTagList(false, page, 10);
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
            <CreateSpecialTagModal open={openCreateModal} handleClose={createModalHandleClose} reloadData={createModalHandleCloseAfterSave}></CreateSpecialTagModal>
            <AddProductsToSpecialTagModal open={openEditModal} handleClose={editModalHandleClose} reloadData={createModalHandleCloseAfterSave}></AddProductsToSpecialTagModal>
            <h5>Danh sách special tag</h5>

            <div className="row mb-2">
                <div className="col-lg-6 col-md-6 pt-2 pb-2"></div>
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
                            Thêm tag
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
                            rowCount={specialTagList.length}
                        />
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="characters">
                                {(provided) => (
                                    <TableBody
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {specialTagList.length ? (
                                            specialTagList.map((row, index) => {
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
                                                                    {row.name}
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    {row.is_suggestion ? "Yes" : "No"}
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    {row.home_page ? "Yes" : "No"}
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    <span>{row.products.length} sản phẩm</span>
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
                {specialTagList.length === 0 && (
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
