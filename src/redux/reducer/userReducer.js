const defaultState = {
    user: localStorage.getItem("user")
}

function userReducer(state=defaultState.user, action) {
    switch (action.type) {
        case "docuser":
            console.log('doc')
            return "doctor"
            break;
        case "patuser":
            console.log('patient')
            return "patient"
        default: 
            return state;
            break;
    }
}

export { userReducer } 