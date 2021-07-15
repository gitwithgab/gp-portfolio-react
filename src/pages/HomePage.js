import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/sections/IntroductionSection";
import About from "../components/sections/AboutSection";
import Toolkit from "../components/sections/ToolkitSection";
import Projects from "../components/sections/ProjectsSection";
import Contact from "../components/sections/ContactSection";
import { images } from "../components/ProjectData";

const HomePage = () => {
    return (
        <>

            <Header />

            <main>

                <Introduction />

                <About />

                <Toolkit />

                <Projects slides={images} />

                <Contact />

            </main>
            
            <Footer />
        </>
    )
}

export default HomePage
