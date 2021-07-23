import React, {useState} from 'react';
import { images } from "../ProjectData";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";


const ProjectsSection = (slides) => {

    const [current,setCurrent] = useState(0);

    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0: current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(images) || images.length <= 0){
        return null
    }


    return (
        <>
                <section id="projects" style= {{backgroundColor: "#2c1839"
                 }}>

                    <h2 >Projects</h2>

                    <div className="projects-carousel ">

                        <div className="carousel-arrows">
                            <FaChevronLeft className="prev" onClick = {nextSlide} />
                                            
                            <FaChevronRight className="next" onClick = {prevSlide} />
                        </div>

                        <div>
                            <img src = {images[current].img} alt="project-photos" /> 
                        </div>
                                    
                        <div>
                            <h3>{images[current].title}</h3>

                            <p>{images[current].description}</p>

                            <h5>{images[current].subtitle}</h5>

                            <div className="icons"> 
                                            
                                <p>{images[current].icon1}</p>

                                <p>{images[current].icon2}</p>

                                <p>{images[current].icon3}</p>

                                <p>{images[current].icon4}</p>

                                <p>{images[current].icon5}</p>

                                <p>{images[current].icon6}</p>

                            </div>
                            
                            <div>

                                
                                <a href = {images[current].urlReview} rel="noreferrer noopener" target="_blank" > 
                                    <button>REVIEW CODE</button> 
                                </a> 

                                <a href = {images[current].urlSite} rel="noreferrer noopener" target="_blank" > 
                                    <button>LIVE SITE</button> 
                                </a> 

                            </div>

                        </div>

                     </div>         

                </section>
                        
                
        </>
    )
}

export default ProjectsSection
