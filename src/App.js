import "./App.css";
import React, { useEffect }from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom"
import LandingContainer from './containers/LandingContainer/LandingContainer';
import NavBar from './components/NavBar/NavBar';
import DocLogin from './components/DocLogin/DocLogin'
import PatLogin from './components/PatLogin/PatLogin';
import { Component } from 'react';
import DoctorContainer from './containers/DoctorContainer/DoctorContainer';
import PatientContainer from './containers/PatientContainer/PatientContainer';
import { sessionUserAction } from './redux/actions'
import PatientContainerSpecs from './containers/PatientContainerSpecs/PatientContainerSpecs';







function App(props) {

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userType = localStorage.getItem("user")
    const configObj = {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`}
    }
    if (token && userType === "doctor") {
      fetch("http://localhost:3000/api/v1/mdprofile", configObj)
      .then(res => res.json())
      .then(res => props.sessionUser(res))
      } else if (token && userType === "patient") {
      fetch("http://localhost:3000/api/v1/ptprofile", configObj)
      .then(res => res.json())
      .then(res => props.sessionUser(res))
    } else {
      console.log("no user logged")
    }
  })

  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/doctorlogin" render={() =>(<DocLogin/>)}/>
      <Route path="/patients" render={() => (<PatientContainerSpecs/>)}/>
      <Route path="/patientlogin" render={() =>(<PatLogin/>)}/>
      <Route path="/mymeds" render={() => (<PatientContainer/>)}/>
      <Route path="/" render={() =>(<LandingContainer/>)}/>
    </Switch>
    </>
  );
}

const mdp = (dispatch) => {
  return { sessionUser: (user) => dispatch(sessionUserAction(user, dispatch))}
}

export default connect(null, mdp)(App)
