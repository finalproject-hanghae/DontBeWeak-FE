import { useParams } from "react-router-dom";
import React from "react";
import { catApi } from "../api/catApi";
import { cat } from "../types/cats";

export const useSomeCatSatus = () => {
  const myname = useParams().username;
  const [someCats, setSomeCats] = React.useState<cat>();

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
