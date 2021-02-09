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

class PatientSpecs extends Component {

    state = {
        user_id: this.props.id,
        user: null
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



    render() {
        const { classes } = this.props
        const renderMeds = () => {
            console.log(this.state)
            return this.state.user.user_meds.map(med => {
                return <MdMed med={med}/>
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
                            <h3>Meds:</h3>
                            {renderMeds()}
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