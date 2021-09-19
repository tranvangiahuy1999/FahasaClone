import axiosClient from "./AxiosClient";

const adminApis = {
  getCategory() {
    const url = "/api/category/admin/list";
    return axiosClient.get(url);
  },
  getCategoryByParent(data) {
    const url = "/api/category/admin/cate-level?";
    return axiosClient.get(url, data);
  },
  createCategory(data) {
    const url = "/api/category/create";
    return axiosClient.post(url, data);
  },
};

export default adminApis;
