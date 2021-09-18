import axiosClient from "./AxiosClient";

const authApis = {
  login(credentials) {
    const url = "/api/auth/login";
    return axiosClient.post(url, credentials);
  },
  setHeaderAxios(token) {
    axiosClient.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
};

export default authApis;
