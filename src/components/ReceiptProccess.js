import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaUserSlash, FaUser } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";
import {FaEdit } from "react-icons/fa";
import ChangeStatusModal from "./ChangeStatusModal/index";
import AdminApi from "../apis/AdminApis";
import alert from "../utils/Alert";

const ReceiptProccess = (props) => {
  const [accountList, setAccountList] = useState([]);
  const [open, setOpen] = useState(false);
  const [actionAccountId, setActionAccountId] = useState();
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [btnState, setBtnState] = useState(false);

  useEffect(() => {
    setAccountList(props.reloadData);
  }, [props.reloadData]);

  const convertTime = (unformatTime) => {
    let date = new Date(unformatTime);
    const formatedTime =
      date.getDate() +
      " / " +
      (date.getMonth() + 1) +
      " / " +
      date.getFullYear();
    return formatedTime;
  };

  const handleOpenModal = (id) => {
    setActionAccountId(id);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setActionAccountId();
    setOpen(false);
  };
  const adminChangeStatus = async (status,description) => {
    const data = {
      status: status,
      description:description,
    };
    console.log(actionAccountId);
    console.log(data)
    try {
      const res = await AdminApi.updateListReceipt(
        actionAccountId,
        data
      );
      if (res.status === 200) {
        alert({
          icon: "success",
          title: res.message,
          msg: "Đổi thành công",
        });
        handleCloseModal();
        props.closeAfterSave();
      }
    } catch (e) {
      console.log(e);
    }
  };
console.log(props.reloadData);
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`full-width-tabpanel-${props.index}`}
      aria-labelledby={`full-width-tab-${props.index}`}
      className="production-page"
    >
      <ChangeStatusModal
        open={open}
        handleClose={handleCloseModal}
        onSubmit={adminChangeStatus}
      ></ChangeStatusModal>
      <h4 style={{marginTop:'2%',marginBottom:'2%'}}>Danh sách đơn đang xử lí</h4>
      <div className="row m-0 title">
        <div className="col-1 text-left">STT</div>
        <div className="col-2 text-left">Tên đầy đủ</div>
        <div className="col-2 text-left">Điện Thoại</div>
        <div className="col-2 text-left">Điạ Chỉ</div>
        <div className="col-2 text-left">Ngày tạo</div>
        <div className="col-2 text-left">Trạng thái</div>
        <div className="col-1 text-left">Tùy chỉnh</div>
      </div>
      <div className="product-list">
        {accountList && accountList.length ? (
          accountList.map((item, index) => (
            <div
              key={index}
              className="row m-0 product-row"
              style={{ background: `${index % 2 === 0 ? "#ebebeb" : ""}`,paddingTop:'1%' }}
            >
              <div className="col-1 product-item">{index + 1}</div>
              <div className="col-2 product-item">{item.name}</div>
              <div className="col-2 product-item">{item.phone}</div>
              <div className="col-2 product-item">{item.address}</div>
              <div className="col-2 product-item">
                {convertTime(item.createdAt)}
              </div>
              <div className="col-2 product-item">{item.status.present}</div>
              <div className="col-1 product-item">
                <IconButton
                  color="primary"
                  onClick={() => handleOpenModal(item._id)}
                >
                  <FaEdit size={20} style={{marginTop:'-65%'}} ></FaEdit>
                </IconButton>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <h5>Không có dữ liệu trả về</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReceiptProccess;
