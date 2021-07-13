import React from 'react'
import {FaBars} from 'react-icons/fa';
import NavLinks from "./NavLinks";
import {useState} from "react";


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="mobile-navigation" >
                  <FaBars className="mobile-icon" 
                          onClick={()=> setOpen(!open)} 
                          />

                  {open && <NavLinks />}
            </nav>
        </>
    )
}

export default MobileNavigation
