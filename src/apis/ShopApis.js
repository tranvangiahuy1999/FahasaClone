import axiosClient from "./AxiosClient";

const shopApis = {
  getCategoryList() {
    const url = "/api/category/list";
    return axiosClient.get(url);
  },
  getProductByCate(page,cate,perPage,sortType) {
    const url = `/api/product/get/category?page=${page}&cate=${cate}&perPage=${perPage}&sortType=${sortType}`;
    return axiosClient.get(url);
  },
  getProductDetail(id) {
    const url = `/api/product/get/${id}`;
    return axiosClient.get(url);
  },
  getProductBySearch(page,name) {
    const url = `/api/product/search?page=${page}&search=${name}`;
    return axiosClient.get(url);
  },
  createReceipt(data) {
    const url = "/api/receipt/create";
    return axiosClient.post(url, data);
  },
};

export default shopApis;