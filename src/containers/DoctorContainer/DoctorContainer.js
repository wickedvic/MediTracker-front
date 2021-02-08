import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./DoctorContainerStyles";
import { connect } from "react-redux";
import PatientDetails from "../../components/PatientDetails/PatientDetails";
import { withStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

class DoctorLanding extends React.Component {
  state = {
    patients: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props.doctor && prevProps !== this.props) {
      fetch(`http://localhost:3000/api/v1/doctors/${this.props.doctor.user.id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ patients: res.patients });
        });
    }
  }
  componentDidMount() {
    if (this.props.doctor) {
      fetch(`http://localhost:3000/api/v1/doctors/${this.props.doctor.user.id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ patients: res.patients });
        });
    }
  }

  renderPatients = () => {
    return this.state.patients.map((pt) => (
      <PatientDetails key={pt.id} patient={pt} />
    ));
  };

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
          <Loading />
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
