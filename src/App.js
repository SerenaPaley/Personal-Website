import React from "react"; 
import "./App.css";
import Education from "./Education";
import Projects from "./Projects";
import Name from "./Name";
import TopBar from "./TopBar";
import WorkExperience from "./WorkExperience";




function App() {
 return (
   
   <div className= "app">
     <TopBar />
     <Name />
     <h2 className = "title">Education</h2>
     <Education />
     <h2 className = "title">Projects</h2>
     <Projects />
     <WorkExperience />

   </div>
 );
}

export default App;
