import React from 'react';
import Logo from "../components/Logo";
import MobileNavigation from "./MobileNavigation";
import Navigation from "../components/Navigation";


const Header = () => {


    return (

        <header>
                
                <Logo />
                
                <MobileNavigation />

                <Navigation />

        </header>

    )
}

export default Header
