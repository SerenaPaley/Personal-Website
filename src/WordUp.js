import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Pic from './redDice.jpeg';



function WordUp() {

return (
    
    <Box p = {1} borderRadius = {16} height = {300} >
        <Paper p = {3}>
        <Grid container justifyContent="center"   >
    
    <Grid container item xs={6} justifyContent="center" >
    <div> 
    <Box display="flex" pt = {4}  > <Avatar pt = {3} variant = "rounded" style={{ height: '110px', width: '110px' }} alt="UBC logo" src={Pic} className={Pic.large} />
    </Box>
    
    </div>
    </Grid>
    <Grid item xs={6} justifyContent="flex-start">
    <div>
    <h2 className= "blue">WordUp</h2>
    <br></br>
    <h3> Personal Project - WordUp</h3>
    <li> Built a hangman style game in Python and used getpass to ensure the mystery word remains secret.
    <p>March 2021</p> </li>
    
    </div>
    </Grid>
    </Grid>
    </Paper>
    </Box>
    
);


}


export default WordUp;