import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import users from "./modules/users";
  import drugs from "./modules/drugs";
  import friends from "./modules/friends";
  
  const middlewares = [thunk];
  const enhancer = applyMiddleware(...middlewares);
  const rootReducer = combineReducers({ users, drugs, friends });
  
  const store = createStore(rootReducer, enhancer);
  
  export default store;