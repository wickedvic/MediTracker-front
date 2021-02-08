import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LoginContainer from "../LoginContainer/LoginContainer";
import NavBar from "../../components/NavBar/NavBar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import useStyles from "./PatientContainerStyles";
import { Redirect } from 'react-router-dom'
// import Loading from '../../components/Loading/Loading'

const PatientContainer = (props) => {
  const classes = useStyles();

  return (
    <div>
      {props.patient ? (
        <Grid container spacing={3} align="center" justify="center">
          <Grid item xs={8} m={4}>
            <Paper className={classes.loginBox}>
              <Grid container spacing={3}>
                "YOYO"
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        "no patient sry"
      )}
    </div>
  );
};

const msp = (state) => {
  return { patient: state.patient };
};

export default connect(msp)(PatientContainer);
