import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import drugs from "./modules/drugs";
import friends from "./modules/friends";
import users from "./modules/users";
import weeks from "./modules/weeks"
import cats from "./modules/cats"
import { composeWithDevTools } from "@redux-devtools/extension";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ users, drugs, friends, weeks, cats});

const store = createStore(rootReducer, composeWithDevTools(enhancer));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
