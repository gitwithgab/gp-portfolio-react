import React from 'react';
import {Link} from 'react-scroll';
import TextRotate from "../TextRotate";
import BgVideo from "../../assets/media/video.mp4"


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
                            digital solutions on the web
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

                    <div className="bg-video">
                        <video autoPlay loop muted className="video-parallax">
                            <source src={BgVideo} type="video/mp4" />
                        </video>
                    </div>

                </section>
        
        </>
    )
}

export default IntroductionSection
