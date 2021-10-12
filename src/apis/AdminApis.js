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
  updateCategoryPosition(data) {
    const url = "/api/category/update-position";
    return axiosClient.put(url, data);
  },
  updateCategory(data, id) {
    const url = `/api/category/update/${id}`;
    return axiosClient.put(url, data);
  },
  createProduct(data) {
    const url = "/api/product/create";
    return axiosClient.post(url, data);
  },
  getProductByPageAndBarcode(page, query) {
    const url = `/api/product/search?page=${page}&search=${query}`;
    return axiosClient.get(url);
  },
  getAllProducts(page) {
    const url = `/api/product/get/all/${page}`;
    return axiosClient.get(url);
  },
  deleteProduct(id) {
    const url = `/api/product/delete/${id}`;
    return axiosClient.delete(url);
  },
  getProductDetail(id) {
    const url = `/api/product/get/${id}`;
    return axiosClient.get(url);
  },
  updateProduct(id, data) {
    const url = `/api/product/update/${id}`;
    return axiosClient.put(url, data);
  },
  getListReceipt(page, in_proccess) {
    const url = `/api/receipt/search?page=${page}&in_process=${in_proccess}`;
    return axiosClient.get(url);
  },
  updateListReceipt(id, data) {
    const url = `/api/receipt/update/${id}`;
    return axiosClient.put(url, data);
  },
};

export default adminApis;
