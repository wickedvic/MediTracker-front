import React from "react"
import SignUpStyles from './SignupStyles'


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
import Container from '@material-ui/core/Container';

const sample = {
    width: '40vw'
}

class Signup extends React.Component {
    constructor(){
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            doctor_id: 1,
            image:"https://robohash.org/fugitdeleniticonsequuntur.png?size=300x300&set=set1"
           
        }
    }
   
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
   
    render(){
        
        return(
            <div>
 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <br></br>
        <Typography component="h1" variant="h5">
          Add A New Patient
        </Typography>
        <br></br>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
              onChange={(event) => this.handleInputChange(event)}
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={(event) => this.handleInputChange(event)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={(event) => this.handleInputChange(event)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Confirm Patient Details"
              />
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Button
          onClick={(event) => this.props.createUser(event, this.state)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
       
      </Box>
    </Container>



            </div>
            
        )
    }
}

export default Signup



// https://www.facebook.com/photo/?fbid=3860443317341292&set=a.126251467427181



{/* <div style={sample}>
            
            <h1 className="is-size-1">Sign Up</h1>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input onChange={(event) => this.handleInputChange(event)}
                    className="input" name="email" type="text" placeholder="Email"/>
                </div>
            </div> 

            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input onChange={(event) => this.handleInputChange(event)}
                    className="input" name="name" type="text" placeholder="Name"/>
                </div>
            </div>

    
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input onChange={(event) => this.handleInputChange(event)}
                    className="input" name="password" type="password" placeholder="Password"/>
                </div>
            </div>

            <div className="control">
         
                <button onClick={(event) => this.props.createUser(event, this.state)}
                className="button is-primary is-light">Submit </button>
            
            </div>
       
        </div> */}