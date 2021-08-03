import React from "react"; 

import "./App.css";
import Serena from "./Serena";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Pic from './SerenaPark3.jpeg';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Education from "./Education";
import Projects from "./Projects";
import { MenuItem, Toolbar } from "@material-ui/core";
// import {NavLink, Link, BrowserRouter, Route} from 'react-router';
// import Tab from '@material-ui/core/Tab';




function TopBar() {
    return (
        <nav>
        <div className = "topbar">
            




            {/* <BrowserRouter>


        		<Route path="/Education">
        			Education
        		</Route>
                <Link to="/Education">plswork</Link>

             <li><Link to= {"./Education"}>Education</Link> </li>
            {/* <li><Link to="/Education">Education</Link></li> */} 
            {/* </BrowserRouter> */} 
            </div>
            </nav>
            
                
                
        

           

        
            
             

        
    );
    
    
    }
    
    export default TopBar;