import { useHistory } from "react-router-dom";


export function docLoginAction(doc, dispatch) {
    return function(){
        const config = {
        method: "POST",
        headers: {
            accepts: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify( {user: doc} )
        }
        fetch('http://localhost:3000/api/v1/login', config)
        .then(res => res.json())
        .then(res =>{ 
        dispatch({ type: "LOGIN_DOCTOR", payload: res})
        localStorage.setItem("token", res.jwt)
        localStorage.setItem("user", "doctor")
        })
    }
}

export function ptLoginAction(pt, dispatch) {
    return function(){
        const config = {
        method: "POST",
        headers: {
            accepts: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify( {user: pt} )
        }
        fetch('http://localhost:3000/api/v1/patientlogin', config)
        .then(res => res.json())
        .then(res =>{ 
        console.log(res)
        dispatch({ type: "LOGIN_PATIENT", payload: res})
        localStorage.setItem("token", res.jwt)
        localStorage.setItem("user", "patient")
        })
    }

}

export function sessionUserAction(user, dispatch) {
    return function(){
        if (localStorage.getItem("user") === "doctor") {
            dispatch({ type: "LOGIN_DOCTOR", payload: user})
        } else if (localStorage.getItem("user") === "patient") {
            dispatch({ type: "LOGIN_PATIENT", payload: user})
        }
    }

}

export function signUp(userInfo){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/signup', {
           method: "POST", 
           headers: {
               'Content-Type':'application/json', 
               'Accept': 'application/json'
           },
           body: JSON.stringify({
               user: {
                   name: userInfo.name,
                   email: userInfo.email,
                   password_digest: userInfo.password,
                   image: userInfo.image,
                   doctor_id: 1
                   
                           
               }
           }) 
        })
        .then( r => r.json())
        .then( data => {
            // dispatch(setCurrentUser(data.user))
            localStorage.setItem("jwt", data.jwt)
        })

        
    }
}