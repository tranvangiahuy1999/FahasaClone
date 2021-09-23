import axiosClient from "./AxiosClient";

const adminApis = {
  getCategory() {
    const url = "/api/category/admin/list";
    return axiosClient.get(url);
  },
  getCategoryByParent(query) {
    let url = "/api/category/admin/cate-level";
    if (query) {
      url = url + query;
    }
    return axiosClient.get(url);
  },
  createCategory(data) {
    const url = "/api/category/create";
    return axiosClient.post(url, data);
  },
  updateCategory(body, id) {
    const url = `/api/category/update/${id}`;
    return axiosClient.put(url, body);
  },
};

export default adminApis;
