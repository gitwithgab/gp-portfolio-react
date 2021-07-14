import React from 'react';
import portPhoto from "../assets/img/portfolio-img.png";
import SocialLinks from './SocialLinks';
import {Link} from "react-scroll";

const AboutSection = () => {

    return (
        <>
        
            <section id="about-me">

                 <div>
                    <img src={portPhoto} alt="Black and White of Developer (Gabby)"/>
                </div>

                <div>
                    <h2>About Me</h2>
                    <p>
                        Hi there, welcome! I'm Gabrielle Pantin, Full-Stack Web Developer from Trinidad and Tobago. 
                        With an affinity for the front-end and the user experience, I can help you to design and develop modern, 
                        responsive and eye-catching solutions to grab and sustain the attention of your audience. 
                    </p>
                    <p>
                        Feel free to reach out at any of the links below or through the contact form 
                        <Link to="contact-me" 
                            className="here-link" 
                            activeClassName="active" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={750}> here.
                        </ Link>
                    </p>

                    <SocialLinks />

                </div>


            </section>


        </>
    )
}

export default AboutSection
