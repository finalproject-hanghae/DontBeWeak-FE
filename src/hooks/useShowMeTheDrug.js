import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

const useShowMeTheDrug = () => {
    const [myDrug, setMyDrug] = React.useState([]);
    const username = useParams().username;

    React.useEffect(() => {
      let sessionStorage = window.sessionStorage;
      axios(`http://3.37.88.75/schedule/${username}`, {
        headers: { authorization: sessionStorage.getItem("authorization") },
      })
        .then((res) => {
          console.log(res);
          setMyDrug(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return myDrug 
}

export default useShowMeTheDrug