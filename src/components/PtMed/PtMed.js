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

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import fireWorks from './SpecialEffects'
import Checkbox from '@material-ui/core/Checkbox';





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
        .then(res => this.setState({ taken: res.has_taken  }))
    }



    render() {

        const { classes } = this.props
        return (
            < > 
                {
 <Card className={classes.root} container className={this.state.taken? classes.taken : classes.not_taken} xs={12} >
 <CardActionArea>
   <CardContent>
     <Typography gutterBottom variant="h5" component="h5">
     <img className={this.state.taken? classes.image_taken : classes.image} src={this.props.med.med.image_url}/>
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p">
    <h3><b>{this.props.med.med.name}</b></h3> <b> <h3><li>{this.props.med.notes ? <><b>Doctor's Instructions: </b>   {this.props.med.notes}</> : null} </li><b></b> </h3><h3><li>Number of pills to take:  {this.props.med.pill_count} pill/s</li> </h3><h3><li> Pill Color:  {this.props.med.med.pill_color}  </li> </h3></b> <Checkbox  onClick={this.patchHandler}>{this.state.taken ? fireWorks()  : "Mark as taken"  }</Checkbox >
     </Typography>
   </CardContent>
 </CardActionArea>
 <CardActions>
   <Button size="small" color="secondary">
   <a href="https://www.rxlist.com/drug-medical-dictionary/article.htm">Learn More </a>
   </Button>
 </CardActions>
</Card>


                }
            </>
        )
    }
}


export default (withStyles(useStyles, { withTheme: true })(PtMed)) 





// <Grid container className={this.state.taken? classes.taken : classes.not_taken} xs={12} >
// {/* <Paper xs={12} variant="outlined"> */}

// <Grid container
// direction="column" justify="center"
//   alignItems="stretch" 
// item xs={8}><b>{this.props.med.med.name}</b><b> <br/> {this.props.med.pill_count} pill(s) {this.props.med.med.pill_color} IN COLOR</b>,<br/> {this.props.med.notes ? <><b>Doctor's notes: </b>   {this.props.med.notes}</> : null} <br/> <Button  onClick={this.patchHandler}>{this.state.taken ? "Undo" : "Mark as taken" }</Button></Grid>
// <Grid 
// item xs={4}> <img className={this.state.taken? classes.image_taken : classes.image} src={this.props.med.med.image_url}/></Grid>
// {/* </Paper> */}
// </Grid>