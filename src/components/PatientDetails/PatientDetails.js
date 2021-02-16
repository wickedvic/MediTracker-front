import React from "react";
import useStyles from "./PatientDetailsStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const PatientDetails = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Typography component="span">
        <Card className={classes.root}>
          <CardContent className={classes.card}>
            <h5>{props.patient.name}</h5>
            <img className={classes.image} src={props.patient.image} />
            <NavLink to={`/patients/${props.patient.id}`}>
              <br></br>
              <Button className={classes.button} variant="outlined" color="primary"> Patient's Meds </Button>
            </NavLink>
          </CardContent>
        </Card>
      </Typography>
    </Grid>
  );
};

export default PatientDetails;
