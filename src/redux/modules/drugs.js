// import axios from "axios";
// import useShowMeTheDrug from "../../hooks/useShowMeTheDrug";

// // Actions
// const KEEP = "drug/KEEP";
// const LOAD = "drug/AWAY";

// const initialState = {
//   drugs: [],
// };

// export function keepDrugData(drugs) {
//   return { type: KEEP, drugs };
// }

// export function loadDrugData(myDrug) {
//     return {type:LOAD, drug:myDrug}
// }

// //middlewares
// //로그인 입력값(userData)을 받아 로그인 후 로그인 정보를 로그인 데이타(authorization)에 저장

// export default function reducer(state = initialState, action = {}) {
//   //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
//   //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
//   switch (action.type) {
//     case "drug/KEEP": {
//       return { drugs: [...state.drugs,action.drugs] };
//     }
//     case "drug/LOAD": {
//         return { drugs: action.drugs };
//       }
//     // do reducer stuff
//     default:
//       return state;
//   }
// }