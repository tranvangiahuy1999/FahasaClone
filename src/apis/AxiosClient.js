import axios from "axios";
import alert from "../utils/Alert";

const axiosClient = axios.create({
  headers: {
    headers: {
      "content-type": "application/json",
      "Content-Type": "multipart/form-data",
    },
  },
});

//handle access token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.baseURL = process.env.REACT_APP_BASE_URL;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

//handle error
const handleError = (error) => {  
  // if(error)
  //   alert({
  //     icon: "error",
  //     title: "Đã có lỗi xảy ra",
  //     msg: "Xin vui lòng thử lại sau!",
  //   });
  // else
  //   alert({
  //     icon: "error",
  //     title: "Đã có lỗi xảy ra",
  //     msg: "Không thể kết nối tới server!",
  //   });
  return
};

//handle response
axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return { ...res.data, status: res.status };
    }
    return res;
  },
  (err) => {
    const statusCode = err.response.status;
    switch (statusCode) {
      case 401:
        window.location.replace("/login");
        localStorage.removeItem("token");
        break;
      case 400:
        handleError(err);
        break;
      case 403:
        alert({ icon: "error", title: "Error", message: "403 Forbidden" });
        break;
      case 404:
        alert({ icon: "error", title: "Error", message: "404 Not Found" });
        break;
      case 405:
        alert({
          icon: "error",
          title: "Error",
          message: "Bạn không thể thao tác vào mục này",
        });
        break;
      case 500:
        alert({ icon: "error", title: "Error", message: "Internal Server Error" });
        break;
      default:
        alert({
          icon: "error",
          title: "Error",
          msg: "Đã có lỗi xảy ra",
        });
    }
    return Promise.reject(err);
  }
);

export default axiosClient;
