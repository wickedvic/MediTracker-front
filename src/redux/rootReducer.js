import { combineReducers } from "redux";
import PatientDetails from "../components/PatientDetails/PatientDetails";
import { doctorLoginReducer } from './reducer/doctorLoginReducer'
import { patLoginReducer } from './reducer/patientLoginReducer'

const defaultState = {
  user: localStorage.getItem("user"),
};


const rootReducer = combineReducers({
    doctor: doctorLoginReducer,
    patient: patLoginReducer,

});

export default rootReducer;
