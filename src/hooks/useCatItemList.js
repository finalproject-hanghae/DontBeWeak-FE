import React from "react";
import { itemApi } from "../api/basicAPI";

const useCatItemList = () => {
  const [list, setList] = React.useState();
  React.useEffect(() => {
    itemApi
      .apiItemList()
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return list;
};

export default useCatItemList;
