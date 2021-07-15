import React from "react"; 
import "./App.css";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


function Projects() {
    return (
        <Box p = {1} borderRadius = {16} height = {300} height = "100%">
            <Paper p = {3}>
        <div>
        <h2> Projects</h2>
        <h3> Summer Project - YahtzeePro</h3>
        <li> Developed a multiplayer digital Yahtzee game using Java and utilized Git for version control.
        <li> Built a user interface, including graphical dice that can be individually saved and a scoresheet, using Swing. </li>
        {/* Github button */}
        <p>August 2020</p> </li>
        </div>

        <div>
        <h3> Summer Project - Strive</h3>
        <li> Created a goal tracking program using object orientated programming in Java.
        <li> Made a console based UI that allows users to add, remove, update, print, and assign rewards to their goals. </li>
        <p>January 2021</p> </li>
        </div>

        <div>
        <h3> Personal Project - WordUp</h3>
        <li> Built a hangman style game in Python and used getpass to ensure the mystery word remains secret.
        <p>March 2021</p> </li>
        </div>

        <div>
        <h3> Gr. 12 Final Project - Cheery Cherries Video Game</h3>
        <li> Engineered a 2D platformer game using Unity and C#, with a partner.
        <li> Implemented movement controls, level design, and physics parameters.</li>
        <li> Created animations using sprite sheets for jumping, idling, and falling.</li>  
        <p>June 2020</p> </li>
        </div>


        <div>
        <h3> Shad Canada Activity - Smart Robot</h3>
        <li> Programmed a robot to differentiate between black and white to follow a line, using an ultrasonic sensor.
        <li> Incorporated direction decision making when approaching an intersection.</li>
        <p>July 2019</p> </li>
        </div>
        </Paper>
        </Box>
    );
    
    
    }
    
    export default Projects;