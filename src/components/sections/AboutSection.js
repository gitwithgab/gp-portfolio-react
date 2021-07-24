import React from 'react';
import portPhoto from "../../assets/img/portfolio-img.png";
import SocialLinks from '../SocialLinks';
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
                        Hello World! My name is Gabrielle Pantin, and I'm a freelance Full-Stack Web Developer from Trinidad and Tobago, 
                        currently based in Colombia.
                    </p>
                    <p>    
                        With a passion for the front-end and user experience, I can help you to 
                        create modern, responsive and eye-catching web solutions to transform 
                        your business in the digital landscape and take it to the next level. 
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
