import React, {useState} from 'react';
import { carousel } from "../ProjectData";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";


const ProjectsSection = (slides) => {


    const [current,setCurrent] = useState(0);

    const length = carousel.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0: current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(carousel) || carousel.length <= 0){
        return null
    }


    return (
        <>

                <section id="project-sect">

                        <div id="projects" data-aos="fade-up" data-aos-duration="5000">

                            <h2 >Projects</h2>
                

                            <div className="projects-carousel">
                                
                                <FaChevronLeft className="prev" onClick = {prevSlide} />
                                                            
                                <FaChevronRight className="next" onClick = {nextSlide} />
                                                    
                                <div>

                                    {carousel.map((slides,index) => {
                                        return(
                                                <div 
                                                    className={index === current ? 'slide activeSlide' : 'slide'}
                                                    key={index}
                                                >
                                                    {
                                                        index === current && (

                                                            <div className="project-photos">

                                                                <img src = {carousel[current].img} alt="project-photos" /> 

                                                            </div>
                                                            
                                                        )}
                                                </div>)
                                            })}

                                </div>
                                
                                <div className="test">
                                        <div >
                                        
                                            {carousel.map((slides,index) => {
                                                return(
                                                        <div 
                                                            className={index === current ? 'slide activeSlide' : 'slide'}
                                                            key={index}
                                                        >
                                                            {
                                                                index === current && (

                                                                    <div >
                                            
                                                                        <h3>{carousel[current].title}</h3>
                                        
                                                                        <p>{carousel[current].description}</p>
                                    
                                                                    </div>
                                                                    
                                                                )}
                                                        </div>)
                                                    })}

                                            </div>

                                            <div > 

                                                {carousel.map((slides,index) => {
                                                    return(
                                                            <div 
                                                                className={index === current ? 'slide activeSlide' : 'slide'} 
                                                                key={index}
                                                            >
                                                                {
                                                                    index === current && (
                                                                        <div>
                                                                            
                                                                            <h5>STATUS</h5>
                                        
                                                                            <p>{carousel[current].status} <span className="status-icon"> {carousel[current].statusIcon}</span></p>
                                                                    
                                                                        </div>
                                                                        
                                                                    )}
                                                            </div>)
                                                        })}

                                            </div>
                                            
                                            
                                            <div>

                                                {carousel.map((slides,index) => {
                                                        return(
                                                                <div 
                                                                    className={index === current ? 'slide activeSlide' : 'slide'}
                                                                    key={index}
                                                                >
                                                                    <h5>MADE WITH</h5>
                                                                    {
                                                                        
                                                                        index === current && (
                                                                        <div className="icons"> 
                                                                            
                                                                            <p>{carousel[current].icon1}</p>
                                        
                                                                            <p>{carousel[current].icon2}</p>
                                        
                                                                            <p>{carousel[current].icon3}</p>
                                        
                                                                            <p>{carousel[current].icon4}</p>
                                        
                                                                            <p>{carousel[current].icon5}</p>
                                        
                                                                            <p>{carousel[current].icon6}</p>
                                        
                                                                            <p>{carousel[current].icon7}</p>
                                        
                                                                        </div>
                                                                            
                                                                        )}
                                                                </div>)
                                                            })}
                                                
                                            </div>
                                            
                                            <div>

                                                {carousel.map((slides,index) => {
                                                    return(
                                                            <div 
                                                                className={index === current ? 'slide activeSlide' : 'slide'}
                                                                key={index}
                                                            >
                                                                {
                                                                    index === current && (

                                                                        <div>
                                                
                                                                                <a href = {carousel[current].urlReview} rel="noreferrer noopener" target="_blank" > 
                                                                                    <button>REVIEW CODE</button> 
                                                                                </a> 

                                                                                <a href = {carousel[current].urlSite} rel="noreferrer noopener" target="_blank" > 
                                                                                    <button>LIVE SITE</button> 
                                                                                </a> 
                                        
                                                                        </div>
                                                                        
                                                                    )}
                                                            </div>)
                                                    })}
                                            
                                            </div>


                                </div>


                        
                            </div>   

                        </div>
                     
                </section>
                        
                
        </>
    )
}

export default ProjectsSection
