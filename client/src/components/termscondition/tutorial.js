import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Typography} from '@material-ui/core';


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
            <Typography className = {classes.textpadding1}  variant = "h2" Align="center">
                Welcome to <br/> University of Malaya Campus Election
            </Typography>
            <Typography className = {classes.textpadding1} variant = "h5" color="error" Align="center">
                Please Read The Instruction Carefully
            </Typography>
            <Paper className = {classes.bodytext} m={2} variant="outlined">
                <Typography className = {classes.textpadding} variant = "body1"  Align="left">
                    <ul>
                        <li>Please use Google Chrome or Mozilla Firefox before proceed with the voting system <br/></li>
                        <li> Make sure to have a good internet connection<br/></li>
                        <li>Do not quit half-way as it will disturb the voting process and your voting might fail</li>
                    </ul>
                </Typography>
            </Paper>
            <Typography className = {classes.textpadding1} variant = "subtitle1" Align="center" fontWeight="fontWeightBold">
                I have read and understand the statement above
            </Typography>
           

        </Paper>
    );
}