import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getCookie } from "../hooks/cookieController";

const onApiRequest = (config: AxiosRequestConfig) => {
  //API 요청을 보내기 전에
  let authorization = getCookie("authorization");

  if (authorization) {
    // token 있으면
    config.headers = { authorization: authorization }; // headers에 담아주기
  }
  return config;
};

const onApiRequestError = (error: AxiosError) => {
  console.log(error)
  return Promise.reject(error); //왜 거부되었는지라도 알려줘!
};

const onApiResponse = (response: AxiosResponse) => {
  // 응답 데이터를 가공 -> HTTP STATUS 200시 .then() 직전 호출
  // ...
  return response;
};

const onApiResponseError = (error: AxiosError) => {
  // 오류 응답을 처리 -> HTTP STATUS 200이 아닐 시 .catch() 직전 호출
  console.log(error)
  const originalRequest = error.config;
  // 
  // 추후 api 예외처리 에러코드를 정형화 하는 시간이 있었으면 좋겠음.(단순 깨달음)
  // swagger UI!
  // ...
  return  /*axios(originalRequest);*/
};

export default function applyInterceptorsTo(
  baseApi: AxiosInstance
): AxiosInstance {
  baseApi.interceptors.request.use(onApiRequest, onApiRequestError);
  baseApi.interceptors.response.use(onApiResponse, onApiResponseError);
  return baseApi;
}
