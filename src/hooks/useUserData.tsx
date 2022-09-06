import React from "react";
import { userApi } from "../api/basicAPI";
import { user } from "../types/users";

const useUserData = () => {
  const [userInfo, setUserInfo] = React.useState<user>();
  React.useEffect(() => {
    userApi
      .apiUser()
      .then((res) => {
        console.log(res.data, "유저정보다ㅏㅏㅏ");
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return userInfo;
};

export default useUserData;
