import { combineReducers } from "redux";
import MainReducer from "../Reducers/MainReducer/MainReducer";

const RootReducer = combineReducers({
  Reducer: MainReducer,
});

export default RootReducer;
