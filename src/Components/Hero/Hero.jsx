import React from "react";
import './Hero.css'
import  dark_arrow from '../../assets/dark-arrow.png'

const Hero = ()=>{

    return(
        <div className="hero container"Hero id="">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, 
                    skills, and experiences needed to excel in the dynamic fiald of education</p>
                <div className="btn">Explore more <img src={dark_arrow} alt="" /></div>
            </div>

        </div>
    )
}
export default Hero