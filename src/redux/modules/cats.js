// import { catApi } from "../../api/catApi";
// import { useParams } from "react-router-dom";

// // Actions
// const LOAD = "cat/LOAD";

// const initialState = catData{};

// export function loadCatData(catData) {
//   return { type: LOAD, cats: catData };
// }

// //middlewares
// export function loadCatDataMW() {
//   return function (dispatch) {
//     catApi
//       .apiMyCatStatus
//       .then((response) => {
//         console.log(response.data, "읭읭");
//         // dispatch(loadCatData(response.data));
//       })
//       .catch((err) => console.log(err));
//   };
// }

// export default function reducer(state = initialState, action = {}) {
//   //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
//   //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
//   switch (action.type) {
//     case "cat/LOAD": {
//       return { cats: cats.state };
//     }
//     // do reducer stuff
//     default:
//       return state;
//   }
// }
