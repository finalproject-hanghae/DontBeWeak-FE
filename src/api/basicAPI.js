import axios from "axios";
import applyInterceptorsTo from "./axiosInterceptors";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
});

const useThisApi = applyInterceptorsTo(baseApi);

export const apiSignup = async (data) => {
  const DataApiSignup = await useThisApi.post("/user/signup", data);
  return DataApiSignup;
};

export const apiLogin = async (data) => {
  const DataApiSignup = await useThisApi.post("/login", data);
  return DataApiSignup;
};
