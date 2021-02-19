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

    const calculateTimeLeft = () => {
        // let year = new Date().getFullYear();
        const difference = +25200600  ;
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            Hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
            M: Math.floor((difference / 1000 / 60) % 60),
            S: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      // const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

  return (
    <Container className = {classes.centerized}>
            <Typography variant ="h5">
                Time Remaining
            </Typography>
            <Typography variant="h2">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </Typography>
    </Container>
  );
}