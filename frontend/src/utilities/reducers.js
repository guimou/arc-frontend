import { combineReducers } from "redux";
import { appReducer } from "../App/reducers";
import { homeReducer } from "../Home/reducers";
import { photoReducer } from "../Photo/reducers";

const rootReducer = combineReducers({
  appReducer,
  homeReducer,
  photoReducer,
});

export default rootReducer;
