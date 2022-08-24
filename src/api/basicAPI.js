import axios from "axios";
import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

//이런 페이지에서도 한 눈에 데이터의 값들을 명시 가능하면 좋겠음. => TypeScript?!

//user 관련 API -> userApi
const apiSignup = async (data) => {
  const DataApiSignup = await useThisApi.post("/user/signup", data);
  return DataApiSignup;
};

const apiLogin = async (data) => {
  const DataApiLogin = await useThisApi.post("/login", data);
  return DataApiLogin;
};

const apiUser = async () => {
  const DataApiUser = await useThisApi.get("/user");
  return DataApiUser;
};

//drug 관련 API -> drugApi
const apiDrugAdd = async (data) => {
  const DataApiDrugAdd = await useThisApi.post("/schedule", data);
  return DataApiDrugAdd;
};

const apiDrugList = async (path) => {
  const DataApiDrugList = await useThisApi.get(`/schedule/${path}`);
  return DataApiDrugList;
};

const apiDrugCheck = async (data) => {
  const DataApiDrugCheck = await useThisApi.patch("/schedule/week", data);
  return DataApiDrugCheck;
};

const apiDrugWeek = async (path, params) => {
  const DataApiDrugWeek = await useThisApi.get(`/schedule/${path}/week`, {
    params: params,
  });
  return DataApiDrugWeek;
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
