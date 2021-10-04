import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";
import { AppBar, useTheme, Tabs, Tab, IconButton } from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";
import { IoSearch } from "react-icons/io5";
import ReceiptProccess from "../../components/ReceiptProccess";
import ReceiptCancel from "../../components/ReceiptCancel";
import AdminApi from "../../apis/AdminApis";
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "true",
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

export default function Receipt() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [in_proccess,setIn_Proccess]=useState(true);
  const [receiptProccess,setReceiptProccess]=useState([]);
  const [receiptCancel,setReceiptCancel]=useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getReceiptData();
    getReceiptCancel();
  }, []);
  const getReceiptData = async () => {
    try {
  
      const res = await AdminApi.getListReceipt(1,true);
      if (res.status === 200) {
        console.log(res.data)
        setReceiptProccess(res.data.receipts)
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getReceiptCancel = async () => {
    try {
  
      const res = await AdminApi.getListReceipt(1,false);
      if (res.status === 200) {
        console.log(res.data)
        setReceiptCancel(res.data.receipts)
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenAddModal = () => {
    setOpen(true);
  };

  const handleCloseAddModal = () => {
    setOpen(false);
  };

  const closeAfterSave = () => {
    getReceiptData();
    handleCloseAddModal();
  };
  console.log(receiptProccess);
  return (
    <div className={classes.root}>
      <h5>Danh sách đơn hàng</h5>
      <div className="mb-2">
        <TextField
          id="input-with-icon-textfield"
          placeholder="Tìm kiếm đơn hàng"
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

      <div style={{marginTop:'3%'}}>
      <AppBar position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor="primary"
          centered
        >
          <Tab label={<h4>Đơn Đang Xử Lí</h4>} {...a11yProps(0)} />
          <Tab label={<h4>Đơn Hủy</h4>}{...a11yProps(1)}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
      >
       <ReceiptProccess
          value={value}
          index={0}
          dir={theme.direction}
          reloadData={receiptProccess}
          handleOpenAddModal={handleOpenAddModal}
          closeAfterSave={closeAfterSave}
          open={open}
          handleCloseAddModal={handleCloseAddModal}
        ></ReceiptProccess>
        <ReceiptCancel
     
          value={value}
          index={1}
          dir={theme.direction}
          open={open}
          handleCloseAddModal={handleCloseAddModal}
          closeAfterSave={closeAfterSave}
          reloadData={receiptCancel}
          handleOpenAddModal={handleOpenAddModal}
        ></ReceiptCancel>
      </SwipeableViews>
      
    </div>
    </div>
  );
}
