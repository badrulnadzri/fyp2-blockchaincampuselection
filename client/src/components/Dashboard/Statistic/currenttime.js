import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography} from '@material-ui/core/';


const useStyles = makeStyles({
  centerized: {
    margin:"auto",
  },
});

export default function CurrentTime() {
    const classes = useStyles();

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

  return (
    <Container className = {classes.centerized}>
            <Typography variant ="h5">
                Current Time
            </Typography>
            <Typography variant="h2">
                {date.toLocaleTimeString()}
            </Typography>
    </Container>
  );
}