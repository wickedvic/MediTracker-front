const defaultState = {
    patient: null
}

function patLoginReducer(state=defaultState.patient, action) {
    switch (action.type) {
        case "LOGIN_PATIENT":
            // console.log("action", action)
            if (action.payload.user) {
                return action.payload
            }
            return state
        case "LOGOUT":
            localStorage.clear()
            return null;
        default:
            return state;
            break;
    }
}

export { patLoginReducer } 