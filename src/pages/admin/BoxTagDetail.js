import React, { useState, useEffect, Fragment } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import adminApis from "../../apis/AdminApis";
import { useParams, useLocation } from "react-router-dom";
import { IoSearch, IoTrashBin } from "react-icons/io5";
import alert from "../../utils/Alert";
import ConfirmModal from "../../components/ConfirmModal";
import AddTagToBoxtagModal from "../../components/AddTagToBoxtagModal";
// import { LOGO_COLOR } from "../../constants/index";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BoxTagDetail() {
  const classes = useStyles();
  let { id } = useParams();
  let query = useQuery();
  const [value, setValue] = useState(0);
  const [tagList, setTagList] = useState([]);
  const [prototypeProductListOfTag, setPrototypeProductListOfTag] = useState(
    []
  );
  const [productListOfTag, setProductListOfTag] = useState([]);
  const [prototypeProductList, setPrototypeProductList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [boxTagName, setBoxTagName] = useState("");
  const [boxtagId, setBoxTagId] = useState();
  const [onActionTagId, setOnActionTagId] = useState();
  const [editProductData, setEditProductData] = useState();
  const [confirmModalState, setConfirmModalState] = useState(false);
  const [confirmModalRemoveTagState, setConfirmModalRemoveTagState] =
    useState(false);
  const [addTagModalState, setAddTagModalState] = useState(false);
  const [reloadModalData, setReloadModalData] = useState(false);
  // const [updateBtnState, setUpdateBtnState] = useState(true);
  const [loader, setLoader] = useState(false);
  const [showAllProductState, setShowAllProductState] = useState(false);

  useEffect(() => {
    const temp = new URLSearchParams(query);
    setBoxTagId(id);
    getTagListWithBoxTagId(id);
    setBoxTagName(temp.get("boxtagName"));
  }, [id]);

  useEffect(() => {
    setShowAllProductState(false)
    async function initProductData(index) {
      setLoader(true);      
      await getProductWithTagId(tagList[index]._id);
      await getProductByCate(tagList[index]._id);
      setLoader(false);
    }
    if (tagList.length) {
      if (value === tagList.length) {
        setValue(0);
        initProductData(0);
      } else if (value <= tagList.length) {
        initProductData(value);
      }
    }
  }, [tagList, value]);

  const getTagListWithBoxTagId = async (boxtagId) => {
    try {
      setLoader(true);
      const res = await adminApis.getTagWithBoxTagId(boxtagId);
      if (res.status === 200) {
        setTagList([...res.data]);
      }
    } catch (e) { }
    setLoader(false);
  };

  const getProductWithTagId = async (tagId) => {
    try {
      const res = await adminApis.getProductByTagId(tagId);
      if (res.status === 200) {
        setOnActionTagId(tagId);
        setProductListOfTag([...res.data]);
        setPrototypeProductListOfTag([...res.data]);
      }
    } catch (e) { }
  };

  const getProductByCate = async (tagId) => {
    try {
      const res = await adminApis.getProductInCateByTag(tagId);
      if (res.status === 200) {
        setProductList(res.data);
        setPrototypeProductList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeProductFromTag = async (productId) => {
    try {
      if (!productId || !onActionTagId) return;
      setLoader(true);
      const data = {
        idProduct: productId,
      };
      const res = await adminApis.removeProductfromTag(onActionTagId, data);
      if (res.status === 200) {
        alert({ icon: "success", title: "Đã gỡ sản phẩm khỏi tag" });
        closeAfterSaveConfirmModal();
      } else {
        alert({
          icon: "error",
          title: "Đã có lỗi xảy ra",
          msg: "Xin vui lòng thử lại sau",
        });
        closeConfirmModal();
      }
    } catch (e) { }
    setLoader(false);
  };

  const removeTagFromBoxTag = async () => {
    try {
      if (!onActionTagId) return;
      setLoader(true);
      const res = await adminApis.removeTagFromBoxTag(onActionTagId);
      if (res.status === 200) {
        alert({ icon: "success", title: "Đã gỡ tag" });
        closeAfterRemoveTagConfirmModal();
      } else {
        alert({
          icon: "error",
          title: "Đã có lỗi xảy ra",
          msg: "Xin vui lòng thử lại sau",
        });
        closeConfirmRemoveTagModal();
      }
    } catch (e) { }
    setLoader(false);
  };

  const addProductIntoTag = async (productId) => {
    try {
      if (!productId || !onActionTagId) return;
      setLoader(true);
      const formData = {
        idProduct: productId,
      };
      const res = await adminApis.addProductToTag(onActionTagId, formData);
      if (res.status === 200) {
        alert({ icon: "success", title: "Đã thêm sản phẩm vào tag" });
        getTagListWithBoxTagId(boxtagId);
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

  const openConfirmDeleteModal = (data) => {
    setEditProductData(data);
    setConfirmModalState(true);
  };

  const closeAfterSaveConfirmModal = () => {
    getTagListWithBoxTagId(boxtagId);
    closeConfirmModal();
  };

  const closeConfirmModal = () => {
    setEditProductData();
    setConfirmModalState(false);
  };

  const openConfirmRemoveTagModal = () => {
    setConfirmModalRemoveTagState(true);
  };

  const closeAfterRemoveTagConfirmModal = () => {
    getTagListWithBoxTagId(boxtagId);
    closeConfirmRemoveTagModal();
  };

  const closeConfirmRemoveTagModal = () => {
    setConfirmModalRemoveTagState(false);
  };

  const openAddTagModal = () => {
    setReloadModalData(!reloadModalData);
    setAddTagModalState(true);
  };

  const closeAfterSaveAddTagModal = () => {
    getTagListWithBoxTagId(boxtagId);
    closeAddTagModal();
  };

  const closeAddTagModal = () => {
    setAddTagModalState(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatCurrency = (price) => {
    return price.toLocaleString("it-IT");
  };

  const searchTag = (value) => {
    const resultAll = prototypeProductList.filter((item) =>
      item.name.includes(value)
    );
    const resultOfTag = prototypeProductListOfTag.filter((item) =>
      item.name.includes(value)
    );
    setProductList([...resultAll]);
    setProductListOfTag([...resultOfTag]);
  };  

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ConfirmModal
        open={confirmModalState}
        handleClose={closeConfirmModal}
        accept={() => removeProductFromTag(editProductData._id)}
      ></ConfirmModal>
      <ConfirmModal
        open={confirmModalRemoveTagState}
        handleClose={() => setConfirmModalRemoveTagState(false)}
        accept={() => removeTagFromBoxTag()}
      ></ConfirmModal>
      <AddTagToBoxtagModal
        reloadModalData={reloadModalData}
        boxTagId={boxtagId}
        open={addTagModalState}
        closeModalAfterSave={closeAfterSaveAddTagModal}
        closeModal={closeAddTagModal}
      ></AddTagToBoxtagModal>
      <h5>Thông tin {boxTagName || "Box Tag"}</h5>
      <div className={classes.container}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
        >
          {tagList.length ? (
            tagList.map((ele, index) => (
              <Tab key={index} label={ele.name} {...a11yProps(index)} />
            ))
          ) : (
            <></>
          )}
          <Button
            color="primary"
            style={{ width: "100%" }}
            onClick={openAddTagModal}
          >
            {"> Thêm tag <"}
          </Button>
        </Tabs>
        <div className="row m-0 p-0" style={{ width: "100%" }}>
          <div className="row m-0 p-0">
            {tagList.length ? (
              tagList.map((ele, index) => (
                <TabPanel key={index} value={value} index={index}>
                  <h6>Sản phẩm của {ele.name}</h6>
                  <div className="row mb-2">
                    <div className="col-lg-6 col-md-6 pt-2 pb-2">
                      <TextField
                        id="input-with-icon-textfield"
                        placeholder="Tìm kiếm sản phẩm"
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
                    <div className="row col-lg-6 col-md-6">
                      <div className="col-7 right-wrapper">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={showAllProductState}
                              onChange={() =>
                                setShowAllProductState(!showAllProductState)
                              }
                              color="primary"
                            />
                          }
                          label="Thêm sản phẩm"
                        />
                      </div>
                      <div className="col-5">
                        <Button
                          style={{
                            color: "white",
                          }}
                          color="secondary"
                          size="medium"
                          variant="contained"
                          onClick={openConfirmRemoveTagModal}
                          startIcon={<IoTrashBin></IoTrashBin>}
                        >
                          Gỡ Tag
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 p-0">
                    {showAllProductState ? (
                      productList.length ? (
                        productList.filter((ele) => !ele.isInTag).map((ele, index) => (
                          <div className="col-3 mb-4 mt-3" key={index}>
                            <Card className={classes.card}>
                              <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image={
                                    ele.image.length
                                      ? ele.image[0].url
                                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPR5xrvNUYG0rKRBmoNziQh8DNWNquSiXrQ&usqp=CAU"
                                  }
                                  title="Contemplative Reptile"
                                />
                                <CardContent>
                                  <div style={{ height: "60px" }}>
                                    <div className="two-line-text">
                                      {ele.name}
                                    </div>
                                  </div>
                                  <div className="text-danger one-line-text font-weight-bold">
                                    {formatCurrency(ele.parameters[0].price)}đ
                                  </div>
                                </CardContent>
                              </CardActionArea>
                              <CardActions disableSpacing>
                                {ele.isInTag ? (
                                  <Button
                                    size="small"
                                    color="secondary"
                                    style={{ marginLeft: "auto" }}
                                    onClick={() => openConfirmDeleteModal(ele)}
                                  >
                                    Gỡ khỏi tag
                                  </Button>
                                ) : (
                                  <Button
                                    size="small"
                                    color="primary"
                                    style={{ marginLeft: "auto" }}
                                    onClick={() => addProductIntoTag(ele._id)}
                                  >
                                    Thêm vào tag
                                  </Button>
                                )}
                              </CardActions>
                            </Card>
                          </div>
                        ))
                      ) : (
                        <div className="empty-data-text">Chưa có sản phẩm</div>
                      )
                    ) : productListOfTag.length ? (
                      productListOfTag.map((ele, index) => (
                        <div className="col-3 mb-4 mt-3" key={index}>
                          <Card className={classes.card}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={
                                  ele.image.length
                                    ? ele.image[0].url
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPR5xrvNUYG0rKRBmoNziQh8DNWNquSiXrQ&usqp=CAU"
                                }
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <div style={{ height: "60px" }}>
                                  <div className="two-line-text">
                                    {ele.name}
                                  </div>
                                  <div className="text-danger one-line-text font-weight-bold">
                                    {formatCurrency(ele.parameters[0].price)}đ
                                  </div>
                                </div>
                              </CardContent>
                            </CardActionArea>
                            <CardActions disableSpacing>
                              <Button
                                size="small"
                                color="secondary"
                                style={{ marginLeft: "auto" }}
                                onClick={() => openConfirmDeleteModal(ele)}
                              >
                                Gỡ khỏi tag
                              </Button>
                            </CardActions>
                          </Card>
                        </div>
                      ))
                    ) : (
                      <div className="empty-data-text">Chưa có sản phẩm</div>
                    )}
                  </div>
                </TabPanel>
              ))
            ) : (
              <div className="empty-data-text">Chưa có dữ liệu</div>
            )}
          </div>
        </div>
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
  container: {
    flexGrow: 1,
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: "30px",
    paddingBottom: "60px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  card: {
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 140,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
