import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { updatePatient } from '../../redux/actions'



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
            // {console.log(this.props.patient.user)}
        this.props.updatePatient(this.props.patient.user.id, patientObj)
    }
    
   
    render(){
        return(
            
        
            <div className="login-page-container">
                {console.log(this.props.patient)}
                <div id="edit-profile-form" className="login-signup-form">
                    <div className="edit-profile-header">
                        <i className="fas fa-user-edit"></i>
                        <h1>Edit Profile</h1>
                    </div>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="name" type="text" placeholder="Name" value={this.state.name}/>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="password" type="text" placeholder="Password"/>
                        </div>
                    </div> 

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="email" type="text" placeholder="Email" value={this.state.email}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Picture</label>
                        <div className="control">
                            <input onChange={(event) => this.handleInputChange(event)}
                            className="input" name="image" type="text" placeholder="Picture" value={this.state.image}/>
                        </div>
                    </div>

                    <div className="control form-submit-container">
                
                        <button onClick={this.updatePatient}
                        className="button is-link">Update</button>
                        {/* eslint-disable-next-line */}
                        <span>  Or  <Link to="/profile">
                         Back</Link></span>
                    </div>
                </div>
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