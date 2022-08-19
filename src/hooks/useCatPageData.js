import React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export const useCatPageData = () => {
  const myname = useParams();
  const [myCat, setMyCat] = React.useState({});
  React.useEffect(() => {
    axios
      .get("http://3.37.88.75/cat", {
        headers: { authorization: sessionStorage.getItem("authorization") },
      })
      .then((response) => {
        setMyCat({ ...response.data, username: myname.username });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.massage);
      });
  }, []);


  return myCat;
};
