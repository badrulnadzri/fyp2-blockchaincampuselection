import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/activeelection" style={{ textDecoration: 'none', color:"#808080" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/electionresult" style={{ textDecoration: 'none' , color:"#808080" }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Election Result" />
      </ListItem>
    </Link>
    <Link to="/statistic" style={{ textDecoration: 'none', color:"#808080" }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistic" />
      </ListItem>
    </Link>
    


  </div>
);
