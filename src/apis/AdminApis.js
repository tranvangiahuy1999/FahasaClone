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
  getAllCategory() {
    const url = "/api/category/list-non-level";
    return axiosClient.get(url);
  },
  deleteCategoty(id) {
    const url = `/api/category/delete/${id}`;
    return axiosClient.delete(url);
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
  createTag(data) {
    const url = `/api/tag/create`;
    return axiosClient.post(url, data);
  },
  updateTag(tagId, data) {
    const url = `/api/tag/update/${tagId}`;
    return axiosClient.put(url, data);
  },
  getTagList() {
    const url = "/api/tag/get-list";
    return axiosClient.get(url);
  },
  deleteTag(id) {
    const url = `/api/tag/delete/${id}`;
    return axiosClient.delete(url);
  },
  getProductInCateByTag(id) {
    const url = `/api/product/search/in-category/${id}`;
    return axiosClient.get(url);
  },
  getProductByTagId(id) {
    const url = `/api/tag/get-product/${id}`;
    return axiosClient.get(url);
  },
  addProductToTag(tagId, productId) {
    const url = `/api/tag/add-product/${tagId}`;
    return axiosClient.post(url, productId);
  },
  removeProductfromTag(tagId, productId) {
    const url = `/api/tag/remove-product/${tagId}`;
    return axiosClient.patch(url, productId);
  },
  getFreeTag() {
    const url = "/api/tag/free-tag";
    return axiosClient.get(url);
  },
  getBoxTagList() {
    const url = "/api/box-tag/get-list";
    return axiosClient.get(url);
  },
  createBoxTag(data) {
    const url = "/api/box-tag/create";
    return axiosClient.post(url, data);
  },
  updateBoxTag(id, data) {
    const url = `/api/box-tag/update/${id}`;
    return axiosClient.put(url, data);
  },
  updatBoxTagPosition(data) {
    const url = "/api/box-tag/update-position";
    return axiosClient.put(url, data);
  },
  getTagWithBoxTagId(id) {
    const url = `/api/box-tag/detail/${id}`;
    return axiosClient.get(url);
  },
  deleteBoxTag(id) {
    const url = `/api/box-tag/delete/${id}`;
    return axiosClient.delete(url);
  },
  addTagToBoxTag(boxTagId, tagId) {
    const url = `/api/box-tag/add-tag/${boxTagId}`;
    return axiosClient.put(url, tagId);
  },
  removeTagFromBoxTag(tagId) {
    const url = `/api/box-tag/remove-tag/${tagId}`;
    return axiosClient.patch(url);
  },
  updateBoxTagPosition(data) {
    const url = "/api/box-tag/update-position";
    return axiosClient.put(url, data);
  },
  getSpecialTagList(isHide, page, limit) {
    const url = `/api/special-tag/admin/get-list?is_hide=${isHide}&page=${page}&limit=${limit}`;
    return axiosClient.get(url);
  },
  updateOrderOfSpecialTag(data) {
    const url = '/api/special-tag/update-sort';
    return axiosClient.put(url, data)
  },
  deleteSpecialTag(tagId) {
    const url = `/api/special-tag/delete/${tagId}`
    return axiosClient.delete(url)
  },
  createSpecialTag(data) {
    const url = '/api/special-tag/create'
    return axiosClient.post(url, data)
  }
};

export default adminApis;
