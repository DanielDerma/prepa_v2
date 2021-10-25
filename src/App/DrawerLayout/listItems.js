import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';


export const mainListItems = (
  <div>
   <ListItem button key={"Account"} component={Link} to="account">
     <ListItemIcon>
       <AccountCircleIcon />
     </ListItemIcon>
     <ListItemText primary={"Account"} />
   </ListItem>

   <ListItem button key={"Admin"} component={Link} to="admin">
     <ListItemIcon>
       <SupervisorAccountIcon />
     </ListItemIcon>
     <ListItemText primary={"Admin"} />
   </ListItem>

   <ListItem button key={"Dashboard"} component={Link} to="dashboard">
     <ListItemIcon>
       < DashboardIcon/>
     </ListItemIcon>
     <ListItemText primary={"Dashboard"} />
   </ListItem>

   <ListItem button key={"Posts"} component={Link} to="posts">
     <ListItemIcon>
       <EmailIcon />
     </ListItemIcon>
     <ListItemText primary={"Posts"} />
   </ListItem>

   <ListItem button key={"SIIMain"} component={Link} to="siimain">
     <ListItemIcon>
       <AssignmentIndIcon />
     </ListItemIcon>
     <ListItemText primary={"SIIMain"} />
   </ListItem>
   <ListItem button key={"SIIView"} component={Link} to="siiview">
     <ListItemIcon>
       <SchoolIcon />
     </ListItemIcon>
     <ListItemText primary={"SIIView"} />
   </ListItem>
  </div>
);
