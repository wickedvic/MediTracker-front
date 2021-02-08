import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import useStyles from "./LoginStyles"
import { connect } from 'react-redux'



const LoginContainer = (props) => {
    const classes = useStyles()
    const history = useHistory();

    const docClick = () => {
        localStorage.setItem("user", "doctor")
        props.addDocUser()
        history.push("/doctorlogin")
    }

    const patientClick = () => {
        localStorage.setItem("user", "patient")
        props.addPatUser()
        history.push("/patientlogin")
    }

    return (
        <>
            <p>Welcome to MEDI-TRACKER!</p>
            <p>Log in as...</p>
            <Button className={classes.button} variant="outlined" color="primary" onClick={docClick}>Doctor</Button>
            <Button className={classes.button} variant="outlined" color="secondary" onClick={patientClick}>Patient </Button>
        </>
    )
}

const mdp = (dispatch) => {
    return {
        addDocUser: () => dispatch({type: "docuser"}),
        addPatUser: () => dispatch({type: "patuser"})
    }
  }

  export default connect(null, mdp)(LoginContainer) 