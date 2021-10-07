import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, FormGroup } from "@material-ui/core";
import { ICON_COLOR, LOGO_COLOR } from "../../constants/index";

const ChangePasswordModal = (props) => {
  const classes = useStyles();
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState();
  const [statusArray, setStatusArray] = useState([""]);
  const [btnState, setBtnState] = useState(false);

  useEffect(() => {
    let temp = [];
    switch (props.itemStatus) {
      case "Đang chờ duyệt":
        temp = ["Đã duyệt", "Đơn bị hủy"];
        setStatusArray([...temp]);
        break;
      case "Đã duyệt":
        temp = ["Đang vận chuyển", "Đơn bị hủy"];
        setStatusArray([...temp]);
        break;
      case "Đang vận chuyển":
        temp = ["Đã vận chuyển", "Đơn bị hủy"];
        setStatusArray([...temp]);
        break;
      case "Đơn bị hủy":
        temp = [];
        setStatusArray([...temp]);
        break;
      case "Đã vận chuyển":
        temp = ["Hoàn trả"];
        setStatusArray([...temp]);
        break;
      default:
        break;
    }
  }, [props.itemStatus]);

  const closeModal = () => {
    setStatus("");
    setDescription();
    props.handleClose();
  };

  const onSubmit = async () => {
    setBtnState(true);
    await props.onSubmit(status, description);
    setBtnState(false);
  };

  return (
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
          <h5>Cập nhật đơn hàng</h5>
          <div style={{ fontSize: "1rem" }}>
            Trạng thái:{" "}
            <span style={{ color: LOGO_COLOR }}>{props.itemStatus}</span>
          </div>
          <form>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Tình trạng đơn hàng
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Tình trạng"
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  {statusArray &&
                    statusArray.map((ele) => (
                      <MenuItem key={ele} value={ele}>
                        {ele}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>

            <FormGroup className="mt-1">
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                required
                label="Miêu tả cập nhật"
              />
            </FormGroup>
            <div className="row mt-4">
              <div className="col-6 text-center">
                <Button
                  variant="outlined"
                  type="button"
                  onClick={closeModal}
                  style={{
                    fontSize: "0.8rem",
                    color: ICON_COLOR,
                    border: `2px solid ${ICON_COLOR}`,
                  }}
                >
                  Trở lại
                </Button>
              </div>
              <div className="col-6 text-center">
                <Button
                  variant="contained"
                  disabled={btnState}
                  type="button"
                  onClick={onSubmit}
                  style={{
                    fontSize: "0.8rem",
                    color: "white",
                    backgroundColor: ICON_COLOR,
                  }}
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </form>
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
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  resize: {
    fontSize: "1rem",
  },
}));

export default ChangePasswordModal;
