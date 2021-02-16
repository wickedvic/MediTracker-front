import { Redirect, useHistory } from "react-router-dom";
import { UPDATE_PATIENT } from "./actionTypes"
import Swal from 'sweetalert2'


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
        dispatch({ type: "LOGIN_PATIENT", payload: res})
        localStorage.setItem("token", res.jwt)
        localStorage.setItem("user", "patient")
        
    }
        )}

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
            if(data.error === "failed to create patient"){
                Swal.fire({
                    title: 'Unable to Create Patient!',
                    text: `${data.error}`,
                    icon: 'error',
                    confirmButtonText: 'Back'
                })
            } else {
            localStorage.setItem("jwt", data.jwt)
            Swal.fire({
                title: 'Patient Created',
                text: `Patient was added successfully!`,
                icon: 'success'})
            }
        })

        
    }
}

export function updatePatient (patientID, patientObj) {
    return function (dispatch, getState){
    fetch(`http://localhost:3000/api/v1/users/${patientID}`, {
        method: "PATCH", 
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
            "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          user: patientObj
        })
    })
    .then(resp => resp.json())
    .then(updatedProfile => {
        dispatch({type: UPDATE_PATIENT, payload: updatedProfile})
        Swal.fire({
            title: 'Profile Updated',
            text: `Updates were made successfully!`,
            icon: 'success'})
    })

}}


