import React from 'react'
import {Link} from "react-router-dom";
import logo from "../assets/img/avatar-w-bg.png";

const HeaderLight = () => {
    return (
        
        <header id="header-light">
        
                     <Link to="/"> <img src={logo} alt="Pixeled avatar icon of Developer (Gabby)"/> </Link>

                    <nav>  
                            <ul>
                                <li><Link id="light-nav" to="/">Home</ Link></li>
                                <li><Link id="light-nav" to="/about">About</ Link></li>
                                <li><Link id="light-nav" to="/toolkit">Toolkit</ Link></li>
                                <li><Link id="light-nav" to="/projects">Projects</ Link></li>
                                <li><Link id="light-nav" to="/contact">Contact</ Link></li>
                            </ul>
                    </nav> 

        </header>
        
    )
}

export default HeaderLight
