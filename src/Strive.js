import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Pic from './strive.gif';



function Strive() {
return (
    
    <Box p = {1} borderRadius = {16} height = {300} height = "100%">
        <Paper p = {3}>
        <Grid container justifyContent="center"   >
    
    <Grid container item xs={6} justifyContent="center" >
    <div> 
    <Box display="flex" pt = {4}  > <Avatar pt = {3}  style={{ height: '100px', width: '100px' }} alt="UBC logo" src={Pic} className={Pic.large} />
    </Box>
    
    </div>
    </Grid>
    <Grid item xs={6} justifyContent="flex-start">
    <div>
    <h2 className= "blue">Strive</h2>
    <br></br>
    <h3> Course Project - Strive</h3>
    <li> Created a goal tracking program using object orientated programming in Java.
    <li> Made a console based UI that allows users to add, remove, update, print, and assign rewards to their goals. </li>
    <p>Jan 2021 - Apr 2021</p> </li>
    <br></br>
    
    </div>
    </Grid>
    </Grid>
    </Paper>
    </Box>
    
);


}


export default Strive;