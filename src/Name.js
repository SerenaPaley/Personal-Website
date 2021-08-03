import React from "react"; 
import "./App.css";
import Serena from "./Serena";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Pic from './SerenaPark3.jpeg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';




function Name() {
    return (
        <div className = "name">
        <Grid container direction="row"> 
        <Grid item xs={6}>
        <Box p = {2}>
                <Paper>
                <Box p = {5} textAlign = "center">
                    <Serena />
                    
                    </Box>

                </Paper>
            </Box>

            </Grid> 

            <Grid item xs={6}>
            <Box pb = {10} textAlign = "center" >
             <img src={Pic} alt = "picture" className = "profilePic"/> 
             </Box>
             </Grid>

             {/* <Grid container direction="row-reverse" justifyContent="flex-end" alignItems="center" > */}
             <Grid>
             <Button size = "large" variant="contained" color="primary" href="https://github.com/serenapaley">GitHub</Button>
             </Grid>

             <Grid>
             <Button size = "large" variant="contained" color="primary" href="https://www.linkedin.com/in/serena-paley/">linkedin</Button>
             </Grid>
             </Grid>


             {/* </Grid> */}
             


    

        
            
        
       
        
        </div>
    );
    
    
    }
    
    export default Name;