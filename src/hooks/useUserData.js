import React, {useEffect} from "react";
import { userApi } from "../api/basicAPI";

const useUserData = () => {
  const [userInfo, setUserInfo] = React.useState();
  useEffect(() => {
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
