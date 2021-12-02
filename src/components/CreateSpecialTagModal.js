import React, { useState } from 'react'
import AdminApi from "../apis/AdminApis";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { TextField, Button, FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { LOGO_COLOR } from "../constants/index";
import alert from "../utils/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

const CreateSpecialTagModal = (props) => {
    const classes = useStyles();
    const [tagName, setTagName] = useState()
    const [isHide, setIsHide] = useState(false)
    const [isSuggest, setIsSuggest] = useState(false)
    const [homePage, setHomePage] = useState(false)
    const [btnState, setBtnState] = useState(false);

    const closeModal = () => {
        props.handleClose();
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!tagName) return
        setBtnState(true);
        try {
            const request = {
                "name": tagName,
                "is_hide": isHide,
                "is_suggestion": isSuggest,
                "home_page": homePage
            }
            const res = await AdminApi.createSpecialTag(request)
            if (res.status === 200) {
                alert({ icon: "success", title: "Đã tạo special tag" });
                await props.reloadData();
            } else {
                alert({ icon: "error", title: "Đã có lỗi xảy ra" });
            }
        } catch (e) {

        }
        setBtnState(false);
    }

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
                    <h5>Tạo special tag</h5>
                    <form onSubmit={onSubmit}>
                        <FormGroup>
                            <TextField
                                InputProps={{
                                    classes: {
                                        input: classes.labelRoot,
                                    },
                                }}
                                label="Tên tag"
                                value={tagName}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.labelRoot,
                                    },
                                }}
                                onChange={(e) => setTagName(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <FormControlLabel
                                control={<Switch checked={isHide} onChange={() => setIsHide(!isHide)} />}
                                label={<span style={{ fontSize: "1rem" }}>Ẩn tag</span>}
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <FormControlLabel
                                control={<Switch checked={isSuggest} onChange={() => setIsSuggest(!isSuggest)} />}
                                label={<span style={{ fontSize: "1rem" }}>Thuộc đề xuất</span>}
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">
                            <FormControlLabel
                                control={<Switch checked={homePage} onChange={() => setHomePage(!homePage)} />}
                                label={<span style={{ fontSize: "1rem" }}>Thuộc trang chủ</span>}
                            />
                        </FormGroup>
                        <FormGroup className="mt-3">

                            <Button
                                variant="contained"
                                size="small"
                                style={{ color: "white", backgroundColor: LOGO_COLOR }}
                                id="material-button-label"
                                type="submit"
                                disabled={btnState}
                            >
                                {btnState ? (
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
        minWidth: '360px'
    },
    labelRoot: {
        fontSize: "1.1rem",
    },
}));

export default CreateSpecialTagModal;
