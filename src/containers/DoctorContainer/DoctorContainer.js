import React, { Component, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./DoctorContainerStyles";
import { connect } from "react-redux";
import PatientDetails from "../../components/PatientDetails/PatientDetails";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

class DoctorLanding extends React.Component {
  state = {
    users: [],
  
  };

  componentDidUpdate(prevProps) {
    if (this.props.doctor && prevProps !== this.props) {
        let token = localStorage.getItem("token")
        if (!token) {
            token = this.props.doctor.jwt
        }
        const configObj = {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        fetch(`http://localhost:3000/api/v1/doctors/${this.props.doctor.user.id}`, configObj)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ users: res.users });
        });
    }
  }
  componentDidMount() {
    if (this.props.doctor) {
        const configObj = {
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        fetch(`http://localhost:3000/api/v1/doctors/${this.props.doctor.user.id}`, configObj)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ users: res.users });
        });
    }
  }

  renderPatients = () => {
console.log(this.state.users)

    return ( 
    
      this.state.users !== [] ? 
      this.state.users.map( user => <PatientDetails key={user.id} patient={user}/>)
      
      :
      <p> Loading... </p>
     
    )}
  
  




  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.doctor ? (
          <Grid container spacing={3} align="center" justify="center">
            <Grid item xs={8} m={4}>
              <Grid container spacing={3}>
                {this.renderPatients()}
              </Grid>
            </Grid>
          </Grid>
        ) : (
         <p> Loading... </p>
        )}
      </div>
    );
  }
}

const msp = (state) => {
  return { doctor: state.doctor };
};

export default connect(msp)(
  withStyles(useStyles, { withTheme: true })(DoctorLanding)
);
