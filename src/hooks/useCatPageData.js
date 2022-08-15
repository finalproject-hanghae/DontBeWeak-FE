import React from "react";
import { useParams } from "react-router-dom";

export const useCatPageData = () => {
  const myname = useParams();
  const [myCat, setMyCat] = React.useState({});
  React.useEffect(() => {
    //axios 불러오는 곳
    const tmp = {
      level: 12,
      exp: 0,
      maxExp: 20,
      catImg: "catImg1",
    };
    setMyCat({ ...tmp, username: myname.username });
  }, []);

  return myCat;
};
