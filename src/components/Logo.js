import React from 'react'
import {Link} from "react-scroll";
import logo from "../assets/img/avatar-w-bg.png";

const Logo = () => {
    return (
        <>
            <Link to="introduction"                             
   
                spy={true}
                smooth={true}
                offset={0}
                duration={750}> 
                <img src={logo} alt="Pixeled avatar icon of Developer (Gabby)"/> 
                
            </Link>
        </>
    )
}

export default Logo
