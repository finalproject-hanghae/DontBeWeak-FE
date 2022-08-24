import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

//명세서 https://www.notion.so/SA-2-703bf495f2044436b2e8274f23a7f297
//이런 페이지에서도 한 눈에 데이터의 값들을 명시 가능하면 좋겠음. => TypeScript?!

//user 관련 API -> userApi
const apiSignup = async (data) => {
  const dataApiSignup = await useThisApi.post("/user/signup", data);
  return dataApiSignup;
};

const apiLogin = async (data) => {
  const dataApiLogin = await useThisApi.post("/login", data);
  return dataApiLogin;
};

const apiUser = async () => {
  const dataApiUser = await useThisApi.get("/user");
  return dataApiUser;
};

//drug 관련 API -> drugApi
const apiDrugAdd = async (data) => {
  const dataApiDrugAdd = await useThisApi.post("/schedule", data);
  return dataApiDrugAdd;
};

const apiDrugList = async (path) => {
  const dataApiDrugList = await useThisApi.get(`/schedule/${path}`);
  return dataApiDrugList;
};

const apiDrugCheck = async (data) => {
  const dataApiDrugCheck = await useThisApi.patch("/schedule/week", data);
  return dataApiDrugCheck;
};

const apiDrugWeek = async (path, params) => {
  const dataApiDrugWeek = await useThisApi.get(`/schedule/${path}/week`, {
    params: params,
  });
  return dataApiDrugWeek;
};

//friend 관련 API ->friendApi
const apiFriendAdd = async (data) => {
  const dataApiFriendAdd = await useThisApi.post("/friend", data);
  return dataApiFriendAdd;
};

const apiFriendList = async () => {
  const dataApiFriendList = await useThisApi.get("/friend");
  return dataApiFriendList;
};

//item 관련 API ->itemApi
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
}; //  ?

//cat 관련 API -> catApi
const apiMyCatStatus = async () => {
  const dataApiCatStatus = await useThisApi.get("/cat");
  return dataApiCatStatus;
};

const apiSomeCatStatus = async (path) => {
  const dataApiSomeCatStatus = await useThisApi.get(`/cat/${path}`);
  return dataApiSomeCatStatus;
};

export const userApi = {
  apiSignup: (data) => apiSignup(data),
  apiLogin: (data) => apiLogin(data),
  apiUser: () => apiUser(),
};

export const drugApi = {
  apiDrugAdd: (data) => apiDrugAdd(data),
  apiDrugList: (path) => apiDrugList(path),
  apiDrugCheck: (data) => apiDrugCheck(data),
  apiDrugWeek: (path, params) => apiDrugWeek(path, params),
};

export const friendApi = {
  apiFriendAdd: (data) => apiFriendAdd(data),
  apiFriendList: () => apiFriendList(),
};

export const itemApi = {
  apiItemList: () => apiItemList(),
  apiItemBuy: (path) => apiItemBuy(path),
  apiItemApply: (path) => apiItemApply(path),
};

export const catApi = {
  apiMyCatStatus: () => apiMyCatStatus(),
  apiSomeCatStatus: (path) => apiSomeCatStatus(path),
};
