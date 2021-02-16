// import React from 'react'
// import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import useStyles from "./LoginStyles"
// import { connect } from 'react-redux'
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const LoginContainer = (props) => {
    const classes = useStyles()
    const history = useHistory();

    const docClick = () => {
        history.push("/doctorlogin")
    }

    const patientClick = () => {
        history.push("/patientlogin")
    }

    return (
        <>

<div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalHospitalIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          <p>Welcome To MEDI-TRACKER!</p>
          <p>Choose either of the following...</p>
          </Typography>
          
          <Button className={classes.button} variant="contained" color="primary" onClick={docClick}>Doctor</Button>
          <br></br> 
          OR
          <br></br> 
          <br></br> 
        
          <Button className={classes.button} variant="contained" color="secondary" onClick={patientClick}>Patient </Button> 
            <Grid container>
              <Grid item xs>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
         
        </div>
            {/* <p>Welcome To MEDI-TRACKER!</p>
            <p>Choose either of the following...</p>
            <Button className={classes.button} variant="outlined" color="primary" onClick={docClick}>Doctor</Button>
            <br></br>
            <Button className={classes.button} variant="outlined" color="secondary" onClick={patientClick}>Patient </Button> */}
        </>
    )
}

export default LoginContainer 