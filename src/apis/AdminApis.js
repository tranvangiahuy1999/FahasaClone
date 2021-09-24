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
  updateCategory(data, id) {
    const url = `/api/category/update/${id}`;
    return axiosClient.put(url, data);
  },
  createProduct(data) {
    const url = "/api/product/create";
    return axiosClient.post(url, data);
  },
};

export default adminApis;
