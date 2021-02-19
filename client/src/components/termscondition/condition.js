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
        Terms and condition
        </Typography>
        <Paper className = {classes.bodytext} m={2} variant="outlined">
            <Typography className = {classes.textpadding} variant = "body1"  Align="justify">
                I hereby declare that the information that I verify in this voting application is true and correct to the best of my knowledge
                and belief. In case of misconduct, I shall be respoinsible for the consequences
            </Typography>
        </Paper>
        <Typography className = {classes.textpadding1} variant = "subtitle1" Align="center" fontWeight="fontWeightBold">
            Start Voting
        </Typography>
        </Paper>

      
    );
}