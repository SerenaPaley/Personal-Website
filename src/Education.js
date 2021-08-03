import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Pic from './UBCLogoWhite.jpeg';



function Education() {
return (

  
    
    <Box p = {1} borderRadius = {16} height = {300} >
        <Paper p = {2}>
        <Grid container justifyContent="center"  >
    
    <Grid container item xs={6} justifyContent="center">
    <div> 
    <Box display="flex" pt = {4}  > <Avatar pt = {3} variant = "rounded" style={{ height: '110px', width: '110px' }} alt="UBC logo" src={Pic} className={Pic.large} />
    </Box>
    
    </div>
    </Grid >
    <Grid item xs={6} justifyContent="flex-start">
    <div>
    <h2 className= "blue">Education</h2>
    <br></br>
    <h3>University of British Columbia</h3>
    <li>Combined major in business and computer science (BUCS)
    <p>Sep 2020 - May 2025</p> </li>
    <br></br>

    <h3>Courses</h3>
    <li>Computation, Programs, and Programming</li>
    <li>Models of Computation</li>
    <li>Software Construction</li>
    <li>Basic Algorthms and Data Structures</li>
    <li>Introduction to Computer Systems</li>
    <br></br>

    </div>
    </Grid>
    </Grid>
    </Paper>
    </Box>
    
);


}

export default Education;