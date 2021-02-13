import React from "react"

import Signup from "../../components/Signup/Signup"
import { connect } from "react-redux"
import { signUp } from "../../redux/actions"
import { useHistory } from "react-router-dom";

class SignupPage extends React.Component {
    constructor(){
        super();

    }


    createUser = (e, userInfo) => {
        e.preventDefault();
        this.props.signUserUp(userInfo); 
    }

    

    
    
    render(){
        return(
            <div>
           
            
            < Signup createUser={this.createUser} />
            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUserUp: (info) => {dispatch(signUp(info))},
})

export default connect(null, mapDispatchToProps)(SignupPage);
