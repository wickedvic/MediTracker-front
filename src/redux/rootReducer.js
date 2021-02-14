import { combineReducers } from "redux";

const defaultState = {
  patient: null,
  doctor: null
}



function doctorLoginReducer(prevState = defaultState.doctor, action) {
  switch (action.type) {
      case "LOGIN_DOCTOR":
          // console.log("action", action)
          if (action.payload.user) {
              return action.payload
          }
          return prevState
      case "LOGOUT":
          localStorage.clear()
          return null
      default:
          return prevState;
          break;
  }
}

function patLoginReducer(prevState = defaultState.patient, action) {
  switch (action.type) {
      case "LOGIN_PATIENT":
          // console.log("action", action)
          if (action.payload.user) {
              return action.payload
          }
          return prevState
      case "LOGOUT":
          localStorage.clear()
          return null;
      case "UPDATE_PATIENT":
        return action.payload
      default:
          return prevState;
          break;
  }
}




const rootReducer = combineReducers({
  doctor: doctorLoginReducer,
  patient: patLoginReducer,

});


export default rootReducer;