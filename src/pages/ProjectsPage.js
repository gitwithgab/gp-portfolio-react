import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const ProjectsPage = () => {
    return (
        <>
          
                <Header />

                <section id="projects">

                            <h2>Projects</h2>
                                <div>
                                    <h3>
                                        COMING SOON
                                    </h3>
                                    <p>
                                        Get ready, something cool <br/>
                                        is on the way!
                                    </p>
                                    <Link to="/contact"> <button>GET IN TOUCH</button> </ Link>
                                </div>

                </section>
                        
                <Footer />
                
        </>
    )
}

export default ProjectsPage
