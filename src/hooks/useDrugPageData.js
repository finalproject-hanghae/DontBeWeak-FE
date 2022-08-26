import { useParams } from "react-router-dom";
import React from "react";
import { drugApi } from "../api/basicAPI";

export const useDrugPageData = (startDate,endDate) => {
  const myname = useParams().username;
  const [myWeekData, setMyWeekData] = React.useState([]);

  const params = {
    startDate:startDate.replace('.',''),
    endDate:endDate.replace('.',''),
  }

  React.useEffect(() => {
    drugApi.apiDrugWeek(myname,params)
    .then((response) => {
      console.log(response.data,"ㅇ다아");
      setMyWeekData([...response.data])
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return myWeekData;
};