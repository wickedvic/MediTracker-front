import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { updatePatient } from '../../redux/actions'



import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



class PtEdit extends React.Component {
    constructor(){
        super();
        
        this.state = {
            name: "",
            password: "",
            email: "",
            image: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updatePatient = (e) => {
        e.preventDefault()
        const patientObj = this.state
            {console.log(this.props.patient.user)}
        this.props.updatePatient(this.props.patient.user.id, patientObj)
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
                     Edit Your Profile
                   </Typography>
                   <br></br>
                   <form noValidate>
                     <Grid container spacing={2}>
                       <Grid item xs={12} >
                         <TextField
                         onChange={(event) => this.handleInputChange(event)}
                         variant="outlined"
                         required
                        fullWidth
                         className="input" name="name" type="text" placeholder="Name" value={this.state.name}
                         />
                       </Grid>
                       <Grid item xs={12}>
                         <TextField
                         onChange={(event) => this.handleInputChange(event)}
                           variant="outlined"
                           required
                           fullWidth
                           className="input" name="email" type="text" placeholder="Email" value={this.state.email}
                         />
                       </Grid>
                       <Grid item xs={12}>
                         <TextField
                         onChange={(event) => this.handleInputChange(event)}
                           variant="outlined"
                           required
                           fullWidth
                           className="input" name="image" type="text" placeholder="Picture" value={this.state.image}
                         />
                       </Grid>
                       <Grid item xs={12}>
                         <TextField
                         onChange={(event) => this.handleInputChange(event)}
                         value={this.state.password}
                           variant="outlined"
                           required
                           fullWidth
                           className="input" name="password" type="password" placeholder="Password" value={this.state.password}
                         />
                       </Grid>
                      
                       <Grid item xs={12}>
                         <FormControlLabel
                           control={<Checkbox value="allowExtraEmails" color="primary" />}
                           label="Confirm to Update Profile"
                         />
                       </Grid>
                     </Grid>
                     <br></br>
                     <br></br>
                     <Button
                     onClick={this.updatePatient}
                       type="submit"
                       fullWidth
                       variant="contained"
                       color="primary"
                     >
                       Submit
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

const msp = state => {
    return {
        patient: state.patient
    }
}

const mdp = (dispatch) => {
    return {
        updatePatient: (patientID,patientObj) => {dispatch(updatePatient(patientID, patientObj))}
    }
}

export default connect(msp, mdp)(PtEdit) 



// <div className="login-page-container">
//                 {console.log(this.props.patient)}
//                 <div id="edit-profile-form" className="login-signup-form">
//                     <div className="edit-profile-header">
//                         <i className="fas fa-user-edit"></i>
//                         <h1>Edit Profile</h1>
//                     </div>
//                     <div className="field">
//                         <label className="label">Name</label>
//                         <div className="control">
//                             <input onChange={(event) => this.handleInputChange(event)}
//                             className="input" name="name" type="text" placeholder="Name" value={this.state.name}/>
//                         </div>
//                     </div> 

//                     <div className="field">
//                         <label className="label">Password</label>
//                         <div className="control">
//                             <input onChange={(event) => this.handleInputChange(event)}
//                             className="input" name="password" type="text" placeholder="Password"/>
//                         </div>
//                     </div> 

//                     <div className="field">
//                         <label className="label">Email</label>
//                         <div className="control">
//                             <input onChange={(event) => this.handleInputChange(event)}
//                             className="input" name="email" type="text" placeholder="Email" value={this.state.email}/>
//                         </div>
//                     </div>

//                     <div className="field">
//                         <label className="label">Picture</label>
//                         <div className="control">
//                             <input onChange={(event) => this.handleInputChange(event)}
//                             className="input" name="image" type="text" placeholder="Picture" value={this.state.image}/>
//                         </div>
//                     </div>

//                     <div className="control form-submit-container">
                
//                         <button onClick={this.updatePatient}
//                         className="button is-link">Update</button>
//                         {/* eslint-disable-next-line */}
//                         <span>  Or  <Link to="/profile">
//                          Back</Link></span>
//                     </div>
//                 </div>
//             </div>