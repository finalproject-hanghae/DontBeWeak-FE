import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import drugs from "./modules/drugs";
import friends from "./modules/friends";
import users from "./modules/users";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ users, drugs, friends });

const store = createStore(rootReducer, enhancer);

export default store;
