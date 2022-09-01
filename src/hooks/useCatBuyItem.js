import React from "react";
import { useEffect } from "react";
import { itemApi } from "../api/itemApi"; 
import useCatItemList from "./useCatItemList";


const useCatBuyItem = () => {
  
    const [ someItem, setSomeItem ] = React.useState();
  useEffect(() => { 
    itemApi
      .apiItemBuy()
      .then((res) => {
        console.log(res.data, '사자사자');
        // setBuying(res.data);
      })
      .catch((err) => {
        console.log(err)});
  }, []);

}

export default useCatBuyItem;
