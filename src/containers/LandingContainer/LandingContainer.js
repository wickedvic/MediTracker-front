// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import LoginContainer from "../LoginContainer/LoginContainer";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import useStyles from "./LandingStyles";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginContainer from "../LoginContainer/LoginContainer";



const LandingContainer = (props) => {
  const classes = useStyles();

  return (
    <>
    {props.doctor ? <Redirect to="/patients"/> : null}
    {props.patient ? <Redirect to='/mymeds'/> : null}
    <div>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginContainer/>
      </Grid>
    </Grid>
    </div>
     </>
  );
  // return (
  //   <>
  //   {props.doctor ? <Redirect to="/patients"/> : null}
  //   {props.patient ? <Redirect to='/mymeds'/> : null}
  //   <div>
  //     <Grid container spacing={2}>
  //       <Grid item xs={12}>
  //         <Grid container spacing={8} align="center" justify="center">
  //           <Grid item xs={8}>
  //             <Paper className={classes.loginBox}>
  //             <Typography component="span">
  //                 <Card className={classes.root}>
  //                   <CardContent>
  //                     <LoginContainer />
  //                   </CardContent>
  //                 </Card>
  //               </Typography>
  //             </Paper>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //     </div>
  //     </>
  // );
};

const msp = (state) => {
  return {doctor: state.doctor, patient: state.patient}
}

export default connect(msp)(LandingContainer) 
