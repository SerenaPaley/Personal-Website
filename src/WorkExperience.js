import React from "react"; 
import "./App.css";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function WorkExperience() {
return (
    <Box px = {2}>
    <Grid container direction="row" justifyContent = "center" alignItems = "center" spacing={2}>
    <Grid item xs={6}>
        
    <div>
    <Paper p = {3}>
        <Box px = {2} py = {2} className= "work" >
            <h3>Centennial Concert Hall - Front of House Usher</h3>
            <li>Efficiently switched between various tasks such as ticket scanning, coat check, and cleaning to help our team address all customer needs.
            <li>Patiently communicated ticket and facility information to all guests.</li>   
            <p>September 2019 - Present</p> </li>
           
        </Box>
    </Paper>
    </div>
    </Grid>

    <Grid item xs={6} px = {2}>
    <div>
    <Paper p = {3}>
        <Box px = {2} py = {2} className= "work" >
        <h3>TIXIT - Technical Support</h3>
        <li>Provided first hand technical support for Folklorama ticketing stations.
        <li>Reinstalled software on scanners as required to allow tickets to be collected and shows to begin on time.</li>   
        <p>August 2019</p> </li>
           
        </Box>
    </Paper>
    </div>
    </Grid>
    </Grid>
    </Box>
  
    
);


}

export default WorkExperience;