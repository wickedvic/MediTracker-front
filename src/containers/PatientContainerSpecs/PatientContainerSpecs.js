import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import { withStyles } from "@material-ui/core/styles"
import { Route, Switch } from "react-router-dom"
import PatientSpecs from '../../components/PatientSpecs/PatientSpecs'
import DoctorContainer from '../DoctorContainer/DoctorContainer';


const PatientContainerSpecs = () => {


        return (
            <>
            <Switch>
             <Route path="/patients/:id" render={(routerProps) =>  {
                        let id = parseInt(routerProps.match.params.id)
                        return (
                            <>
                            {
                                <PatientSpecs key={id} id={id}/> 
                            }
                            </>
                        )
                    }}/>

            <Route exact path="/patients" render={() =>  <DoctorContainer/>}/>
            </Switch>
            </>

        )
}

export default PatientContainerSpecs 