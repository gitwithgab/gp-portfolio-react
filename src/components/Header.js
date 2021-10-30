import React, {useState} from 'react';
import Logo from "../components/Logo";
import MobileNavigation from "./MobileNavigation";
import Navigation from "../components/Navigation";


const Header = () => {

    const [header, setHeader]=useState(false);

    const changeBg = () => {
            if(window.scrollY >= 800) {
                setHeader(true)
            }
            else {
                setHeader(false)
            }
    }

    window.addEventListener('scroll', changeBg)

    return (

        <header className={header ? 'header active' : 'header'}>
                
                <Logo />
                
                <MobileNavigation />

                <Navigation />

        </header>

    )
}

export default Header
