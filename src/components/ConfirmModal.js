import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ICON_COLOR } from "../constants/index";
import CircularProgress from "@material-ui/core/CircularProgress";

const ConfirmModal = (props) => {
  const classes = useStyles();
  const [btnState, setBtnState] = useState(false);

  const closeModal = () => {
    props.handleClose();
  };

  const confirmClick = async () => {
    setBtnState(true);
    await props.accept();
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
          <h5>Bạn có chắc chắn thực hiện thao tác này?</h5>
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
                onClick={confirmClick}
                style={{
                  fontSize: "0.8rem",
                  color: "white",
                  backgroundColor: ICON_COLOR,
                }}
              >
                {btnState ? (
                  <CircularProgress size="1.6rem" style={{ color: "white" }} />
                ) : (
                  "Đồng ý"
                )}
              </Button>
            </div>
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
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default ConfirmModal;
