import axios from "axios";

// Actions
const KEEP = "user/KEEP";

const initialState = {
  authorization: null,
};

export function keepAuthData(authorization) {
  return { type: KEEP, authorization };
}

//middlewares
//로그인 입력값(userData)을 받아 로그인 후 로그인 정보를 로그인 데이타(authorization)에 저장
export const keepAuthDataMW = (userData, navigate) => {
  return async function (dispatch) {

    axios
      .post("http://3.37.88.75/login",
        userData
      )
      .then((response) => {
        let sessionStorage = window.sessionStorage;
        console.log(response);
        sessionStorage.setItem("authorization", response.headers.authorization);
        dispatch(keepAuthData(response.headers.authorization));
        navigate("/record");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loadSessionDataMW = () => {
  return async function (dispatch) {
    let sessionStorage = window.sessionStorage;
    let authorization = sessionStorage.getItem("authorization");
    dispatch(keepAuthData(authorization));
  };
};

export default function reducer(state = initialState, action = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "user/KEEP": {
      return { authorization: action.authorization };
    }
    // do reducer stuff
    default:
      return state;
  }
}