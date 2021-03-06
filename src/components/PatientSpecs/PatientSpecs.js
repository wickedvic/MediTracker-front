import React from 'react'
import { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './PatientSpecsStyles'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { ptLoginAction } from '../../redux/actions';
import { withRouter } from 'react-router-dom'
import Loading from '../Loading/Loading'
import MdMed from '../MdMed/MdMed'
import NewMedForm from '../NewMedForm/NewMedForm';

class PatientSpecs extends Component {

    state = {
        user_id: this.props.id,
        user: null,
        add: false
    }


    componentDidMount() {
        const configObj = {
            method: "GET",
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        fetch(`http://localhost:3000/api/v1/users/${this.state.user_id}`, configObj)
        .then(res => res.json())
        .then(res => this.setState({ user: res }))
    }

    refreshMeds = (id) => {
        const updatePatient = {...this.state.user}
        const updatedMeds = updatePatient.user_meds.filter( med => med.id !== id)
        updatePatient['user_meds'] = updatedMeds
        this.setState( {
            user: updatePatient
        })
    }

    refreshMedsEdit = (id, body) => {
        const updatePatient = {...this.state.user}
        const index = updatePatient.user_meds.findIndex( med => med.id === id)
        updatePatient['user_meds'][index].notes = body["notes"]
        updatePatient['user_meds'][index].pill_count = body["pill_count"]
        updatePatient['user_meds'][index].time = body["time"]
        this.setState( {
            user: updatePatient
        })
    }

    clickAddForm = () => {
        this.setState(prev => ({ add: !prev.add}))
    }


    createPatientMed = (body) => {
        body.user_id = this.state.user_id
        const configObj = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:3000/api/v1/user_meds', configObj)
        .then(res => res.json())
        .then(res => this.refreshMedsAdd(res))
    }

    refreshMedsAdd = (pt_med) => {
        const updatePatient = {...this.state.user}
        updatePatient.user_meds.push(pt_med)
        this.setState( {
            user: updatePatient,
            add: false
        })
        console.log(pt_med)
    }


    render() {
        const { classes } = this.props
        const renderMeds = () => {
            console.log(this.state)
            return this.state.user.user_meds.map(med => {
                return <MdMed key={med.id} refreshMedsEdit={this.refreshMedsEdit} refreshMeds={this.refreshMeds} med={med}/>
            })
        }
        return (
            < > 
            {this.state.user ? 
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Grid container spacing={3} align="center" justify="center" >
                        <Grid item xs={9} >
                        <Paper className={classes.loginBox}>
                        <Typography component="span" className={classes.info}>
                            <h2>{this.state.user.name}</h2>
                            <img src={this.state.user.image}/>
                            <h3>Prescribed Medications:</h3>
                            {renderMeds()}
                            <br></br>
                            <Button onClick={this.clickAddForm}>Add A New medication</Button>
                            {
                                this.state.add ?
                                <NewMedForm createPatientMed={this.createPatientMed}/>
                                : null
                            }
                        </Typography>
                        </Paper>
                        </Grid>   
                    </Grid>

                    </Grid>
                </Grid>
                : <Loading/>}
                </>
        )
    }
}

const msp = (state) => {
    return {doctor: state.doctor}
}

const mdp = (dispatch) => {
    return { patientLogin: (pt) => dispatch(ptLoginAction(pt, dispatch))}
}
export default connect(msp, mdp)(withStyles(useStyles, { withTheme: true })(withRouter(PatientSpecs)))