import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LoginContainer from "../LoginContainer/LoginContainer";
import NavBar from "../../components/NavBar/NavBar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect, UseEffect } from "react-redux";
import useStyles from "./PatientContainerStyles";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { FormatListNumberedRtlOutlined } from '@material-ui/icons';

import Loading from '../../components/Loading/Loading'
import PtMed from "../../components/PtMed/PtMed";

class PatientContainer extends Component {
  
  state = {
    patient: null
}


componentDidUpdate(prevProps){
    if (this.props.patient && prevProps !== this.props) {
        let token = localStorage.getItem("token")
        if (!token) {
            token = this.props.patient.jwt
        }
        const configObj = {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`}
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.patient.user.id}`, configObj)
        .then(res => res.json())
        .then(res => this.setState({ patient: res }))
     }
 }

componentDidMount() {
    if (this.props.patient) {
        const configObj = {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        fetch(`http://localhost:3000/api/v1/doctors/${this.props.patient.user.id}`, configObj)
        .then(res => res.json())
        .then(res => {
            this.setState({ patient : res})
        })
    }
}

filterTime = (time) => {
  return this.state.patient.user_meds.filter(med => med.time === time)
}


render() {
    const { classes } = this.props
return (

    <div > 

{this.state.patient ? 
                <Grid container spacing={3} align="center" justify="center" >
                    <Grid item xs={8} m={4}>
                    <Paper className={classes.loginBox}>

                    <Grid container align="center" justify="center" spacing={3}>
                    
                    <Grid item xs={12}><h2>Medications for {this.props.patient.user.name}</h2></Grid>
                            <>{this.filterTime("morning").length > 0 ?
                                <>
                        
                                <h3>Take With Breakfast:</h3> 
                                {this.filterTime("morning").map(med => <Grid item xs={12}><PtMed key={med.med.id} med={med}/></Grid>)}
                                </>
                            : null
                            }</>
                            <>{this.filterTime("afternoon ").length > 0 ?
                                <>
                                <h3>Take With Lunch:</h3> 
                                {this.filterTime("afternoon ").map(med => <Grid item xs={12}><PtMed key={med.med.id} med={med}/></Grid>)}
                                </>
                            : null
                            }</>
                            <>{this.filterTime("evening ").length > 0 ?
                                <>
                                <h3>Take With Dinner:</h3> 
                                {this.filterTime("evening ").map(med => <Grid item xs={12}><PtMed key={med.med.id} med={med}/></Grid>)}
                                </>
                            : null
                            }</>
                        </Grid>
                    </Paper>

                
                </Grid>
            </Grid>
            : 
            <p> Loading... </p>
        }
            </div>
             )}
            }
            
            const msp = (state) => {
                return {patient: state.patient}
            }
            
            export default connect(msp)(withStyles(useStyles, { withTheme: true })(PatientContainer))            