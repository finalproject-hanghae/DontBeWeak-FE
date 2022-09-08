import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

const apiFriendAdd = async (data) => {
  const dataApiFriendAdd = await useThisApi.post("/friend", data);
  return dataApiFriendAdd;
};

const apiFriendList = async () => {
  const dataApiFriendList = await useThisApi.get("/friend");
  return dataApiFriendList;
};

export const friendApi = {
  apiFriendAdd: (data) => apiFriendAdd(data),
  apiFriendList: () => apiFriendList(),
};
