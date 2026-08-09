import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import Title from "./Components/Title/Title";

const App = ()=>{

  return(
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our program' title='What we offer'> </Title>
        <Program></Program>
      </div>
      
    </div>
  )
}
export default App