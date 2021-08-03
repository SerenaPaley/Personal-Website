import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import YahtzeePro from "./YahtzeePro";
import Strive from "./Strive";
import WordUp from "./WordUp";
import CheeryCherries from "./CheeryCherries";
import SmartRobot from "./SmartRobot";



function Projects() {
    return (
        <Box p = {1} borderRadius = {16}  height = "100%">
          <YahtzeePro />  
          <Strive />  
          <WordUp />
          <CheeryCherries /> 
          <SmartRobot /> 

            
        </Box>
    );
    
    
    }
    
    export default Projects;