import { combineReducers } from "redux";
import appointmentReducer from "./reducerAdd";

const reducers = combineReducers({
  appointment: appointmentReducer,
});

export default reducers;
