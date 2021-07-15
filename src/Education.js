import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Education() {
return (
    
    <Box p = {1} borderRadius = {16} height = {300} height = "100%">
        <Paper p = {3}>
        <Grid container justifyContent="space-evenly" className= "work" >
    
    <Grid item xs={6} >
    <div> 
    <h2>Education</h2>
    </div>
    </Grid>
    <div>
    <h3>University of British Columbia</h3>
    <li>Combined major in business and computer science (BUCS)
    <p>Sept 2020 - May 2025</p> </li>

    <h3>Courses</h3>
    <li>CPSC110 - Computation, Programs, and Programming</li>
    <li>CPSC121 - Models of Computation</li>
    <li>CPSC210 - Software Construction</li>
    <li>CPSC221 - Basic Algorthms and Data Structures</li>

    </div>
    </Grid>
    </Paper>
    </Box>
    
);


}

export default Education;