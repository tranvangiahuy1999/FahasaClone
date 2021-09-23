import React, { useState, useRef, forwardRef, useEffect } from "react";
import {
  TextField,
  Button,
  FormGroup,
  IconButton,
  FormLabel,
} from "@material-ui/core";
import { IoSearch } from "react-icons/io5";
import InputAdornment from "@material-ui/core/InputAdornment";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from "react-icons/ai";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import alert from "../../utils/Alert";
import FormHelperText from "@material-ui/core/FormHelperText";

import CreateProduct from "../admin/CreateProduct"


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "true",
  },
  resize: {
    fontSize: "1.5rem",
  },
  buttonLabel: {
    fontSize: "1.2rem",
  },
  formControl: {
    margin: "1%",
    width: "48%",
  },
  FormGroup: {
    marginTop: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectTemplate: {
    padding: 4,
    fontSize: "1.4rem",
  },
  switchControl: {
    marginTop: 6,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    height: 600,
    width: 800,
    minWidth: 350,
    overflowY: "scroll",
  },
  paperContainer: {
    padding: theme.spacing(5, 5, 5),
  },
  imageWrapper: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  title: {
    color: "red",
    fontSize: 20,
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

export default function Product() {
  const classes = useStyles();
  const fileRef = useRef();
  const [previewFile, setPreviewFile] = useState([]);
  const [file, setFile] = useState([]);
  const [existImageList, setExistImageList] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

 


  return (
    <div className={classes.root}>
      
      <div className="row mb-2">
        <div className="col-lg-6 col-md-6">
          <h5>Thêm sản phẩm</h5>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <div className="col-lg-6 p-2">
              <TextField
                id="input-with-icon-textfield"
                placeholder="Tìm kiếm sản phẩm"
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
           
          </div>
        </div>
      </div>
      <div className="product-modal">
      <div className={classes.paper}>
            <div className={classes.paperContainer}>
              
              <form >
                <FormGroup className={classes.FormGroup}>
                  <TextField
                    InputLabelProps={{
                      classes: {
                        root: classes.resize,
                      },
                    }}
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    required
                    label="Tên sản phẩm"
                  />
                </FormGroup>

                <FormGroup className={classes.FormGroup}>
                  <TextField
                    InputLabelProps={{
                      classes: {
                        root: classes.resize,
                      },
                    }}
                    // value={price}
                    onWheel={(e) => e.target.blur()}
                    // onChange={(e) => {
                    //   setPrice(e.target.value);
                    // }}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                      inputProps: {
                        min: 1000,
                      },
                    }}
                    required
                    type="number"
                    label="Giá tiền"
                  />
             
                </FormGroup>

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    <span style={{ fontSize: "1.5rem" }}>Danh mục</span>
                  </InputLabel>
                  <Select
                    className={classes.selectTemplate}
                    labelId="demo-simple-select-label"
                    // value={category}
                    // onChange={handleChangeCategory}
                    required
                  >
                      <MenuItem >
                        1
                      </MenuItem>
                    {/* {categoryList.map((item, index) => (
                      <MenuItem key={index} value={item._id}>
                        {item.name}
                      </MenuItem>
                    ))} */}
                  </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    <span style={{ fontSize: "1.5rem" }}>Trạng thái</span>
                  </InputLabel>
                  <Select
                    className={classes.selectTemplate}
                    labelId="demo-simple-select-label"
                    // value={status}
                    // onChange={handleChangeStatus}
                    required
                  >
                    <MenuItem value="N/A">
                      <em>N/A</em>
                    </MenuItem>
                    <MenuItem value="Hot">Hot</MenuItem>
                    <MenuItem value="Sale">Sale</MenuItem>
                    <MenuItem value="Phổ biến">Phổ biến</MenuItem>
                  </Select>
                </FormControl>

                <FormGroup>
                  <TextField
                    InputLabelProps={{
                      classes: {
                        root: classes.resize,
                      },
                    }}
                    // disabled={status === "Sale" ? false : true}
                    // value={saletag}
                    // onChange={(e) => {
                    //   setSaleTag(e.target.value);
                    // }}
                    onWheel={(e) => e.target.blur()}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                      inputProps: {
                        min: 1,
                        max: 100,
                      },
                    }}
                    type="number"
                    required
                    label="Phần trăm Sale (Chỉ dành cho Sale)"
                  />

                  {/* <FormHelperText id="component-error-text">
                    <h6>Phần trăm Sale không được chêch lệch 0-100%</h6>
                  </FormHelperText> */}
                </FormGroup>

                <FormGroup className="mt-3 mb-3">
                  <FormLabel>
                    <span style={{ fontSize: "1.5rem" }}>
                      Thông số kỹ thuật
                    </span>
                  </FormLabel>
                  {/* {specify.map((ele, index) => (
                    <div className="row m-0 p-0" key={index}>
                      <div className="col-6">
                        <FormGroup>
                          <TextField
                            InputLabelProps={{
                              classes: {
                                root: classes.resize,
                              },
                            }}
                            value={ele.key}
                            onChange={(e) =>
                              onChangeSpecify("key", e.target.value, index)
                            }
                            InputProps={{
                              classes: {
                                input: classes.resize,
                              },
                            }}
                            required
                            label="Tên kỹ thuật"
                          />
                        </FormGroup>
                      </div>
                      <div className="col-6">
                        <FormGroup>
                          <TextField
                            InputLabelProps={{
                              classes: {
                                root: classes.resize,
                              },
                            }}
                            value={ele.value}
                            onChange={(e) =>
                              onChangeSpecify("value", e.target.value, index)
                            }
                            InputProps={{
                              classes: {
                                input: classes.resize,
                              },
                            }}
                            required
                            label="Thông số"
                          />
                        </FormGroup>
                      </div>
                    </div>
                  ))} */}

                  <Button
                    type="button"
                    variant="contained"
                    // onClick={addSpecifyRow}
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "10px",
                      backgroundColor: "#2dbf64",
                      color: "white",
                    }}
                  >
                    Thêm thông số kỹ thuật
                  </Button>
                </FormGroup>

                <FormGroup className="mt-3 mb-3">
                  <FormLabel>
                    <span style={{ fontSize: "1.5rem" }}>Mô tả sản phẩm</span>
                  </FormLabel>
                  <div className="ckeditor">
                    <CKEditor
                      editor={ClassicEditor}
                      fontSize={16}
                      onReady={(editor) => {
                        editor.editing.view.change((writer) => {
                          writer.setStyle(
                            "height",
                            "250px",
                            editor.editing.view.document.getRoot()
                          );
                        });
                      }}
                      config={{
                        toolbar: [
                          "heading",
                          "|",
                          "bold",
                          "italic",
                          "blockQuote",
                          "link",
                          "numberedList",
                          "bulletedList",
                          "insertTable",
                          "tableColumn",
                          "tableRow",
                          "mergeTableCells",
                          "|",
                          "undo",
                          "redo",
                        ],
                      }}
                    //   data={desc}
                    //   onChange={(event, editor) => {
                    //     setDesc(editor.getData());
                    //   }}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormGroup className="mt-1">
                    <input
                      type="file"
                      hidden
                    //   onChange={handleChangeMedia}
                      alt=""
                      accept="image/png, image/jpeg"
                      ref={fileRef}
                    />
                    <div className="modal-image-frame">
                      {file.length ? (
                        <div className={classes.imageWrapper}>
                          <ImageList
                            className={classes.imageList}
                            cols={3}
                            rowHeight={140}
                          >
                            {previewFile.map((item, index) => (
                              <ImageListItem key={index}>
                                <img src={item} alt="" />
                                <ImageListItemBar
                                  classes={{
                                    root: classes.titleBar,
                                  }}
                                  actionIcon={
                                    <IconButton
                                    //   onClick={() => handleRemoveMedia(index)}
                                    >
                                      <AiOutlineCloseCircle
                                        className={classes.title}
                                      />
                                    </IconButton>
                                  }
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                        </div>
                      ) : (
                        <div className="upload-template">
                          <AiOutlineCloudUpload
                            size={80}
                            color="lightgray"
                          ></AiOutlineCloudUpload>
                          <div>Thêm hình ảnh</div>
                        </div>
                      )}
                      <div>
                        <Button
                          onClick={() => fileRef.current.click()}
                          style={{ fontSize: "1.2rem" }}
                          type="button"
                          color="primary"
                        >
                          Add{" "}
                          {/* <span>
                            <PhotoLibrary></PhotoLibrary>
                          </span> */}
                        </Button>
                      </div>
                    </div>
                    <FormHelperText id="component-error-text">
                      <h5>Chỉ tối đa có thể up được 3 ảnh.</h5>
                      <h5 className="text-danger">
                        Sản phẩm hiện tại đã có {existImageList.length} ảnh!
                        {3 - existImageList.length === 0 ? (
                          <span> Không thể up thêm ảnh</span>
                        ) : (
                          <span>
                            {" "}
                            Chỉ có thể up thêm {3 - existImageList.length} ảnh.
                          </span>
                        )}
                      </h5>
                    </FormHelperText>
                  </FormGroup>
                </FormGroup>

                <div className="mt-3 row modal-action">
                 
                  <div className="col-6">
                    <Button
                    //   disabled={submitButtonState}
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ fontSize: "1.2rem" }}
                    >
                      Lưu
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
     </div>
     </div>
  );
}
