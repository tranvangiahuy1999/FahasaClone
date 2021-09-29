import axiosClient from "./AxiosClient";

const shopApis = {
  getCategoryList() {
    const url = "/api/category/list";
    return axiosClient.get(url);
  },
  getProductByCate(page,cate) {
    const url = `/api/product/get/category?page=${page}&cate=${cate}`;
    return axiosClient.get(url);
  },
};

export default shopApis;