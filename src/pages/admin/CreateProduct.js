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
import CardMedia from "@material-ui/core/CardMedia";
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from "react-icons/ai";
import FormHelperText from "@material-ui/core/FormHelperText";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { IoTrashBin } from "react-icons/io5";
import alert from "../../utils/Alert";
import adminApis from "../../apis/AdminApis";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "true",
  },
  resize: {
    fontSize: "1rem",
  },
  buttonLabel: {
    fontSize: "1rem",
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
    fontSize: "1rem",
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
    borderRadius: 10,
    width: "100%",
  },
  paperContainer: {
    padding: theme.spacing(5, 5, 5),
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
    color: "white",
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

export default function Product() {
  const classes = useStyles();
  const fileRef = useRef();
  const history = useHistory();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState(["null", "null", "null"]);
  const [categoryList1, setCategoryList1] = useState([]);
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
    { key: "", value: "", price: 1000 },
  ]);
  const [submitStateBtn, setSubmitStateBtn] = useState(false);
  const [existImageList, setExistImageList] = useState([]);

  useEffect(() => {
    getCategoryLevel1();
  }, []);

  useEffect(() => {
    resetCategoryValue(1);
    if (category[0] !== "null") {
      getCategoryLevel2WithParent(category[0]);
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

  const handleChangeMedia = (e) => {
    const files = [...e.target.files];
    const fileArr = [];
    const fileErrorArr = [];

    if (!files.length) return;

    if (file.length === 5) {
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
        msg: "Dung lượng ảnh tối đa chỉ được 10MB",
      });
    }
  };

  const fileReader = async (data) => {
    try {
      await data.forEach((item) => {
        const reader = new FileReader();
        reader.readAsDataURL(item);
        reader.onloadend = () => {
          setPreviewFile([...previewFile, reader.result]);
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
    temp.push({ key: "", value: "", price: 1000 });
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
      if (res.status === 200) {
        setCategoryList1(res.data);
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

  const formatProducts = (data) => {
    let parameter = [];
    data.forEach((ele) => {
      let entity = {
        bar_code: ele.key,
        name: ele.value,
        price: ele.price,
      };
      parameter.push(entity);
    });
    return parameter;
  };

  const formatForm = (data) => {
    const formdata = new FormData();
    const parameter = formatProducts(products);

    formdata.append("name", name);
    formdata.append("description", desc);
    specify.map((ele, index) => {
      formdata.append(`details[${ele.key}]`, ele.value);
    });
    parameter.map((value, index) => {
      formdata.append(`parameter[${index}].bar_code`, value.bar_code);
      formdata.append(`parameter[${index}].name`, value.name);
      formdata.append(`parameter[${index}].price`, value.price);
    });
    category.map((value, index) => {
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
              <FormLabel>
                <span className="addprod-title">Thông tin sản phẩm</span>
              </FormLabel>
              <div className="row m-0 p-0 mt-3">
                <FormGroup className="col-4">
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
                <FormGroup className="col-4">
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
                <FormGroup className="col-4">
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
              </div>
              <FormGroup className={classes.FormGroup}>
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

              <FormGroup>
                <FormLabel className="mt-5 mb-3">
                  <span className="addprod-title">Phân loại sản phẩm</span>
                </FormLabel>
                {products.map((ele, index) => (
                  <div className="row m-0 p-0 mt-2" key={index}>
                    <div className="col-3">
                      <FormGroup>
                        <TextField
                          InputLabelProps={{
                            classes: {
                              root: classes.resize,
                            },
                          }}
                          variant="filled"
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
                    <div className="col-4">
                      <FormGroup>
                        <TextField
                          InputLabelProps={{
                            classes: {
                              root: classes.resize,
                            },
                          }}
                          variant="filled"
                          value={ele.value}
                          onChange={(e) =>
                            onChangeProducts("value", e.target.value, index)
                          }
                          InputProps={{
                            classes: {
                              input: classes.resize,
                            },
                          }}
                          required
                          label="Tên phân loại"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-4">
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
                          variant="filled"
                          currencySymbol="vnd"
                          minimumValue="1000"
                          outputFormat="string"
                          decimalCharacter="."
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
                    <div className="col-1">
                      <IconButton
                        color="secondary"
                        onClick={() => deleteProductsRow(index)}
                      >
                        <IoTrashBin></IoTrashBin>
                      </IconButton>
                    </div>
                  </div>
                ))}
                <div className="mt-3 text-center">
                  <Button
                    type="button"
                    variant="contained"
                    onClick={addProductsRow}
                    style={{
                      fontSize: "0.9rem",
                      backgroundColor: "#2dbf64",
                      color: "white",
                    }}
                  >
                    Thêm phân loại sản phẩm
                  </Button>
                </div>
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
                          InputLabelProps={{
                            classes: {
                              root: classes.resize,
                            },
                          }}
                          variant="filled"
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
                          variant="filled"
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
                    <div className="col-1">
                      <IconButton
                        color="secondary"
                        onClick={() => deleteSpecifyRow(index)}
                      >
                        <IoTrashBin></IoTrashBin>
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
                      fontSize: "0.9rem",
                      backgroundColor: "#2dbf64",
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
                    fontSize="1.1rem"
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
                    data={desc}
                    onChange={(event, editor) => {
                      setDesc(editor.getData());
                    }}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <FormLabel className="mt-3 mb-3">
                  <span className="addprod-title">Thêm hình ảnh</span>
                </FormLabel>
                <FormGroup className="mt-1">
                  <input
                    type="file"
                    hidden
                    onChange={handleChangeMedia}
                    alt=""
                    accept="image/png, image/jpeg"
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
                              <img src={item} alt={item.title} />
                              <ImageListItemBar
                                title={item.title}
                                classes={{
                                  root: classes.titleBar,
                                  title: classes.title,
                                }}
                                actionIcon={
                                  <IconButton
                                    onClick={() => handleRemoveMedia(index)}
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

              <div className="mt-3 row modal-action">
                <Button
                  disabled={submitStateBtn}
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Lưu sản phẩm
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
