import axios from "axios";
import { username } from "../types/users";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "/cat",
});

const useThisApi = applyInterceptorsTo(baseApi);

//cat 관련 API -> catApi
const apiMyCatStatus = async () => {
  const dataApiCatStatus = await useThisApi.get("");
  return dataApiCatStatus;
};

const apiSomeCatStatus = async (path: username) => {
  const dataApiSomeCatStatus = await useThisApi.get(`/${path}`);
  return dataApiSomeCatStatus;
};

export const catApi = {
  apiMyCatStatus: () => apiMyCatStatus(),
  apiSomeCatStatus: (path: username) => apiSomeCatStatus(path),
};
