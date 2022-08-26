import { drugApi } from "../../api/basicAPI";

// Actions
const LOAD = "week/LOAD";
const KEEP = "week/KEEP";

const initialState = {
  weeks: [],
};

export function loadWeekData(myWeek) {
  return { type: LOAD, weeks: myWeek };
}
export function keepWeekData(myDrug) {
  return { type: KEEP, weeks: myDrug };
}

//middlewares
export function loadWeekDataMW(myname, params) {
  return function (dispatch) {
    drugApi
      .apiDrugWeek(myname, params)
      .then((response) => {
        console.log(response.data);
        dispatch(loadWeekData([...response.data]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const keepWeekDataMW = (data, customColor) => {
  return function (dispatch) {
    const tmpData = {
      dayOfWeekValue: new Date().getDay(),
      customColor: customColor,
      ...data,
    };
    dispatch(keepWeekData(tmpData));
  };
};

export default function reducer(state = initialState, action = {}) {
  //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
  //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
  switch (action.type) {
    case "week/LOAD": {
      return { weeks: [...action.weeks] };
    }
    case "week/KEEP": {
      return { weeks: [...state.weeks, action.weeks] };
    }
    // do reducer stuff
    default:
      return state;
  }
}
