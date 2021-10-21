import React, { useState, useEffect } from "react";
import { TextField, Button, FormGroup, makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Autocomplete from "@material-ui/lab/Autocomplete";
import adminApis from "../apis/AdminApis";
import alert from "../utils/Alert";
import { LOGO_COLOR, ICON_COLOR } from "../constants/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddProductToTagModal = (props) => {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState();
  const [submitStateBtn, setSubmitStateBtn] = useState(false);

  useEffect(() => {
    getProductByCate();
  }, []);

  const resetModal = () => {
    setProduct();
  };

  const getProductByCate = async () => {
    try {
      const res = await adminApis.getFreeTag();
      if (res.status === 200) {
        setProductList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!product || !props.boxTagId) return;
      setSubmitStateBtn(true);
      const boxTagId = props.boxTagId;
      let formData = {
        idTag: product,
      };
      const res = await adminApis.addTagToBoxTag(boxTagId, formData);

      if (res.status === 200) {
        alert({
          icon: "success",
          title: "Đã thêm tag",
        });
        closeModalAfterSave();
      } else {
        alert({
          icon: "error",
          title: "Đã có lỗi xảy ra",
          msg: "Xin vui lòng thử lại",
        });
        closeModal();
      }
    } catch (e) {
      console.log(e);
    }
    setSubmitStateBtn(false);
  };

  const closeModalAfterSave = () => {
    props.closeModalAfterSave();
    resetModal();
  };

  const closeModal = () => {
    props.closeModal();
    resetModal();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <div className="category-modal">
            <h5 style={{ color: ICON_COLOR }}>Thêm tag</h5>
            <form onSubmit={onSubmit}>
              <FormGroup className="mt-2">
                <Autocomplete
                  id="combo-box-demo"
                  options={productList}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, newValue) => {
                    setProduct(newValue._id);
                  }}
                  size="small"
                  renderInput={(params) => (
                    <TextField {...params} label="Thuộc danh mục" />
                  )}
                  required
                />
              </FormGroup>
              <FormGroup className="mt-3">
                <Button
                  variant="contained"
                  size="small"
                  style={{ color: "white", backgroundColor: LOGO_COLOR }}
                  id="material-button-label"
                  type="submit"
                  disabled={submitStateBtn}
                >
                  {submitStateBtn ? (
                    <CircularProgress
                      size="1.6rem"
                      style={{ color: "white" }}
                    />
                  ) : (
                    "Thêm"
                  )}
                </Button>
              </FormGroup>
            </form>
          </div>
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
  },
  labelRoot: {
    fontSize: "1.1rem",
  },
}));

export default AddProductToTagModal;
