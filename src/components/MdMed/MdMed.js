import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './MdMedStyles'
import { withStyles } from "@material-ui/core/styles"
import { Button } from '@material-ui/core'
import { TextField, Select, MenuItem } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class MdMed extends Component {
    state = {
        med: this.props.med,
        notes: this.props.med.notes,
        pill_count: this.props.med.pill_count,
        time: this.props.med.time
    }

    editClick = () => {
        this.setState(prev => ({edit : !prev.edit}))
    }

    formEdit = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    patchHandler = (e) => {
        e.preventDefault()
        const ptMedId = this.state.med.id
        const body = {
                notes: this.state.notes,
                pill_count: this.state.pill_count,
                time: this.state.time}

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
        .then(res => this.setState({edit: false}, () => this.props.refreshMedsEdit(res.id, body)))
    }

    deleteHandler = () => {
        const ptMedId = this.state.med.id
        const configObj = {
            method: "DELETE",
            headers: {accept: "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`}
        }
        fetch(`http://localhost:3000/api/v1/user_meds/${ptMedId}`, configObj)
        .then(res => res.json())
        .then(res => this.props.refreshMeds(res.id))
    }

    render() {
        const { classes } = this.props
        return (
            < > 
                {
                    this.state.edit ?
                    <form onSubmit={this.patchHandler}>
                        {this.state.med.med.name}<br/> 
                        {/* <TextField value={this.state.med.med.image_url} label="image"/> */}
                        <br></br>
                        <TextField onChange={this.formEdit} value={this.state.notes} name="notes" label="⚠️"/>
                        <br></br>
                        <br></br>
                        <TextField onChange={this.formEdit} type="number" min={1} name="pill_count" value={this.state.pill_count} label="Number of pills"/>
                        <br></br>
                        <br></br>
                        <TextField onChange={this.formEdit} id="time" label="Select Time" name="time" value={this.state.time} select>
                            <MenuItem value="morning">Morning</MenuItem>
                            <MenuItem value="afternoon ">Afternoon</MenuItem>
                            <MenuItem value="evening ">Evening</MenuItem>
                        </TextField>

                        <br/>
                        <Button type="submit">Click To Save</Button>
                    </form>


                    :
                    <Paper variant="outlined">{this.props.med.med.name} <br/> {this.props.med.notes}, {this.props.med.pill_count} pills in the  {this.props.med.time}<br/> <Button color="primary" onClick={this.editClick}><EditIcon/></Button> <Button color="" onClick={this.deleteHandler}><DeleteIcon/> </Button></Paper>
                }
            </>
        )

    }
}


export default (withStyles(useStyles, { withTheme: true })(MdMed))