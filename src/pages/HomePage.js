import React from 'react';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>

            <Header />

            <main>
                <section id="introduction">

                    <div>
                        <h1>
                            <span class="text-rotator"> </span>
                            <br/>
                            I'm Gabby
                        </h1>
                        <h4>Full-Stack Web Developer</h4>
                        <p> 
                            I create modern and responsive 
                            digital solutions for small businesses
                        </p>

                        <Link to="/about"> <button>LEARN MORE</button> </ Link>

                    </div>

                    <div>
                        
                    </div>

                </section>
            </main>

            <Footer />
        </>
    )
}

export default HomePage
