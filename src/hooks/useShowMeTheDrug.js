import axios from 'axios';
import React from 'react'

const useShowMeTheDrug = () => {
    const [myDrug, setMyDrug] = React.useState([]);

    React.useEffect(() => {
      let sessionStorage = window.sessionStorage;
      axios(`http://3.37.88.75/schedule`, {
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