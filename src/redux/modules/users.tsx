import { userApi } from "../../api/basicAPI";
import {
  deleteCookie,
  getCookie,
  setCookieAuthorization,
  setCookieUsername,
} from "../../hooks/cookieController";
import { loginData } from "../../types/users";

// Actions
const KEEP = "user/KEEP" as const;
const AWAY = "user/AWAY" as const;

type UserState = {
  authorization: string | null;
};

const initialState: UserState = {
  authorization: "",
};

export function keepAuthData(authorization: string | null) {
  return { type: KEEP, authorization };
}

export function awayAuthData() {
  return { type: AWAY, authorization: null };
}

//middlewares
//로그인 입력값(userData)을 받아 로그인 후 로그인 정보를 로그인 데이타(authorization)에 저장
export const keepAuthDataMW = (userData: loginData, navigate: any) => {
  return async function (dispatch: any) {
    userApi
      .apiLogin(userData)
      .then((response) => {
        setCookieAuthorization(response.headers.authorization);
        //이어서 user API실행
        userApi.apiUser().then((res) => {
          setCookieUsername(res.data.username);
          dispatch(keepAuthData(response.headers.authorization));
          navigate("/record/" + res.data.username);
        });
      })
      .catch((error) => {
        console.log(error);
        alert("아이디 또는 비밀번호를 다시 확인해주세요.");
      });
  };
};

export const loadSessionDataMW = () => {
  return async function (dispatch: any) {
    let authorization = getCookie("authorization");
    dispatch(keepAuthData(authorization));
  };
};

export const awaySessionDataMW = () => {
  return async function (dispatch: any) {
    deleteCookie("authorization");
    deleteCookie("username");
    dispatch(awayAuthData());
  };
};

export default function reducer(state = initialState, action: any) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "user/KEEP": {
      return { authorization: action.authorization };
    }
    case "user/AWAY": {
      return { authorization: action.authorization };
    }
    // do reducer stuff
    default:
      return state;
  }
}
