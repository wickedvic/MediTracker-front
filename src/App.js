import "./App.css";
import React from "react";
  // import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom"
import LandingContainer from './containers/LandingContainer/LandingContainer';
import NavBar from './components/NavBar/NavBar';
import DocLogin from './components/DocLogin/DocLogin'
import PatLogin from './components/PatLogin/PatLogin';


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
