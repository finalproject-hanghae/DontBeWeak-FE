import React from "react";
import { itemApi } from "../api/itemApi";
import { catItems } from "../types/cats";

const useCatItemList = (): catItems => {
  const [list, setList] = React.useState<catItems>([]);
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
