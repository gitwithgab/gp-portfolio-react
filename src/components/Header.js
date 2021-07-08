import React from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/img/avatar-w-bg.png";


const Header = () => {

    return (

        <header>
        
                 <Link to="/"> <img src={logo} alt="Pixeled avatar icon of Developer (Gabby)"/> </Link>

                <nav>  
                        <ul>
                            <li><Link to="/">Home</ Link></li>
                            <li><Link to="/about">About</ Link></li>
                            <li><Link to="/toolkit">Toolkit</ Link></li>
                            <li><Link to="/projects">Projects</ Link></li>
                            <li><Link to="/contact">Contact</ Link></li>
                        </ul>
                </nav> 

        </header>

    )
}

export default Header
