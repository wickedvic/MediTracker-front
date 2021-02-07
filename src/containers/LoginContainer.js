import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const LoginContainer = (props) => {
    let history = useHistory();

    const docClick = () => {
        localStorage.setItem("user", "doctor")
        history.push("/doctorlogin")
    }

    const patientClick = () => {
        localStorage.setItem("user", "patient")
        history.push("/patientlogin")
    }

    return (
        <>
            <p>Log in as...</p>
            <Button variant="outlined" onClick={docClick}>Doctor</Button>
            <Button variant="outlined" onClick={patientClick}>Patient </Button>
        </>
    )
}

export default LoginContainer 
