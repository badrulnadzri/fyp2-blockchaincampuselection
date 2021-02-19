import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Paper, Typography, Container, Box} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: "auto",
      padding:"10%"
    },
  textspacing:{
    paddingTop:"10px",
    paddingBottom:"10px",
  },
  alignbutton:{
    justifycontent:'center',
  },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="xl">
            <Paper style={{padding:"50px" }}>
                <Typography variant="h3" align="center" className={classes.textspacing}>
                    Congratulation, you have completed the voting process!
                </Typography>
                <Typography variant="h5" align="center" className={classes.textspacing}>
                    Below are your Transaction Receipt:
                </Typography>
                <Typography variant="h4" align="center" style={{paddingTop:"30px", paddingBottom:"30px" }}>
                    0xa61bf09dedc56df4a1b220ae73b1c944524c5f837f9aea3a4a821c1922421c8f
                </Typography>
                <Typography variant="body1" align="center" style={{ paddingBottom:"10px" }}>
                    A copy of the transaction receipt has been send to your SiswaMail!
                </Typography>
                <Box display="flex" flexDirection="column" >
                  <Button variant="contained" color="primary" >
                      Log Out
                  </Button>
                </Box>
            </Paper>
        </Container>
    </div>
  );
}

