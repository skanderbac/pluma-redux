import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducer";
import userReducer from "./userReducer";
export default combineReducers({
  authReducer,
  notifyReducer,
  userReducer
});
