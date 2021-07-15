import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function WorkExperience() {
return (
    <Box p = {1} borderRadius = {16} height = {300} height = "100%">
        <Paper p = {3}>
    <div className= "work">
    <h2>Work Experience</h2>
    <h3>Centennial Concert Hall - Front of House Usher</h3>
    <li>Efficiently switched between various tasks such as ticket scanning, coat check, and cleaning to help our team address all customer needs.
    <li>Patiently communicated ticket and facility information to all guests.</li>   
    <p>September 2019 - Present</p> </li>

    <h3>TIXIT - Technical Support</h3>
    <li>Provided first hand technical support for Folklorama ticketing stations.
    <li>Reinstalled software on scanners as required to allow tickets to be collected and shows to begin on time.</li>   
    <p>August 2019</p> </li>


    </div>
    </Paper>
    </Box>
);


}

export default WorkExperience;