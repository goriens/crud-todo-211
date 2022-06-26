import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./Todo/reducer";
const rootReducer = combineReducers({
  reducer,
});
export const store = legacy_createStore(rootReducer);
console.log("store", store.getState());
