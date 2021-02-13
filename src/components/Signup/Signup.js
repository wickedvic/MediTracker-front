import React from "react"

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
            <div style={sample}>
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
            </div>
        )
    }
}

export default Signup



// https://www.facebook.com/photo/?fbid=3860443317341292&set=a.126251467427181