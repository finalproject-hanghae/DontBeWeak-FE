import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import {drugApi} from "../api/basicAPI"

const useShowMeTheDrug = () => {
  const [myDrug, setMyDrug] = React.useState([]);
  const username = useParams().username;

  React.useEffect(() => {
    axios( process.env.REACT_APP_DB_HOST + `/schedule/${username}`)
      .then((res) => {
        console.log(res, '쇼미더드러그으');
        setMyDrug(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return myDrug;
};

export default useShowMeTheDrug;
