import React, { useState, useEffect } from "react";
import { TextField, Button, FormGroup, makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AdminApi from "../apis/AdminApis";
import alert from "../utils/Alert";
import { LOGO_COLOR, ICON_COLOR } from "../constants/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const CreateTagModal = (props) => {
  const classes = useStyles();
  const [editName, setEditName] = useState();
  const [cateList, setCateList] = useState([]);
  const [cate, setCate] = useState();
  const [submitStateBtn, setSubmitStateBtn] = useState(false);

  useEffect(() => {
    getCateList();
  }, []);

  useEffect(() => {
    if (props.tagEditFilter) {
      setEditName(props.tagEditFilter.name);
      setCate(props.tagEditFilter._id);
    }
  }, [props.tagEditFilter]);

  const resetModal = () => {
    setEditName();
    setCate();
  };

  const convertFirstCharUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getCateList = async () => {
    try {
      const res = await AdminApi.getAllCategory();
      if (res.status === 200) {
        setCateList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!cate) return;

      let formData = {};
      let res = null;
      setSubmitStateBtn(true);
      if (props.tagEditFilter) {
        formData = {
          name: convertFirstCharUppercase(editName),
        };
        res = await AdminApi.updateTag(formData);
      } else {
        formData = {
          name: convertFirstCharUppercase(editName),
          category: cate,
        };
        console.log(formData);
        res = await AdminApi.createTag(formData);
      }

      if (res.status === 200) {
        alert({
          icon: "success",
          title: res.message,
          msg: "Cập nhật thành công",
        });
        props.closeModalAfterSave();
      }
    } catch (e) {
      console.log(e);
    }
    setSubmitStateBtn(false);
    closeModalAfterSave();
  };

  const closeModalAfterSave = () => {
    resetModal();
    props.closeModalAfterSave();
  };

  const closeModal = () => {
    resetModal();
    props.closeModal();
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
            <h5 style={{ color: ICON_COLOR }}>
              {props.tagEditFilter ? "Cập nhật tag" : "Tạo tag"}
            </h5>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <TextField
                  InputProps={{
                    classes: {
                      input: classes.labelRoot,
                    },
                  }}
                  label="Tên tag"
                  value={editName}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                    },
                  }}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <Autocomplete
                  id="combo-box-demo"
                  options={cateList}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, newValue) => {
                    setCate(newValue._id);
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
                    "Lưu"
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

export default CreateTagModal;
