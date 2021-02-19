import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,
    alignItems:'center',
    alignContent:'center',
    padding:'20px',
    
  },
  text:{
      textAlign:"center",
  },

  buttonstyle:{
      padding:'10px'
  }
  
}));
function Login() {
  const classes = useStyles();
  return (
    <div className = {classes.root}>
        <h1 className = {classes.text} >Login!</h1>
        <Grid container
        spacing ={1}
        direction="column"
        justify="flex-end"
        alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
            <Grid item xs spacing={3}>
        <TextField id="standard-basic" label="Username" />
            </Grid>
            <Grid item xs spacing={3}>
        <TextField id="standard-basic" label="Password" />
            </Grid >
            <Grid item xs spacing={10}>
        <Link to="/VotingApp">      
        <Button className = {classes.buttonstyle} variant="contained" color="primary">Login!</Button> 
        </Link>
            </Grid >
        </form>
        </Grid>
    </div>
  );
}

export default Login;