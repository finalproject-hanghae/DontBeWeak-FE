import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "/schedule",
});

const useThisApi = applyInterceptorsTo(baseApi);

//drug 관련 API -> drugApi
const apiDrugAdd = async (data) => {
  const dataApiDrugAdd = await useThisApi.post("", data);
  return dataApiDrugAdd;
};

const apiDrugList = async (path) => {
  const dataApiDrugList = await useThisApi.get(`/${path}`);
  return dataApiDrugList;
};

const apiDrugCheck = async (data) => {
  const dataApiDrugCheck = await useThisApi.patch("/week", data);
  return dataApiDrugCheck;
};

const apiDrugWeek = async (path, params) => {
  const dataApiDrugWeek = await useThisApi.get(`/${path}/week`, {
    params: params,
  });
  return dataApiDrugWeek;
};

export const drugApi = {
  apiDrugAdd: (data) => apiDrugAdd(data),
  apiDrugList: (path) => apiDrugList(path),
  apiDrugCheck: (data) => apiDrugCheck(data),
  apiDrugWeek: (path, params) => apiDrugWeek(path, params),
};
