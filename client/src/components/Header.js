import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Button,} from '@material-ui/core';
import bg from '../assets/bg.jpg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
       display: 'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        height: '90vh',
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        color:'#434347',
    },
    appbar:{
        background: "none",  
        
       
    },
    colorText:{
        color: "#050c9c",
        fontFamily: 'Open Sans',
        
    },
    appbarTitle:{
        flexGrow: '1',
        fontSize: '30px',
        
    },
    appbarWrapper:{
        width:'100%',
    },
    content:{
        fontSize:'35px',
        textAlign: 'left',
        
       
    },
    container:{
        // justifyContent:'flex-end',
        padding: '40px',
        border: '1px',
     
    }
   
}));
export default function Header(){
    const classes = useStyles();
    return (
    <div className = {classes.root}>
        <AppBar className = {classes.appbar} elevation={0}>
            <Toolbar className = {classes.appbarWrapper}>
            <h1 className = {classes.appbarTitle}>
                <span className={classes.colorText}>
                  University Of Malaya Campus Election  
                </span>
            </h1>
            <Link to="/Login">
            <Button variant="contained" color="primary">Login Student</Button>
            </Link>
            </Toolbar>
        </AppBar>
    <div className = {classes.container}>
        <h1 className = {classes.content}>
        Welcome to<br/>Univeristy of Malaya<br/> Campus Election 2025!
        </h1>
        <Link to="/Login">
        <Button variant="contained" color="primary" size="large">
        Start Voting!
        </Button>
        </Link>
    </div>
        </div>
    );
}