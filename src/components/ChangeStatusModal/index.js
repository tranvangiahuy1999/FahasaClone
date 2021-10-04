import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField, FormGroup, FormHelperText } from '@material-ui/core'

const ChangePasswordModal = (props) => {
    const classes = useStyles();    
    const [status, setStatus] = useState()
    const [description, setDescription] = useState()
    const [warning, setWarning] = useState(false)

    const closeModal = () => {
        setStatus()
        setDescription()
        setWarning(false)
        props.handleClose()
    }

    const onSubmit = () => {
       
        props.onSubmit(status,description)
    }

    return(
        <Modal
            open={props.open}
            onClose={closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            closeAfterTransition
            className={classes.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <h4>Đổi Trạng Thái</h4>
                        <form>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nhập Tình Trạng</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Tình Trạng"
          onChange={(e) => setStatus(e.target.value)}     
        >
          <MenuItem value={"Đang chờ duyệt"}>Chờ Duyệt</MenuItem>
          <MenuItem value={"Đã duyệt"}>Đã Duyệt</MenuItem>
          <MenuItem value={"Đang vận chuyển"}>Vận Chuyển</MenuItem>
          <MenuItem value={"Đơn bị hủy"}>Hủy</MenuItem>
          <MenuItem value={"Đã vận chuyển"}>Đã Vận Chuyển</MenuItem>
          <MenuItem value={"Hoàn trả"}>Hoàn Trả</MenuItem>
        </Select>
      </FormControl>
    </Box>
                      
                            <FormGroup className={classes.FormGroup}>
                                <TextField                                        
                                    // InputLabelProps={{
                                    //     classes: {
                                    //         root: classes.resize
                                    //     }
                                    // }}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                                            
                                    InputProps={{
                                        classes: {
                                          input: classes.resize,
                                        },
                                    }}
                                    required
                                    label="Nhập Miêu Tả"/>
                                   
                            </FormGroup>
                            <div className='row mt-5'>
                            <div className='col-6 text-center'>
                                <Button variant="contained" type='button' color="secondary" onClick={closeModal} style={{fontSize: '1.2rem'}}>
                                    Trở lại
                                </Button>
                            </div>
                            <div className='col-6 text-center'>
                                <Button variant="contained" type='button' onClick={onSubmit} color="primary" style={{fontSize: '1.2rem'}}>
                                    Đồng ý
                                </Button>
                            </div>
                        </div>
                        </form>                        
                    </div>                 
                </Fade>            
        </Modal>
    )
}

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',      
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,      
      borderRadius: 10,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    resize: {
        fontSize: '1.5rem',
    },
}));

export default ChangePasswordModal