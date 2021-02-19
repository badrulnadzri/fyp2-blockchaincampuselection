import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';
//import { AppBar,Toolbar, Button,} from '@material-ui/core';
//import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        width:"90%",
        margin:"auto",
        
    },

   bodytext:{
       width:"60%",
       margin:"auto",
       spacing:"8",
       
   },

   textpadding:{
        padding: "20px",
   },
   
   textpadding1:{
    paddingTop:"20px",
},
    
   
}));
export default function Header(){
    const classes = useStyles();
    return (
        <Paper className = {classes.root} >
        <Typography className = {classes.textpadding}  variant = "h3" Align="center">
        Please check and confirm your identity!
        </Typography>
        <Paper className = {classes.bodytext} m={2} variant="outlined">
            <Typography className = {classes.textpadding} variant = "body1"  Align="left">
                <ul>
                    <li>Name: Muhammad Badrul Aiman</li>
                    <li>Faculty: Faculty of Computer Science and Information Technology</li>
                    <li>Vote Status: No</li>
                    <li>Transaction Hx: null</li>
                </ul>
            </Typography>
        </Paper>
        <Typography className = {classes.textpadding1} variant = "subtitle1" Align="center" fontWeight="fontWeightBold">
            I confirmed that the details above is myself
        </Typography>
        </Paper>

      
    );
}