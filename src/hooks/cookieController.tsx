import { cookie } from "../types/cookies";

export const setCookie = ({ key, value, days = 1 }: cookie): void => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days);

  var tmpValue: string =
    encodeURIComponent(value) +
    ";path='/'" +
    (days == null ? null : ";expires=" + exdate.toUTCString());

  document.cookie = encodeURIComponent(key) + "=" + tmpValue;
};

export const getCookie = (key: string) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : null;
};

export const deleteCookie = (key: string) => {
  setCookie({ key: key, value: "", days: -1 });
};

export const setCookieAuthorization = (authorization:string)=> {
    setCookie({
        key: "authorization",
        value: authorization,
        days: 3,
      });
}
export const setCookieUsername = (username:string)=> {
    setCookie({
        key: "authorization",
        value: username,
        days: 3,
      });
}
