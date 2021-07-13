import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../assets/img/avatar-w-bg.png";


const Header = () => {


    return (

        <header>
                
                 <NavLink to="/"> <img src={logo} alt="Pixeled avatar icon of Developer (Gabby)"/> </NavLink>
                
                <nav>  
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active">Home</ NavLink></li>
                            <li><NavLink to="/about" activeClassName="active">About</ NavLink></li>
                            <li><NavLink to="/toolkit" activeClassName="active">Toolkit</ NavLink></li>
                            <li><NavLink to="/projects" activeClassName="active">Projects</ NavLink></li>
                            <li><NavLink to="/contact" activeClassName="active">Contact</ NavLink></li>
                        </ul>
                </nav> 

        </header>

    )
}

export default Header
