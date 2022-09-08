import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

const apiItemList = async () => {
  const dataApiItemList = await useThisApi.get("/items");
  return dataApiItemList;
};

const apiItemBuy = async (path) => {
  const dataApiItemBuy = await useThisApi.patch(`/items/${path}`);
  return dataApiItemBuy;
};

const apiItemApply = async (path) => {
  const dataApiItemApply = await useThisApi.get(`/items/${path}`);
  return dataApiItemApply;
};

export const itemApi = {
  apiItemList: () => apiItemList(),
  apiItemBuy: (path) => apiItemBuy(path),
  apiItemApply: (path) => apiItemApply(path),
};
