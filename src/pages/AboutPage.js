import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import portPhoto from "../assets/img/portfolio-img.png";
import SocialLinks from '../components/SocialLinks';
import {Link} from "react-router-dom";

const AboutPage = () => {

    return (
        <>
        
            <Header />

            <section id="about-me">
                <div>
                    <h2>About Me</h2>
                    <p>
                        Hi there, welcome! I'm Gabrielle Pantin, Full-Stack Web Developer from Trinidad and Tobago. 
                        With an affinity for the front-end and the user experience/interface, I can help you to design and develop modern, 
                        responsive and eye-catching solutions to grab and sustain the attention of your audience. 
                    </p>
                    <p>
                        Feel free to reach out at any of the links below or through the contact form <Link to="/contact" className="here-link">here.</ Link>
                    </p>

                    <SocialLinks />

                </div>

                <div>
                    <img src={portPhoto} alt="Black and White of Developer (Gabby)"/>
                </div>

            </section>

            <Footer />

        </>
    )
}

export default AboutPage
