import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export const useCatPageData = () => {
  const myname = useParams().username;
  const [myCat, setMyCat] = React.useState({});
  let sessionStorage = window.sessionStorage;
  React.useEffect(() => {
    axios
    .get( process.env.REACT_APP_DB_HOST + `/cat/${myname}`, {
      headers: { authorization: sessionStorage.getItem("authorization") },
    })
    .then((response) => {
      console.log(response.data);
      setMyCat({ ...response.data, username: myname });
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return myCat;
};
