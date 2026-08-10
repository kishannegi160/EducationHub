import React from "react";
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png'

const About = ()=>{

    return(
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon"/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurtuing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformstive education journey with our university's comprehensive education program. 
                    Our cutting-edge curriculum is designed to empower students with the knowledge, skill, and experience
                    needed tio excel in the dynamic field of eduction.
                </p>
                <p>
                    With a focus on innovation, hands-on learning, and personalized mentorship, our program prepare 
                    aspiring education to make a meaning impact in classrooms, school, and communities.

                </p>
                <p>
                    Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range
                    of programs offers the perfect pathway to achieve your gaol and unlock your full potential in shaping the 
                    future of education. 
                </p>
            </div>
        </div>
    )
}

export default About;