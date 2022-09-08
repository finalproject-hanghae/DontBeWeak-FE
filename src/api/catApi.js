import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

const apiMyCatStatus = async () => {
  const dataApiCatStatus = await useThisApi.get("/cat");
  return dataApiCatStatus;
};

const apiSomeCatStatus = async (path) => {
  const dataApiSomeCatStatus = await useThisApi.get(`/cat/${path}`);
  return dataApiSomeCatStatus;
};

export const catApi = {
  apiMyCatStatus: () => apiMyCatStatus(),
  apiSomeCatStatus: (path) => apiSomeCatStatus(path),
};
