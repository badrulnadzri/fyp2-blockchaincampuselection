import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import VotingApp from './votingApp/VotingApp'
import doneVote from './votingApp/doneVote'
import Login from './components/login/Login';
import { CssBaseline} from '@material-ui/core';
import Terms from './components/termscondition/terms';
import Landing from './components/LandingPage/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import activeelection from './components/Dashboard/activeelection/activeelection';
import electionresult from './components/Dashboard/ElectionResult/electionresult';
import statistic from './components/Dashboard/Statistic/statistic';

function App() {
  return (
    <Router>
    <div >
      <CssBaseline/>
        <Switch>
          <Route path = "/" exact component={Landing}/>
          <Route path = "/Login" exact component={Login}/>
          <Route path = "/VotingApp" exact component={VotingApp}/>
          <Route path = "/terms" exact component={Terms}/>
          <Route path = "/Dashboard" exact component={Dashboard}/>
          <Route path = "/activeelection" exact component={activeelection}/>
          <Route path = "/electionresult" exact component={electionresult}/>
          <Route path = "/statistic" exact component={statistic}/>
          <Route path = "/doneVote" exact component={doneVote}/>

          
        </Switch> 
    </div>
    </Router>

  );
}

export default App;