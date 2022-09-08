import { catApi } from "../../api/catApi";

// Actions
// 고양이를 불러와서 덮어씌우기만 하면 되니까 LOAD 액션만 만들었습니다.
const LOAD = "cat/LOAD";

// cats State만 있으면 될 것 같습니다.
const initialState = {
  cats: [],
};

// Action 함수를 작성했습니다.
// 액션함수는 리듀서에게 제공할 데이터 catData와 LOAD 한다는 방향성만 정해줍니다.
// catData라는 프로퍼티에 담아주었습니다.
export function loadCatData(catData) {
  return { type: LOAD, catData: catData };
}

//middlewares
// dispatch로 바로 액션함수를 호출하기엔 데이터가 부족합니다.
// 액션함수 이전 데이터를 추가로 처리하기 위해 미들웨어를 적용했습니다.
// 클라이언트는 미들웨어를 name만 제공하여 호출합니다.
export function loadCatDataMW(name) {
  // 미들웨어는 name을 이용해 지지고 볶아서 catData를 만듭니다.
  // 미들웨어가 catData를 이용해 실제 액션함수를 재호출합니다.
  // username은 고양이 주인입니다. 필요할 것 같아 임시로 추가해뒀습니다.
  return function (dispatch) {
    catApi
      .apiSomeCatStatus(name)
      .then((response) => {
        console.log(response.data);
        dispatch(loadCatData({ ...response.data, username: name }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//reducer
//dispatch는 액션함수의 return 즉, 타입과 action을 reducer에게 제공합니다.
//reducer는 타입에 따라 state를 수정합니다.
//덮어씌우기만 하면 되므로 cats에 action.catData를 담아주었습니다.
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "cat/LOAD": {
      return { cats: action.catData };
    }
    // do reducer stuff
    default:
      return state;
  }
}

// 이후
// configStore에서 store에 cats를 포함시켜줍니다.
// index.tsx에서 store를 Provider로 App 전체에 제공합니다.

// App 전체가 리랜더링 된다면 매우 비효율적일 것입니다.
// 그로인해 이 리듀서를 구독하는 페이지만 리랜더링 됩니다.
// 구독하는 컴포넌트를 selector로 지정합니다. useSelector입니다.

// SelectBox 컴포넌트가 selected가 바뀔때마다 useEffect를 통해 dispatch를 해옵니다.
// load가 이루어지고 store의 cats모듈의 cats state가 수정됩니다.
// CatPage는 useSelector를 이용하여 cats모듈의 cats state를 구독하여 받아옵니다.
//

// 더이상 const catData = useSomeCatSatus(); 는 필요 없습니다.

//빛하쥰...✨💫