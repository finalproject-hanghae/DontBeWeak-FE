import axios from "axios";
import React from "react";

const useCatItemList = () => {
  let sessionStorage = window.sessionStorage;
  let authorization = sessionStorage.getItem("authorization");
  const [list, setList] = React.useState();
  React.useEffect(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + "/items", {
        headers: { authorization: authorization },
      })
      .then((res) => {
        console.log(res);
        setList(res.data);
      });
  }, []);
  return list;
};

export default useCatItemList;
