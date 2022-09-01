import { useParams } from "react-router-dom";
import React from "react";
import { catApi } from "../api/catApi";

export const useSomeCatSatus = () => {
  const myname = useParams().username;
  const [someCats, setSomeCats] = React.useState({});

  React.useEffect(() => {
    catApi
      .apiSomeCatStatus(myname)
      .then((response) => {
        console.log(response.data);
        setSomeCats({ ...response.data, username: myname });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return someCats;
};