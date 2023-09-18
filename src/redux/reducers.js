import { combineReducers } from "redux";
import profileReducer from "./profileSlice";
import generalReducer from "./generalSlice";
import peopleReducer from "./peopleSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  general: generalReducer,
  people: peopleReducer,
});

export default rootReducer;
