import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/IntroductionSection";
import About from "../components/AboutSection";
import Toolkit from "../components/ToolkitSection";
import Projects from "../components/ProjectsSection";
import Contact from "../components/ContactSection";

const HomePage = () => {
    return (
        <>

            <Header />

            <Introduction />

            <About />

            <Toolkit />

            <Projects />

            <Contact />
            
            <Footer />
        </>
    )
}

export default HomePage
