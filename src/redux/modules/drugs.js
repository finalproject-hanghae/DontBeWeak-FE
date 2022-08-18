import axios from "axios";
import useShowMeTheDrug from "../../hooks/useShowMeTheDrug";

// Actions
const KEEP = "drug/KEEP";
const LOAD = "drug/LOAD";

const initialState = {
  drugs: [],
};

export function keepDrugData(newDrug) {
  return { type: KEEP, drugs: newDrug };
}

export function loadDrugData(myDrug) {
  return { type: LOAD, drugs: myDrug };
}

//middlewares
export function loadDrugDataMW(username) {
  return function (dispatch) {
    axios(`http://3.37.88.75/schedule/${username}`)
      .then((res) => {
        console.log(res);
        let myDrug = res.data;
        console.log(myDrug)
        dispatch(loadDrugData(myDrug));
      })
      .catch((err) => console.log(err));
  };
}

export const keepDrugDataMW = (tmpDrugData) => {
    return function (dispatch) {
        let sessionStorage = window.sessionStorage;
        axios({
          method: "post",
          url: "http://3.37.88.75/schedule",
          headers: { authorization: sessionStorage.getItem("authorization") },
          data: tmpDrugData,
        }).then((res)=>{
            console.log(res);
            dispatch(keepDrugData(tmpDrugData));
        })
     
    };
  };

export default function reducer(state = initialState, action = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "drug/KEEP": {
      return { drugs: [...state.drugs, action.drugs] };
    }
    case "drug/LOAD": {
      return { drugs: [...action.drugs] };
    }
    // do reducer stuff
    default:
      return state;
  }
}
