import React, { useState, useEffect } from "react";
import { TextField, Button, FormGroup, makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AdminApi from "../apis/AdminApis";
import alert from "../utils/Alert";
import { LOGO_COLOR, ICON_COLOR } from "../constants/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaCamera, FaTrashAlt } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";

const CreateBoxTagModal = (props) => {
  const classes = useStyles();
  const [editName, setEditName] = useState();
  const [file, setFile] = useState("");
  const [previewFile, setPreviewFile] = useState("");
  const [submitStateBtn, setSubmitStateBtn] = useState(false);
  const [deleteImage, setDeleteImage] = useState(false);

  useEffect(() => {
    if (props.boxtagEditFilter) {
      setEditName(props.boxtagEditFilter.name);
      setPreviewFile(props.boxtagEditFilter.image.url);
    }
  }, [props.boxtagEditFilter]);

  const resetModal = () => {
    setEditName();
    setFile("");
    setPreviewFile("");
    setDeleteImage(false);
  };

  const convertFirstCharUppercase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = null;
      setSubmitStateBtn(true);
      let formData = new FormData();
      formData.append("name", convertFirstCharUppercase(editName));
      formData.append("delete_image", deleteImage);
      formData.append("file", file);
      if (props.boxtagEditFilter) {
        res = await AdminApi.updateBoxTag(props.boxtagEditFilter._id, formData);
      } else {
        res = await AdminApi.createBoxTag(formData);
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

  const handleChangeMedia = (e) => {
    const file = e.target.files[0];
    let fileData = "";
    let fileError = "";

    if (!file) return;

    if (file.size > 1024 * 1024 * 5) {
      fileError = file.name;
    } else fileData = file;

    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onloadend = () => {
      setPreviewFile(reader.result);
    };
    setFile(fileData);
    setDeleteImage(true);

    if (fileError) {
      alert({
        icon: "error",
        title: "File ảnh quá lớn",
        msg: "Dung lượng ảnh tối đa chỉ được 5MB",
      });
    }
  };

  const deleteFile = () => {
    setFile("");
    setPreviewFile("");
    setDeleteImage(true);
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
              {props.boxtagEditFilter ? "Cập nhật Box Tag" : "Tạo Box Tag"}
            </h5>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <TextField
                  InputProps={{
                    classes: {
                      input: classes.labelRoot,
                    },
                  }}
                  label="Tên Box Tag"
                  value={editName}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                    },
                  }}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <div className="box-tag-image-template-wrapper">
                  <div>
                    {previewFile ? (
                      <div className="box-tag-image-wrapper text-center">
                        <img
                          className="box-tag-image"
                          alt=""
                          src={previewFile}
                        ></img>
                      </div>
                    ) : (
                      <div className="text-center pt-5">
                        <AiOutlineCloudUpload
                          size={90}
                          color="lightgray"
                        ></AiOutlineCloudUpload>
                        <div
                          style={{
                            color: "lightgray",
                            fontSize: "1rem",
                            fontWeight: "bold",
                          }}
                          className="text-center"
                        >
                          Thêm hình ảnh
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file-boxtag"
                    onChange={handleChangeMedia}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                    type="file"
                  />
                  <div className="text-center">
                    <label htmlFor="contained-button-file-boxtag">
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <FaCamera />
                      </IconButton>
                    </label>
                    <span>
                      <IconButton
                        color="secondary"
                        disabled={previewFile ? false : true}
                        onClick={deleteFile}
                        aria-label="upload picture"
                        component="span"
                      >
                        <FaTrashAlt />
                      </IconButton>
                    </span>
                  </div>
                </div>
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
  input: {
    display: "none",
  },
}));

export default CreateBoxTagModal;
