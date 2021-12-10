import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GoPlus } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LOGO_COLOR } from "../../constants/index";
import { Link, useHistory } from "react-router-dom";
import adminApis from "../../apis/AdminApis";
import CreateBoxTagModal from "../../components/CreateBoxTagModal";
import ConfirmModal from "../../components/ConfirmModal";
import alert from "../../utils/Alert";
import img from '../../assets/broke-image.png';

export default function BoxTagManager() {
  const classes = useStyles();
  const history = useHistory();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [prototypeBoxTagList, setPrototypeBoxTagList] = useState([]);
  const [tagBoxList, setBoxTagList] = useState([]);
  const [editBoxTag, setEditBoxTag] = useState();
  const [onDeleteBoxTagId, setOnDeleteBoxTagId] = useState();
  const [confirmModalState, setConfirmModalState] = useState(false);
  const [updateBtnState, setUpdateBtnState] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getBoxTagList();
  }, []);

  const getBoxTagList = async () => {
    try {
      setLoader(true);
      const res = await adminApis.getBoxTagList();
      if (res.status === 200) {
        setBoxTagList(res.data);
        setPrototypeBoxTagList(res.data);
      }
    } catch (e) { }
    setLoader(false);
  };

  const deleteBoxTag = async () => {
    try {
      if (!onDeleteBoxTagId) return;
      setLoader(true);
      const res = await adminApis.deleteBoxTag(onDeleteBoxTagId);
      if (res.status === 200) {
        alert({ icon: "success", title: "Đã xóa box tag" });
        getBoxTagList();
      } else {
        alert({
          icon: "error",
          title: "Đã có lỗi xảy ra",
          msg: "Xin vui lòng thử lại",
        });
      }
    } catch (e) { }
    closeConfirmModal();
    setLoader(false);
  };

  const updateBoxtagOrdered = async () => {
    try {
      if (!tagBoxList.length) return;
      setUpdateBtnState(true);
      setLoader(true);
      console.log(tagBoxList);
      const req = formatUpdateCategoryData(tagBoxList);
      const formData = {
        boxTagList: req,
      };
      const res = await adminApis.updatBoxTagPosition(formData);
      if (res.status === 200) {
        alert({ icon: "success", title: "Cập nhật thứ tự thành công" });
      } else {
        alert({
          icon: "error",
          title: "Đã có lỗi xảy ra",
          msg: "Xin vui lòng thử lại sau",
        });
      }
    } catch (e) { }
    setLoader(false);
  };

  const formatUpdateCategoryData = (array) => {
    let temp = [];
    array.map((value) => {
      temp.push(value._id);
    });
    return temp;
  };

  const editModalHandleOpen = (data) => {
    setEditBoxTag(data);
    setOpenCreateModal(true);
  };

  const createModalHandleOpen = () => {
    setOpenCreateModal(true);
  };

  const createModalHandleClose = () => {
    setEditBoxTag();
    setOpenCreateModal(false);
  };

  const createModalHandleCloseAfterSave = () => {
    getBoxTagList();
    createModalHandleClose();
  };

  const openConfirmDeleteModal = (boxtagId) => {
    setOnDeleteBoxTagId(boxtagId);
    setConfirmModalState(true);
  };

  const closeConfirmModal = () => {
    setOnDeleteBoxTagId();
    setConfirmModalState(false);
  };

  const searchTag = (value) => {
    let result = prototypeBoxTagList.filter((item) =>
      item.name.includes(value)
    );
    setBoxTagList([...result]);
  };

  function onChangePosition(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(tagBoxList, sourceIndex, targetIndex);
    setBoxTagList(nextState);
    setUpdateBtnState(false);
  }

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ConfirmModal
        open={confirmModalState}
        handleClose={closeConfirmModal}
        accept={deleteBoxTag}
      ></ConfirmModal>
      <CreateBoxTagModal
        open={openCreateModal}
        closeModal={createModalHandleClose}
        closeModalAfterSave={createModalHandleCloseAfterSave}
        boxtagEditFilter={editBoxTag}
      ></CreateBoxTagModal>
      <h5>Danh sách Box Tag</h5>

      <div className="row mb-2">
        <div className="col-lg-6 col-md-6 pt-2 pb-2">
          <TextField
            id="input-with-icon-textfield"
            placeholder="Tìm kiếm Box Tag"
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
        <div className="row col-lg-6 col-md-6 pt-2 pb-2 right-wrapper">
          <div className="col-6 right-wrapper">
            <Button
              style={{
                color: "white",
                backgroundColor: updateBtnState ? "lightgray" : LOGO_COLOR,
              }}
              disabled={updateBtnState}
              size="small"
              onClick={updateBoxtagOrdered}
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
              Thêm Box Tag
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.paper}>
        <GridContextProvider onChange={onChangePosition}>
          <GridDropZone
            id="items"
            boxesPerRow={4}
            rowHeight={270}
            style={{
              height: tagBoxList.length
                ? (tagBoxList.length / 4) * 270
                : "100px",
            }}
          >
            {tagBoxList.length ? (
              tagBoxList.map((ele, index) => (
                <GridItem key={index}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={
                          ele.image.url ||
                          img
                        }
                        title="Contemplative Reptile"
                      />                     
                        <CardContent>
                          <div style={{ height: 40 }}>
                            {ele.name ? (
                              <h5 className="two-line-text">{ele.name}</h5>
                            ) : (
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="h4"
                              >
                                <span style={{ color: "gray" }}>
                                  Không có tiêu đề
                                </span>
                              </Typography>
                            )}
                          </div>
                        </CardContent>                      
                    </CardActionArea>
                    <CardActions>
                    <Button
                        size="small"
                        color="default"
                        onClick={() => history.push(`/admin/box-tag/${ele._id}?boxtagName=${ele.name}`)}
                      >
                        Chi tiết
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => editModalHandleOpen(ele)}
                      >
                        Chỉnh sửa
                      </Button>
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => openConfirmDeleteModal(ele._id)}
                      >
                        Xóa
                      </Button>
                    </CardActions>
                  </Card>
                </GridItem>
              ))
            ) : (
              <div className="empty-data-text">Chưa có dữ liệu</div>
            )}
          </GridDropZone>
        </GridContextProvider>
      </div>
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
    paddingTop: "10px",
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
  card: {
    maxWidth: "100%",
    margin: "6px",
  },
  media: {
    height: 140,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
