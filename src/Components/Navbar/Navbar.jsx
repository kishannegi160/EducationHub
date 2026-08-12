import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={logo} alt="" className="logo" />

            <ul>
                <li><a href="#Hero">Home</a></li>
                <li><a href="#Programs">Program</a></li>
                <li><a href="#About">About us</a></li>
                <li><a href="#Campus">Campus</a></li>
                <li><a href="#Testimonials">Testimonial</a></li>
                <li>
                    <a href="#Contact" className="btn">Contact us</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;