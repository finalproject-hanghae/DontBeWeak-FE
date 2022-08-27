import axios from "axios";

import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

//명세서 https://octagonal-archeology-790.notion.site/SA-2-703bf495f2044436b2e8274f23a7f297
//이런 페이지에서도 한 눈에 데이터의 값들을 명시 가능하면 좋겠음. => TypeScript?!

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
