import React from 'react'
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa'; 
import MobileNavLinks from "./MobileNavLinks";
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
                <nav >
                    {open ? closeIcon : hamburgerIcon}
                    {open && <MobileNavLinks isMobile={true} closeMobileNav={closeMobileNav} />}
                </nav>
            </nav>
        </>
    )
}

export default MobileNavigation
