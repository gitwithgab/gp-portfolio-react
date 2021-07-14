import React from 'react';
import {Link} from 'react-scroll';
import TextRotate from "../components/TextRotate";

const IntroductionSection = () => {
    return (
        <>
           
                <section id="introduction">
               
                    <div>
                        <h1>
                       
                            <span class="text-rotator"><TextRotate /></span>
                            I'm Gabby
                        </h1>
                        <h4>Full-Stack Web Developer</h4>
                        <p> 
                            I create modern and responsive 
                            <br/>digital solutions for small businesses
                        </p>

                        <Link to="about-me"
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}> 
                            <button>LEARN MORE</button> 
                        </ Link>

                    </div>

                    <div>
                        
                    </div>

                </section>
        
        </>
    )
}

export default IntroductionSection
