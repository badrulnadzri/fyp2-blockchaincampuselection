import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Tutorial from './tutorial';
import Identity from './identity';
import Condition from './condition';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  centerbutton:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontWeight:'bold',
      
  },
  paperbutton:{
    width:"186px",
    margin:"auto",
    paddingTop:"100px",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    
    
  },

}));

function getSteps() {
  return ['Important Note!', 'Confirm Identity', 'Terms and Condition'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
          <Tutorial/>
      ) 
    case 1:
      return (
          <Identity/>
      );
    case 2:
      return (
          <Condition/>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className={classes.paperbutton} >
           <Paper >
            <Paper style={{ padding:"20px" ,alignItems:"center" }}>
              <Typography  >All steps completed</Typography>
                <Link to="/VotingApp" style={{ textDecoration: 'none' }}>
                  <Button className={classes.centerbutton} variant="contained" color="primary" size="large"  >Start Voting</Button>
                </Link>
            </Paper>  
          </Paper>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.centerbutton}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button  variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Go!' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}