import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Pic from './Shad.png';



function SmartRobot() {

return (
    
    <Box p = {1} borderRadius = {16} height = {300} height = "100%">
       
        <Grid container justifyContent="center"   >
    
    <Grid container item xs={6} justifyContent="center" >
    <div> 
    <Box display="flex" pt = {4}  > <Avatar pt = {3} variant = "rounded" style={{ height: '110px', width: '110px' }} alt="UBC logo" src={Pic} className={Pic.large} />
    </Box>
    
    </div>
    </Grid>
    <Grid item xs={6} justifyContent="flex-start">
    <div>
    <h3 className= "blue"> Smart Robot</h3>
    <br></br>
    <h3> Shad Canada Activity - Smart Robot</h3>
    <li> Programmed a robot to differentiate between black and white to follow a line, using an ultrasonic sensor.
    <li> Incorporated direction decision making when approaching an intersection.</li>
    <p>July 2019</p> </li>
    
    </div>
    </Grid>
    </Grid>
    </Box>
    
);


}


export default SmartRobot;