import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navMargin: {
      marginBottom: '30px'
    }
  }));



const NavBar = () => {
    const classes = useStyles()
    return (
      <AppBar position="static" color="secondary" className={classes.navMargin}>
        <Toolbar >
          <img  src="https://i.imgur.com/SF5Sczc.png" alt="doc-img" />
          <Typography variant="h6" className={classes.title}  >
          </Typography >
          {localStorage.getItem("user") ? <Button color="inherit">Logout</Button> : null}
        </Toolbar>
      </AppBar>
    )
}

export default NavBar 