import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Pic from './redDice.jpeg';



function CheeryCherries() {

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
    <h3 className= "blue">Cheery Cherries</h3>
    <br></br>
    <h3> Gr. 12 Final Project - Cheery Cherries Video Game</h3>
    <li> Engineered a 2D platformer game using Unity and C#, with a partner.
    <li> Implemented movement controls, level design, and physics parameters.</li>
    <li> Created animations using sprite sheets for jumping, idling, and falling.</li>  
    <p>June 2020</p> </li>
    
    </div>
    </Grid>
    </Grid>
    </Box>
    
);


}


export default CheeryCherries;