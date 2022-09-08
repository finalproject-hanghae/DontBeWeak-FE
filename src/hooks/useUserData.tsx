import React, {useEffect} from "react";
import { userApi } from "../api/basicAPI";
import { user } from "../types/users";

const useUserData = () => {
  const [userInfo, setUserInfo] = React.useState<user>();
  React.useEffect(() => {
    userApi
      .apiUser()
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return userInfo;
};

export default useUserData;
