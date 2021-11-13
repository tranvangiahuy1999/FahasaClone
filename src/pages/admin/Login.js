import React, { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  FormGroup,
  Button,
  makeStyles,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import AuthApis from "../../apis/AuthApis";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import bgimg from "../../assets/login-background.png";
import { useDispatch } from "react-redux";
import { userLoginSuccess } from "../../reducers/AdminReducer";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [btn, setBtn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    const loginInfo = localStorage.getItem("loginInfo")
    if (loginInfo) {
      const loginData = JSON.parse(loginInfo)
      setChecked(true)
      setUsername(loginData.user)
      setPassword(loginData.password)
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setBtn(true);
      if (!username || !password) return
      const credential = {
        'user': username,
        'password': password
      }
      const res = await AuthApis.login(credential);
      if (res.status === 200) {
        if (checked) {
          localStorage.setItem("loginInfo", JSON.stringify(credential))
        } else {
          localStorage.removeItem("loginInfo")
        }
        localStorage.setItem("token", res.data);
        AuthApis.setHeaderAxios(res.data);
        dispatch(userLoginSuccess())
        return history.push("/admin/receipt/undone");
      }
    } catch (e) {
      console.log(e);
    }
    setBtn(false);
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="login-page">
      <Backdrop className={classes.backdrop} open={btn}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="row m-0 login-header">
        <h3 className="col-12">
          Trang đăng nhập quản lý
        </h3>
      </div>
      <div className="login-body row m-0">
        <div className="col-6 d-none d-md-block mt-auto mb-auto">
          <img alt="" src={bgimg}></img>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="login-form">
            <h4>Đăng nhập</h4>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <FormControl>
                  <TextField
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    label="Tên đăng nhập"
                  />
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl>
                  <TextField
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    label="Mật khẩu"
                  />
                </FormControl>
              </FormGroup>
              <FormControlLabel
                className="mt-3"
                control={
                  <Checkbox checked={checked} onChange={handleCheckbox} />
                }
                label={<div>Ghi nhớ mật khẩu</div>}
              />
              <FormGroup className="mt-3">
                <Button
                  disabled={btn}
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: "#3396b5",
                    fontSize: "1rem",
                    color: "white",
                  }}
                >
                  Đăng nhập
                </Button>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  resize: {
    fontSize: "1.2rem",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default Login;
