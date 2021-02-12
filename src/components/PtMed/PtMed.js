import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './PtMedStyles'
import { withStyles } from "@material-ui/core/styles"
import { Button } from '@material-ui/core'
import { TextField, Select, MenuItem } from '@material-ui/core'


class PtMed extends Component {

    state = {
        med: this.props.med,
        taken: this.props.med.has_taken
    }


    patchHandler = () => {
        const ptMedId = this.state.med.id
        const body = {
            has_taken: !this.state.taken }

        const configObj = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json", 
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(body)
        }
        fetch(`http://localhost:3000/api/v1/user_meds/${ptMedId}`, configObj)
        .then(res => res.json())
        .then(res => this.setState({ taken: res.has_taken}))
    }



    render() {

        const { classes } = this.props
        return (
            < > 
                {

<Grid container className={this.state.taken? classes.taken : classes.not_taken} xs={12} >
{/* <Paper xs={12} variant="outlined"> */}
<Grid item xs={5}> <img className={this.state.taken? classes.image_taken : classes.image} src={this.props.med.med.image_url}/></Grid>
<Grid item xs={6}><b>{this.props.med.med.name}</b><b> <br/> {this.props.med.pill_count} pill(s) {this.props.med.med.pill_color} IN COLOR</b>,<br/> {this.props.med.notes ? <><b>Doctor's notes: </b>   {this.props.med.notes}</> : null} <br/> <Button  onClick={this.patchHandler}>{this.state.taken ? "Undo" : "Mark as taken" }</Button></Grid>
{/* </Paper> */}
</Grid>
                }
            </>
        )
    }
}


export default (withStyles(useStyles, { withTheme: true })(PtMed)) 


