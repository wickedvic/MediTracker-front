import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './LoadingStyles'


const LoadingPage = (props) => {



    const classes = useStyles()
    return (
        <div > 
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Grid container spacing={3} align="center" justify="center" >
                    <Grid item xs={6} >
                    <img className={classes.box} src="https://dribbble.com/shots/3712012--SVG-Loading-Icon-FTFB-Four-Tiny-Fancy-Balls?utm_source=Clipboard_Shot&utm_campaign=ap_benassi&utm_content=%5BSVG%20Loading%20Icon%5D%20FTFB%20-%20Four%20Tiny%20Fancy%20Balls&utm_medium=Social_Share"/>
                    </Grid>   
                </Grid>

                </Grid>
            </Grid>
            </div>
    )
}


export default LoadingPage 