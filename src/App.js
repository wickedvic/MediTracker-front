import "./App.css";
// import Grid from "@material-ui/core/Grid";
import React from "react";
// import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom"
import LandingContainer from './containers/LandingContainer';
import NavBar from './components/NavBar';
import DocLogin from './components/DocLogin'
import PatLogin from './components/PatLogin';


function App(props) {
 
  
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path="/doctorlogin" render={() =>(<DocLogin/>)}/>
      <Route path="/patientlogin" render={() =>(<PatLogin/>)}/>
      <Route path="/" render={() =>(<LandingContainer/>)}/>
    </Switch>

    </>
  );
}

export default App;
