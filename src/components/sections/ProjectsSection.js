import React, {useState} from 'react';
import {images} from "../ProjectData";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";


const ProjectsSection = (slides) => {

    const [current,setCurrent] = useState(0)

    return (
        <>
                <section id="projects">

                            <h2>Projects</h2>

                            <div className="projects-carousel">
                                    
                                    <div>
                                        <img src = {images[current].img} alt="carousel-photos"/> 
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

                                        <button>{images[current].button1}</button>

                                        <button>{images[current].button2}</button>

                                   
                                    </div>

                            </div>

                            <div>
                                    <FaChevronLeft className="prev" onClick = {() => {current > 0 && setCurrent(current -1) }} />
                                        
                                    <FaChevronRight className="next" onClick = {() => {current < images.length -1 && setCurrent(current +1)}} />
                            </div>
                              

                </section>
                        
                
        </>
    )
}

export default ProjectsSection
