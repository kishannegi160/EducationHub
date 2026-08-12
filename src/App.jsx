import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = ()=>{

  return(
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our program' title='What we offer'> </Title>
        <Program></Program>
        <About></About>
        <Title subtitle='Gallery' title='Campus Photos'> </Title>
        <Campus></Campus>
        <Title subtitle='Testimonials' title='What student says'> </Title>
        <Testimonial></Testimonial>
        <Title subtitle='Contact us' title='Get in touch'> </Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      
    </div>
  )
}
export default App