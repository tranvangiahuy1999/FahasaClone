import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Button,
  FormGroup,
  IconButton,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from "react-icons/ai";
import FormHelperText from "@material-ui/core/FormHelperText";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { IoTrashBin } from "react-icons/io5";
import alert from "../../utils/Alert";
import adminApis from "../../apis/AdminApis";
import { LOGO_COLOR, ICON_COLOR } from "../../constants/index";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Product() {
  const classes = useStyles();
  const fileRef = useRef();
  const history = useHistory();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState(["null", "null", "null"]);
  const [categoryList1, setCategoryList1] = useState([
    { _id: "null", name: "Không có" },
  ]);
  const [categoryList2, setCategoryList2] = useState([
    { _id: "null", name: "Không có" },
  ]);
  const [categoryList3, setCategoryList3] = useState([
    { _id: "null", name: "Không có" },
  ]);
  const [specify, setSpecify] = useState([{ key: "", value: "" }]);
  const [previewFile, setPreviewFile] = useState([]);
  const [file, setFile] = useState([]);
  const [products, setProducts] = useState([
    {
      key: "",
      value: "",
      price: 1000,
      itemFile: "",
      itemPreviewFile: "",
    },
  ]);
  const [submitStateBtn, setSubmitStateBtn] = useState(false);

  useEffect(() => {
    getCategoryLevel1();
  }, []);

  useEffect(() => {
    resetCategoryValue(1);
    if (category[0] !== "null") {
      getCategoryLevel2WithParent(category[0]);
    } else {
      setCategoryList2([{ _id: "null", name: "Không có" }]);
    }
  }, [category[0]]);

  useEffect(() => {
    resetCategoryValue(2);
    if (category[1] !== "null") {
      getCategoryLevel3WithParent(category[1]);
    } else {
      setCategoryList3([{ _id: "null", name: "Không có" }]);
    }
  }, [category[1]]);

  const resetCategoryValue = (i) => {
    let temp = category;
    temp[i] = "null";
    setCategory([...temp]);
  };

  const handleChangeItemMedia = (event, index) => {
    if (event.target.files === null) {
      return;
    }
    let tempArray = products;
    tempArray.forEach(async (ele, i) => {
      if (i === index) {
        let result_base64 = await new Promise((resolve) => {
          let fileReader = new FileReader();
          fileReader.onload = (e) => resolve(fileReader.result);
          fileReader.readAsDataURL(event.target.files[0]);
        });
        tempArray[i].itemFile = event.target.files[0];
        tempArray[i].itemPreviewFile = result_base64;
        setProducts([...tempArray]);
      }
    });
  };

  const handleChangeMedia = (e) => {
    const files = [...e.target.files];
    const fileArr = [];
    const fileErrorArr = [];

    if (!files.length) return;

    if (file.length + files.length > 5) {
      alert({
        icon: "error",
        title: "Đã vượt quá số lượng ảnh",
        msg: "Tối đa chỉ có thể up 5 ảnh.",
      });
      return;
    }

    files.forEach((file) => {
      if (file.size > 1024 * 1024 * 5) {
        fileErrorArr.push(file.name);
      } else fileArr.push(file);
    });

    fileReader(fileArr);

    if (fileErrorArr.length) {
      alert({
        icon: "error",
        title: "File ảnh quá lớn",
        msg: "Dung lượng ảnh tối đa chỉ được 5MB",
      });
    }
  };

  const fileReader = async (data) => {
    try {
      await data.forEach((item) => {
        let temp = previewFile;
        const reader = new FileReader();
        reader.readAsDataURL(item);
        reader.onloadend = () => {
          temp.push(reader.result);
          setPreviewFile([...temp]);
        };
      });

      setFile(file.concat(data));
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveMedia = (index) => {
    setPreviewFile(previewFile.filter((_, i) => i !== index));
    setFile(file.filter((_, i) => i !== index));
  };

  const onChangeProducts = (param, value, index) => {
    let temp = products;
    if (param === "key") {
      temp[index].key = value;
    } else if (param === "value") {
      temp[index].value = value;
    } else {
      temp[index].price = value;
    }
    setProducts([...temp]);
  };

  const addProductsRow = () => {
    let temp = products;
    temp.unshift({
      key: "",
      value: "",
      price: 1000,
      itemFile: "",
      itemPreviewFile: "",
    });
    setProducts([...temp]);
  };

  const deleteProductsRow = (index) => {
    let temp = products;
    if (temp.length === 1) {
      alert({
        icon: "error",
        title: "Tối thiểu phải có 1 sản phẩm",
      });
      return;
    }
    temp.splice(index, 1);
    setProducts([...temp]);
  };

  const onChangeSpecify = (param, value, index) => {
    let temp = specify;
    if (param === "key") {
      temp[index].key = value;
    } else {
      temp[index].value = value;
    }
    setSpecify([...temp]);
  };

  const addSpecifyRow = () => {
    let temp = specify;
    temp.push({ key: "", value: "" });
    setSpecify([...temp]);
  };

  const deleteSpecifyRow = (index) => {
    let temp = specify;
    if (temp.length === 1) {
      alert({
        icon: "error",
        title: "Tối thiểu phải có 1 thông số",
      });
      return;
    }
    temp.splice(index, 1);
    setSpecify([...temp]);
  };

  const handleChangeCategory = (index, value) => {
    let temp = category;
    temp[index] = value;
    setCategory([...temp]);
  };

  const getCategoryLevel1 = async () => {
    try {
      const res = await adminApis.getCategory();
      let temp = [{ _id: "null", name: "Không có" }];
      if (res.status === 200) {
        setCategoryList1([...temp.concat(res.data)]);
      } else {
        setCategoryList2([...temp]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCategoryLevel2WithParent = async (id) => {
    try {
      const query = `?parentId=${id}`;
      const res = await adminApis.getCategoryByParent(query);
      let temp = [{ _id: "null", name: "Không có" }];
      if (res.status === 200) {
        setCategoryList2([...temp.concat(res.data)]);
      } else {
        setCategoryList2([...temp]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCategoryLevel3WithParent = async (id) => {
    try {
      const query = `?parentId=${id}`;
      const res = await adminApis.getCategoryByParent(query);
      let temp = [{ _id: "null", name: "Không có" }];
      if (res.status === 200) {
        setCategoryList3([...temp.concat(res.data)]);
      } else {
        setCategoryList2([...temp]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formatProducts = async (data) => {
    let parameter = [];
    for (let ele of data) {
      let entity = {};
      entity = {
        bar_code: ele.key,
        name: ele.value,
        price: ele.price,
        file: ele.itemFile,
      };
      parameter.push(entity);
    }
    return parameter;
  };

  const formatForm = async () => {
    const productsData = products;
    const parameter = await formatProducts(productsData);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", desc);
    specify.forEach((ele, index) => {
      formdata.append(`details[${ele.key}]`, ele.value);
    });
    parameter.forEach((value, index) => {
      formdata.append(`parameter[${index}].bar_code`, value.bar_code);
      formdata.append(`parameter[${index}].name`, value.name);
      formdata.append(`parameter[${index}].price`, value.price);
      formdata.append(`parameter[${index}].file`, value.file);
    });

    category.forEach((value, index) => {
      let temp = value;
      if (value === "null") {
        temp = "";
      }
      formdata.append(`cate${index + 1}`, temp);
    });

    file.forEach((item) => {
      formdata.append("file", item);
    });

    return formdata;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!category[0]) {
      alert({
        icon: "error",
        title: "Vui lòng chọn danh mục 1",
      });
      return;
    }
    setSubmitStateBtn(true);

    try {
      const formData = await formatForm();

      for (var value of formData.values()) {
        console.log(value);
      }

      const res = await adminApis.createProduct(formData);
      if (res.status === 200) {
        alert({
          icon: "success",
          title: "Tạo sản phẩm thành công",
        });
        history.push("/admin/product");
      }
    } catch (e) {
      console.log(e);
    }
    setSubmitStateBtn(false);
  };

  return (
    <div className={classes.root}>
      <div className="product-modal">
        <div className={classes.paper}>
          <div className={classes.paperContainer}>
            <form onSubmit={onSubmit}>
              <div className="row m-0 p-0">
                <div className="col-7">
                  <FormLabel>
                    <span className="addprod-title">Thông tin sản phẩm</span>
                  </FormLabel>
                  <FormGroup className="mb-4">
                    <TextField
                      InputLabelProps={{
                        classes: {
                          root: classes.resize,
                        },
                      }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      InputProps={{
                        classes: {
                          input: classes.resize,
                        },
                      }}
                      required
                      label="Tên sản phẩm"
                    />
                  </FormGroup>
                  <FormLabel>
                    <span className="addprod-title">Danh mục</span>
                  </FormLabel>

                  <FormGroup className="mt-2 mb-2">
                    <InputLabel id="demo-simple-select-label">
                      <span style={{ fontSize: "0.9rem" }}>Danh mục 1</span>
                    </InputLabel>
                    <Select
                      className={classes.selectTemplate}
                      labelId="demo-simple-select-label"
                      value={category[0]}
                      onChange={(e) => handleChangeCategory(0, e.target.value)}
                      required
                    >
                      {categoryList1.length ? (
                        categoryList1.map((item, index) => (
                          <MenuItem key={index} value={item._id}>
                            {item.name}
                          </MenuItem>
                        ))
                      ) : (
                        <></>
                      )}
                    </Select>
                  </FormGroup>
                  <FormGroup className="mt-2 mb-2">
                    <InputLabel id="demo-simple-select-label">
                      <span style={{ fontSize: "0.9rem" }}>Danh mục 2</span>
                    </InputLabel>
                    <Select
                      className={classes.selectTemplate}
                      labelId="demo-simple-select-label"
                      value={category[1]}
                      onChange={(e) => handleChangeCategory(1, e.target.value)}
                      required
                    >
                      {categoryList2.length ? (
                        categoryList2.map((item, index) => (
                          <MenuItem key={index} value={item._id}>
                            {item.name}
                          </MenuItem>
                        ))
                      ) : (
                        <></>
                      )}
                    </Select>
                  </FormGroup>
                  <FormGroup className="mt-2 mb-2">
                    <InputLabel id="demo-simple-select-label">
                      <span style={{ fontSize: "0.9rem" }}>Danh mục 3</span>
                    </InputLabel>
                    <Select
                      className={classes.selectTemplate}
                      labelId="demo-simple-select-label"
                      value={category[2]}
                      onChange={(e) => handleChangeCategory(2, e.target.value)}
                      required
                    >
                      {categoryList3.length ? (
                        categoryList3.map((item, index) => (
                          <MenuItem key={index} value={item._id}>
                            {item.name}
                          </MenuItem>
                        ))
                      ) : (
                        <></>
                      )}
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel className="mt-3 mb-3">
                      <span className="addprod-title">Thông số kỹ thuật</span>
                    </FormLabel>
                    {specify.map((ele, index) => (
                      <div className="row m-0 p-0 mt-2" key={index}>
                        <div className="col-5">
                          <FormGroup>
                            <TextField
                              variant="filled"
                              value={ele.key}
                              onChange={(e) =>
                                onChangeSpecify("key", e.target.value, index)
                              }
                              required
                              label="Tên thông số"
                            />
                          </FormGroup>
                        </div>
                        <div className="col-6">
                          <FormGroup>
                            <TextField
                              variant="filled"
                              value={ele.value}
                              onChange={(e) =>
                                onChangeSpecify("value", e.target.value, index)
                              }
                              required
                              label="Thông số"
                            />
                          </FormGroup>
                        </div>
                        <div className="col-1">
                          <IconButton
                            color="secondary"
                            onClick={() => deleteSpecifyRow(index)}
                          >
                            <IoTrashBin className="text-danger"></IoTrashBin>
                          </IconButton>
                        </div>
                      </div>
                    ))}
                    <div className="mt-3 text-center">
                      <Button
                        type="button"
                        variant="contained"
                        onClick={addSpecifyRow}
                        style={{
                          fontSize: "0.8rem",
                          backgroundColor: LOGO_COLOR,
                          color: "white",
                        }}
                      >
                        Thêm thông số kỹ thuật
                      </Button>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel className="mt-3 mb-3">
                      <span className="addprod-title">Mô tả sản phẩm</span>
                    </FormLabel>
                    <div className="ckeditor">
                      <CKEditor
                        editor={ClassicEditor}
                        fontSize="1rem"
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
                          ],
                        }}
                        data={desc}
                        onChange={(event, editor) => {
                          setDesc(editor.getData());
                        }}
                      />
                    </div>
                  </FormGroup>
                </div>
                <div className="col-5 parameter-column">
                  <FormGroup>
                    <FormLabel className="mb-1">
                      <span className="addprod-title">Phân loại sản phẩm</span>
                    </FormLabel>
                    <div className="mb-3 mt-3 text-center">
                      <Button
                        type="button"
                        variant="contained"
                        onClick={addProductsRow}
                        style={{
                          fontSize: "0.8rem",
                          backgroundColor: LOGO_COLOR,
                          color: "white",
                        }}
                      >
                        Thêm phân loại sản phẩm
                      </Button>
                    </div>
                    {products.map((ele, index) => (
                      <div className="row p-4 product-item-manage" key={index}>
                        <div className="col-3 text-center">
                          <div className="product-item-image-wrapper">
                            {ele.itemPreviewFile ? (
                              <img
                                className="product-item-image"
                                key={ele.itemPreviewFile}
                                alt=""
                                src={ele.itemPreviewFile}
                              ></img>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="mt-1 text-center">
                            <input
                              accept="image/*"
                              id={`contained-button-file-${index}`}
                              hidden
                              onClick={(event) => {
                                event.target.value = null;
                              }}
                              onChange={(e) => handleChangeItemMedia(e, index)}
                              type="file"
                            />
                            <label htmlFor={`contained-button-file-${index}`}>
                              <Button
                                variant="contained"
                                component="span"
                                style={{
                                  color: "white",
                                  backgroundColor: "#2dbf64",
                                  fontSize: "0.7rem",
                                  padding: "0.3rem",
                                }}
                              >
                                {!ele.itemPreviewFile ? "Thêm ảnh" : "Đổi ảnh"}
                              </Button>
                            </label>
                          </div>
                        </div>
                        <div className="col-8 row m-0 p-0">
                          <div className="col-12">
                            <FormGroup>
                              <TextField
                                InputLabelProps={{
                                  classes: {
                                    root: classes.resize,
                                  },
                                }}
                                value={ele.value}
                                onChange={(e) =>
                                  onChangeProducts(
                                    "value",
                                    e.target.value,
                                    index
                                  )
                                }
                                InputProps={{
                                  classes: {
                                    input: classes.resize,
                                  },
                                }}
                                label="Tên phân loại"
                              />
                            </FormGroup>
                          </div>
                          <div className="col-6 mt-2 mb-3">
                            <FormGroup>
                              <TextField
                                InputLabelProps={{
                                  classes: {
                                    root: classes.resize,
                                  },
                                }}
                                value={ele.key}
                                onChange={(e) =>
                                  onChangeProducts("key", e.target.value, index)
                                }
                                InputProps={{
                                  classes: {
                                    input: classes.resize,
                                  },
                                }}
                                required
                                label="Mã phân loại"
                              />
                            </FormGroup>
                          </div>
                          <div className="col-6 mt-2 mb-3">
                            <FormGroup>
                              <CurrencyTextField
                                InputLabelProps={{
                                  classes: {
                                    root: classes.resize,
                                  },
                                }}
                                InputProps={{
                                  classes: {
                                    input: classes.resize,
                                  },
                                }}
                                currencySymbol="vnd"
                                minimumValue="0"
                                decimalPlaces="0"
                                outputFormat="string"
                                digitGroupSeparator=","
                                value={ele.price}
                                onChange={(event, value) =>
                                  onChangeProducts("price", value, index)
                                }
                                required
                                label="Giá tiền"
                              />
                            </FormGroup>
                          </div>
                        </div>
                        <div className="col-1 pt-5">
                          <IconButton
                            color="secondary"
                            onClick={() => deleteProductsRow(index)}
                          >
                            <IoTrashBin className="text-danger"></IoTrashBin>
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  </FormGroup>
                </div>
              </div>
              <FormGroup className="p-2">
                <FormLabel className="mt-2 mb-2">
                  <span className="addprod-title">Thêm hình ảnh</span>
                </FormLabel>
                <FormGroup className="mt-1">
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={handleChangeMedia}
                    alt=""
                    accept="image/*"
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                    ref={fileRef}
                  />
                  <div className="modal-image-frame">
                    {file.length ? (
                      <div className={classes.imageWrapper}>
                        <ImageList
                          className={classes.imageList}
                          cols={5}
                          rowHeight={140}
                        >
                          {previewFile.map((item, index) => (
                            <ImageListItem key={item.img}>
                              <img src={item} alt={item.name} />
                              <ImageListItemBar
                                title={item.title}
                                classes={{
                                  root: classes.titleBar,
                                  title: classes.title,
                                }}
                                actionIcon={
                                  <Button
                                    onClick={() => handleRemoveMedia(index)}
                                    style={{
                                      fontSize: "0.6rem",
                                      fontWeight: "bold",
                                    }}
                                    variant="contained"
                                    type="button"
                                    color="secondary"
                                  >
                                    Xóa
                                  </Button>
                                }
                              />
                            </ImageListItem>
                          ))}
                        </ImageList>
                      </div>
                    ) : (
                      <div className="upload-template text-center">
                        <AiOutlineCloudUpload
                          size={60}
                          color="lightgray"
                        ></AiOutlineCloudUpload>
                        <div className="text-center">Thêm hình ảnh</div>
                      </div>
                    )}
                    <div className="text-center">
                      <Button
                        onClick={() => fileRef.current.click()}
                        style={{ fontSize: "0.9rem" }}
                        type="button"
                        color="primary"
                      >
                        Nhấn để thêm
                      </Button>
                    </div>
                  </div>
                  <FormHelperText id="component-error-text" className="mt-2">
                    <h6>Chỉ tối đa có thể up được 5 ảnh.</h6>
                  </FormHelperText>
                </FormGroup>
              </FormGroup>

              <div className="mt-2 row modal-action p-3">
                <Button
                  disabled={submitStateBtn}
                  type="submit"
                  variant="contained"
                  style={{
                    fontSize: "0.9rem",
                    backgroundColor: ICON_COLOR,
                    color: "white",
                  }}
                >
                  {submitStateBtn ? (
                    <CircularProgress
                      size="1.6rem"
                      style={{ color: "white" }}
                    />
                  ) : (
                    "Lưu sản phẩm"
                  )}
                </Button>
              </div>
            </form>
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
  },
  resize: {
    fontSize: "1rem",
  },
  selectTemplate: {
    padding: 4,
    fontSize: "0.9rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    width: "100%",
  },
  paperContainer: {
    padding: theme.spacing(4, 2, 2),
  },
  imageWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 900,
    height: 160,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 80%)",
  },
  title: {
    color: "red",
    fontSize: "1rem",
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
