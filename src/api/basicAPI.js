import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

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

export const userApi = {
  apiSignup: (data) => apiSignup(data),
  apiLogin: (data) => apiLogin(data),
  apiUser: () => apiUser(),
};
