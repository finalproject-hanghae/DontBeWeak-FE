import axios from "axios";
import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

//이런 페이지에서도 한 눈에 데이터의 값들을 명시 가능하면 좋겠음. => TypeScript?!


//user 관련 API -> userApi
export const apiSignup = async (data) => {
  const DataApiSignup = await useThisApi.post("/user/signup", data);
  return DataApiSignup;
};

export const apiLogin = async (data) => {
  const DataApiLogin = await useThisApi.post("/login", data);
  return DataApiLogin;
};

export const apiUser = async () => {
  const DataApiUser = await useThisApi.get("/user");
  return DataApiUser;
};




export const userApi = {
  apiSignup: (data) => apiSignup(data),
  apiLogin: (data) => apiLogin(data),
  apiUser: () => apiUser(),
};
