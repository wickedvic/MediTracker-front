import "./App.css";
import React from "react";
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom"
import LandingContainer from './containers/LandingContainer/LandingContainer';
import NavBar from './components/NavBar/NavBar';
import DocLogin from './components/DocLogin/DocLogin'
import PatLogin from './components/PatLogin/PatLogin';
import { Component } from 'react';
import DoctorContainer from './containers/DoctorContainer/DoctorContainer';
import PatientContainer from './containers/PatientContainer/PatientContainer';



function App(props) {

  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/doctorlogin" render={() =>(<DocLogin/>)}/>
      <Route path="/allpatients" render={() => (<DoctorContainer/>)}/>
      <Route path="/patientlogin" render={() =>(<PatLogin/>)}/>
      <Route path="/mymeds" render={() => (<PatientContainer/>)}/>
      <Route path="/" render={() =>(<LandingContainer/>)}/>
    </Switch>
    </>
  );
}

export default App;
