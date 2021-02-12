// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import useStyles from "./DocLoginStyles";
import { withStyles } from "@material-ui/core/styles";
// import { TextField } from "@material-ui/core";
import { Component } from "react";
// import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { docLoginAction } from "../../redux/actions";
import { withRouter } from 'react-router-dom';



import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class DocLogin extends Component {
  state = {
    email: "",
    password: "",
  };

  formEdit = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault()
    this.props.doctorLogin(this.state);
    if (localStorage.getItem("token") !== "undefined") {
      this.props.history.push("/patients")
    }
  };


  render() {
    const { classes } = this.props;
    // console.log(this.props.doctor);
    return (
      <div>

<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <br></br>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <br></br>
        <Typography component="h1" variant="h5">
          Doctor Login
        </Typography>
        <br></br>
        <br></br>
        <form className={classes.form} noValidate>
          <TextField
          onChange={this.formEdit}
          // className={classes.textField}
          value={this.state.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <br></br>
          <br></br>
          <TextField
          onChange={this.formEdit}
          className={classes.textField}
          value={this.state.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <br></br>
          <br></br>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br></br>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.submitHandler}
          >
            Sign In
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </div>
      
    </Container>



        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3} align="center" justify="center">
              <Grid item xs={6}>
                <Paper className={classes.loginBox}>
                  <Typography component={"span"}>
                    <Card className={classes.root}>
                      <CardContent>
                        <h3>Doctor Login </h3>
                        <form>
                          <TextField
                            onChange={this.formEdit}
                            className={classes.textField}
                            value={this.state.email}
                            name="email"
                            type="text"
                            label="email"
                          />
                          <br></br>
                          <TextField
                            onChange={this.formEdit}
                            className={classes.textField}
                            value={this.state.password}
                            name="password"
                            type="password"
                            label="password"
                          ></TextField>
                          <br />
                          <br />
                          <Button type="submit" onClick={this.submitHandler}>
                            Log in
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </div>
    );
  }
}
const msp = (state) => {
  return { doctor: state.doctor };
};

const mdp = (dispatch) => {
  return { doctorLogin: (doc) => dispatch(docLoginAction(doc, dispatch)) };
};

export default connect(msp, mdp)(withStyles(useStyles, { withTheme: true })(withRouter(DocLogin)))
