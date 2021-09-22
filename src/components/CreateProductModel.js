import React, { useState, useEffect } from "react";



import { LOGO_COLOR, ICON_COLOR } from "../constants/index";
import { TextField, Button, FormGroup, IconButton, FormLabel } from '@material-ui/core'
// import { PhotoLibrary } from '@material-ui/icons';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import {AiOutlineCloseCircle, AiOutlineCloudUpload} from 'react-icons/ai'
import AdminApi from '../apis/AdminApis'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import alert from '../utils/Alert';
import FormHelperText from '@material-ui/core/FormHelperText';

const CreateProductModal = (props) => {
  const classes = useStyles();
  const [editName, setEditName] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (props.modalEditFilter) {
      setEditName(props.modalEditFilter.name);
      setChecked(props.modalEditFilter.active);
    }
  }, []);

  const handleSwitch = () => {
    setChecked(!checked);
  };

  const resetModal = () => {
    setEditName();
    setChecked(false);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      let formData = {
        name: editName,
        parentId: "",
        active: checked,
      };
      let res = null;
      if (props.modalEditFilter) {
        res = await AdminApi.updateCategory(
          props.modalEditFilter._id,
          formData
        );
      } else {
        res = await AdminApi.createCategory(formData);
      }
      if (res.status === 200) {
        alert({
          icon: "success",
          title: res.message,
          msg: "Cập nhật thành công",
        });
      }
    } catch (e) {
      console.log(e);
    }
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
            <h5 style={{ color: ICON_COLOR }}>{props.title}</h5>
            <form onSubmit={onSubmit}>                            
                                <FormGroup className={classes.FormGroup}>
                                    <TextField                                        
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.resize
                                            }
                                        }}
                                        // value={name}
                                        // onChange={(e) => setName(e.target.value)}                                        
                                        InputProps={{
                                            classes: {
                                              input: classes.resize,
                                            },
                                        }}
                                        required
                                        label="Tên sản phẩm"/>
                                </FormGroup>
                                <FormGroup className={classes.FormGroup}>
                                    <TextField                                        
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.resize
                                            }
                                        }}
                                        // value={price}
                                        // onWheel={(e) => e.target.blur()}
                                        // onChange={(e) => { setPrice(e.target.value)                                                                                    
                                        // }}
                                        InputProps={{
                                            classes: {
                                                input: classes.resize,
                                            },
                                            inputProps: { 
                                                min: 1000,                                                
                                            }
                                        }}
                                        required                                        
                                        type='number'
                                        label="Giá tiền" />
                                        {/* <FormHelperText id="component-error-text"><h6>Giá tiền không được là giá trị âm (Đơn vị vnđ)</h6></FormHelperText> */}
                                </FormGroup>                               
                                {/* <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label"><span style={{ fontSize: '1.5rem' }}>Danh mục</span></InputLabel>
                                     <Select
                                    className={classes.selectTemplate}
                                    labelId="demo-simple-select-label"
                                    value={category}
                                    onChange={handleChangeCategory}
                                    required
                                    >
                                        {
                                            categoryList.map((item,index) => (
                                                <MenuItem key={index} value={item._id}>{item.name}</MenuItem>
                                        ))
                                        }                                       
                                    </Select> 
                                </FormControl>           */}
                                {/* <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label"><span style={{ fontSize: '1.5rem' }}>Trạng thái</span></InputLabel>
                                    <Select
                                    className={classes.selectTemplate}
                                    labelId="demo-simple-select-label"                            
                                    // value={status}
                                    // onChange={handleChangeStatus}
                                    required                 
                                    >
                                        <MenuItem value='N/A'><em>N/A</em></MenuItem>
                                        <MenuItem value='Hot'>Hot</MenuItem>
                                        <MenuItem value='Sale'>Sale</MenuItem>
                                        <MenuItem value='Phổ biến'>Phổ biến</MenuItem>                    
                                    </Select>
                                </FormControl> */}
                                <FormGroup>
                                    <TextField                                        
                                        InputLabelProps={{
                                            classes: {
                                                root: classes.resize
                                            }
                                        }}
                                        // disabled={(status === 'Sale')?false:true}                                        
                                        // value={saletag}
                                        // onChange={(e) => {                                            
                                        //     setSaleTag(e.target.value)                                                                    
                                        // }}
                                        onWheel={(e) => e.target.blur()}
                                        InputProps={{
                                            classes: {
                                                input: classes.resize,
                                            },
                                            inputProps: { 
                                                min: 1,
                                                max: 100,                                                
                                            }
                                        }}
                                        type="number"                                                                            
                                        required                                        
                                        label="Phần trăm Sale (Chỉ dành cho Sale)" />
                                        {/* <FormHelperText id="component-error-text"><h6>Phần trăm Sale không được chêch lệch 0-100%</h6></FormHelperText> */}
                                </FormGroup>
                                {/* <FormGroup className='mt-3 mb-3'>
                                    <FormLabel><span style={{ fontSize: '1.5rem' }}>Mô tả sản phẩm</span></FormLabel>
                                    <div className='ckeditor'>
                                        <CKEditor                                                        
                                            editor={ ClassicEditor }
                                            fontSize={16}
                                            onReady={ editor => {                                
                                                editor.editing.view.change(writer => {
                                                    writer.setStyle(
                                                    "height",
                                                    "250px",                                                                                  
                                                    editor.editing.view.document.getRoot()
                                                    );
                                                });
                                            } }                                  
                                            config={{                                                  
                                                toolbar: ['heading','|','bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList', 'insertTable',
                                                'tableColumn', 'tableRow', 'mergeTableCells', '|', 'undo', 'redo'],                                                
                                            }}                                                                   
                                            // data={desc}
                                            // onChange={ ( event, editor ) => {                                                                   
                                            //     setDesc(editor.getData())
                                            // } }                                       
                                        />
                                    </div>                                    
                                </FormGroup>                              */}
                                {/* <FormGroup>
                                    <FormGroup className='mt-1'>
                                        <input                            
                                            type='file'
                                            hidden                                            
                                            // onChange={handleChangeMedia}
                                            alt=""
                                            accept="image/png, image/jpeg"
                                            // ref={fileRef}
                                        />                                                                             
                                         <div className='modal-image-frame'>
                                            {
                                                (file.length)?(
                                                    <div className={classes.imageWrapper}>
                                                        <ImageList className={classes.imageList} cols={3} rowHeight={140}>
                                                            {previewFile.map((item, index) => (
                                                            <ImageListItem key={index}>
                                                                <img src={item} alt='' />
                                                                <ImageListItemBar
                                                                    classes={{
                                                                        root: classes.titleBar,                                                        
                                                                    }}
                                                                    actionIcon={
                                                                        <IconButton onClick={() => handleRemoveMedia(index)}>
                                                                            <AiOutlineCloseCircle className={classes.title} />
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                            ))}
                                                        </ImageList>
                                                    </div>
                                                ):(
                                                    <div className='upload-template'>
                                                        <AiOutlineCloudUpload size={80} color='lightgray'></AiOutlineCloudUpload>
                                                        <div>
                                                            Thêm hình ảnh
                                                        </div>
                                                    </div>
                                                )
                                            }                                            
                                            <div>
                                                <Button                                    
                                                    onClick={() => fileRef.current.click()} 
                                                    style={{fontSize: '1.2rem'}}                                                                                            
                                                    type='button'                                         
                                                    color="primary"                                                    
                                                    >
                                                    Add <span><PhotoLibrary></PhotoLibrary></span>
                                                </Button> 
                                            </div>                                                                       
                                        </div> 
                                        <FormHelperText id="component-error-text"><h5>Chỉ tối đa có thể up được 3 ảnh</h5></FormHelperText>                                                                           
                                    </FormGroup>                                    
                                </FormGroup>                                */}
                            
                                <div className='mt-3 row modal-action'>
                                    <div className='col-6'>
                                        {/* <Button type='button' onClick={props.handleCloseModal} variant="contained" color="secondary" style={{fontSize: '1.2rem'}}>
                                            Thoát
                                        </Button> */}
                                    </div>
                                    <div className='col-6'>
                                        <Button  type='submit' variant="contained" color="primary"  style={{fontSize: '15px', marginLeft :'-51px'}}>
                                            Lưu
                                        </Button>
                                    </div>                                                                      
                                </div>
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

export default CreateProductModal;
