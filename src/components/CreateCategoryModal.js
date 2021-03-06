import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  FormGroup,
  Switch,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AdminApi from "../apis/AdminApis";
import alert from "../utils/Alert";
import { LOGO_COLOR, ICON_COLOR } from "../constants/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const CreateCategoryModal = (props) => {
  const classes = useStyles();
  const [editName, setEditName] = useState();
  const [checked, setChecked] = useState(false);
  const [submitStateBtn, setSubmitStateBtn] = useState(false);

  useEffect(() => {
    if (props.cateEditFilter) {
      setEditName(props.cateEditFilter.name);
      setChecked(props.cateEditFilter.active);
    }
  }, [props.cateEditFilter]);

  const handleSwitch = () => {
    setChecked(!checked);
  };

  const resetModal = () => {
    setEditName();
    setChecked(false);
  };

  const convertFirstCharUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitStateBtn(true);
      let formData = {};
      let res = null;
      if (props.cateEditFilter) {
        formData = {
          name: convertFirstCharUppercase(editName),
          active: checked,
        };
        res = await AdminApi.updateCategory(formData, props.cateEditFilter._id);
      } else {
        if (props.parentId) {
          formData = {
            name: convertFirstCharUppercase(editName),
            parentId: props.parentId,
            active: checked,
          };
        } else {
          formData = {
            name: convertFirstCharUppercase(editName),
            active: checked,
          };
        }
        res = await AdminApi.createCategory(formData);
      }

      if (res.status === 200) {
        alert({
          icon: "success",
          title: res.message,
          msg: "C???p nh???t th??nh c??ng",
        });
        closeModalAfterSave();
      } else {
        alert({
          icon: "error",
          title: "???? c?? l???i x???y ra",
          msg: "Xin vui l??ng th??? l???i",
        });
        closeModal();
      }
    } catch (e) {
      console.log(e);
    }
    setSubmitStateBtn(false);
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
              {props.cateEditFilter ? "C???p nh???t danh m???c" : "T???o danh m???c"}
            </h5>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <TextField
                  InputProps={{
                    classes: {
                      input: classes.labelRoot,
                    },
                  }}
                  label="T??n danh m???c"
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
              <FormGroup className="mt-3">
                <FormControlLabel
                  control={<Switch checked={checked} onChange={handleSwitch} />}
                  label={<span style={{ fontSize: "1rem" }}>Tr???ng th??i</span>}
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
                    "L??u"
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

export default CreateCategoryModal;
