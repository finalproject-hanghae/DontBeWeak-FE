import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const useShowMeTheDrug = () => {
  const [myDrug, setMyDrug] = React.useState([]);
  const username = useParams().username;

  React.useEffect(() => {
    let sessionStorage = window.sessionStorage;
    axios( process.env.REACT_APP_DB_HOST + `/schedule/${username}`)
      .then((res) => {
        console.log(res);
        setMyDrug(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return myDrug;
};

export default useShowMeTheDrug;
