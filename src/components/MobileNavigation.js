import React from 'react'
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa'; 
import NavLinks from "./NavLinks";
import {useState} from "react";


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <FaBars className="mobile-icon" 
                            onClick={()=> setOpen(!open)} 
                            />

    const closeIcon = <FaTimes className="mobile-icon" 
                            onClick={()=> setOpen(!open)} 
                            />
    
    const closeMobileNav = () => setOpen (false);


    return (
        <>
            <nav className="mobile-navigation" >
                {open ? closeIcon : hamburgerIcon}
                {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav} />}
            </nav>
        </>
    )
}

export default MobileNavigation
