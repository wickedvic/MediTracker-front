import "./App.css";
import React from "react";
  // import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom"
import LandingContainer from './containers/LandingContainer/LandingContainer';
import NavBar from './components/NavBar/NavBar';
import DocLogin from './components/DocLogin/DocLogin'
import PatLogin from './components/PatLogin/PatLogin';
import { Component } from 'react';
import PatientLanding from './containers/PatientContainer/PatientContainer';
import DoctorContainer from './containers/DoctorContainer/DoctorContainer';


// function App(props) {
 
  
//   return (
//     <>
//     <NavBar/>
//     <Switch>
//       <Route path="/doctorlogin" render={() =>(<DocLogin/>)}/>
//       <Route path="/patientlogin" render={() =>(<PatLogin/>)}/>
//       <Route path="/" render={() =>(<LandingContainer/>)}/>
//     </Switch>

//     </>
//   );
// }

class App extends Component {

  state = {
    doctor: null,
    patient: null
  }

  loginHandler = (doc) => {
    console.log(doc)
    const config = {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify( {user: doc} )
    }
    fetch('http://localhost:3000/api/v1/login', config)
    .then(res => res.json())
    .then(res =>{ 
      this.setState({ doctor: res})
      console.log(res)
      localStorage.setItem("token", res.jwt)
    })
  }

  ptLoginHandler = (pt) => {
    const config = {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify( {user: pt} )
    }
    fetch('http://localhost:3000/api/v1/patientlogin', config)
    .then(res => res.json())
    .then(res =>{ 
      this.setState({ patient: res})
      console.log(res)
      localStorage.setItem("token", res.jwt)
    })
  }

  render() {
    return (
      <>
     <NavBar/>
     <Switch>
       <Route path="/doctorlogin" render={() =>(<DocLogin loginHandler={this.loginHandler}/>)}/>
       <Route path="/allpatients" render={() => (<DoctorContainer doctor={this.state.doctor}/>)}/>
        <Route path="/patientlogin" render={() =>(<PatLogin loginHandler={this.ptLoginHandler}/>)}/>
       <Route path="/mymeds" render={() => (<PatientLanding/>)}/>
       <Route path="/" render={() =>(<LandingContainer/>)}/>
     </Switch>
     </>
    )
  }
}

export default App;
