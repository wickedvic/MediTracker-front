import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './NavStyles'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from "react-router-dom"





const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const clickHandler = () => {
    history.push("/allpatients");
  }

  const redirectHome = () => {
    history.push("/")
  }

  const clearUser = () => {
    props.logout()
    redirectHome()
  }

  const redirectPatientCreate = () => {
    history.push("/signup")
    

  }

  const redirectUserMeds = () => {
    history.push("/mymeds")
  }

  const redirectEditPt = () => {
    history.push("/profile/edit")
  }

  const redirectCalendar = () => {
    history.push("/calendar")
  }

  const redirectNotes = () => {
    history.push("/notes")
  }
  
    return (
      
      <AppBar position="static" color="primary" className={classes.navMargin}>
        <Toolbar >
        <img onClick={redirectHome} className={classes.img} src="https://i.imgur.com/SF5Sczc.png" alt="doc-img"/>
       {props.doctor ? 
       <Typography className={classes.title}> 
       <Button color="inherit" onClick={clickHandler}>Manage Patients</Button> 
        <Button color="inherit" onClick={redirectPatientCreate}>Add A Patient</Button>
        <Button color="inherit" onClick={redirectCalendar}>Calendar</Button>
        <Button color="inherit" onClick={redirectNotes}>Notes</Button>
          </Typography >
          : null}

{props.patient ? 
            <Typography className={classes.title}> 
                <Button color="inherit" onClick={redirectUserMeds}>Manage Meds</Button> 
                <Button color="inherit" onClick={redirectEditPt}>Edit Profile</Button>
                {/* <Button color="inherit" onClick={redirectCalendar}>Calendar</Button> */}
            </Typography> 
            : null}


          {props.doctor || props.patient ? <Button onClick={clearUser} color="inherit">Logout</Button> : null}
        </Toolbar>
      </AppBar>
    )
}

const msp = (state) => {
  // console.log("Current Redux State", state)
  return {doctor: state.doctor, patient: state.patient}
}

const mdp = (dispatch) => {
  return { logout: () => dispatch({type: "LOGOUT"})}
}



export default connect(msp, mdp)(NavBar)