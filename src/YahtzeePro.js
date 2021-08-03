import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Pic from './redDice.jpeg';



function YahtzeePro() {
// return (
    
//     <Box p = {1} borderRadius = {16} height = {300} height = "100%">
//         <Paper p = {3}>
//         <Grid container justifyContent="space-evenly"  >
    
//     <Grid item xs={6}>
//     <div> 
//     <Box display="flex" pt = {4}  > <Avatar pt = {3} variant = "rounded" style={{ height: '110px', width: '110px' }} alt="UBC logo" src={Pic} className={Pic.large} />
//     </Box>
    
//     </div>
//     </Grid>
//     <Grid item xs={6}>
//     <div>
//     <h2 className= "blue">Yahtzee Pro</h2>
//     <div>
    // <h2> Projects</h2>
    // <h3> Summer Project - YahtzeePro</h3>
    // <li> Developed a multiplayer digital Yahtzee game using Java and utilized Git for version control.
    // <li> Built a user interface, including graphical dice that can be individually saved and a scoresheet, using Swing. </li>
    
    // <p>August 2020</p> </li>
//     </div>
   

    
//     </div>
//     </Grid>
//     </Grid>
//     </Paper>
//     </Box>
    
// );


// }

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
    <h3 className= "blue">YahtzeePro</h3>
    <br></br>
    <h3> Summer Project - YahtzeePro</h3>
    <li> Developed a multiplayer digital Yahtzee game using Java and utilized Git for version control. </li>
    <li> Built a user interface, including graphical dice that can be individually saved and a scoresheet, using Swing. 
    <p> Aug 2020 - Feb 2021</p> </li>
    
    </div>
    </Grid>
    </Grid>
    </Box>
    
);


}


export default YahtzeePro;