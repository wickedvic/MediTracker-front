import { combineReducers } from "redux";
import { userReducer } from './reducer/userReducer'

const defaultState = {
  user: localStorage.getItem("user"),
};


const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
