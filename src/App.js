import React from "react"; 
import "./App.css";
import Education from "./Education";
import Projects from "./Projects";
import Name from "./Name";
import WorkExperience from "./WorkExperience";



// function App() {
//   //return <Button color = "primary">Hello World</Button>;
//   <Name />
// }

function App() {
 return (
   
   <div className= "app">
     <Name />
     <Education />
     <Projects />
     <WorkExperience />

   </div>
 );
}

export default App;
