import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "items",
});

const useThisApi = applyInterceptorsTo(baseApi);

//item 관련 API ->itemApi
const apiItemList = async () => {
  const dataApiItemList = await useThisApi.get("/items");
  return dataApiItemList;
};

const apiItemBuy = async (path) => {
  const dataApiItemBuy = await useThisApi.patch(`/items/${path}`);
  return dataApiItemBuy;
};

export const itemApi = {
  apiItemList: () => apiItemList(),
  apiItemBuy: (path) => apiItemBuy(path),
};
