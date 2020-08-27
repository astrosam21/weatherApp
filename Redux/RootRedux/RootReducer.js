import { combineReducers } from "redux";
import MainReducer from "../Reducers/MainReducer/MainReducer";

const RootReducer = combineReducers({
  MainReducer: MainReducer,
});

export default RootReducer;
