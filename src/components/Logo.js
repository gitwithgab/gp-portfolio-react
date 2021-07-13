import React from 'react'
import {NavLink} from "react-router-dom";
import logo from "../assets/img/avatar-w-bg.png";

const Logo = () => {
    return (
        <>
            <NavLink to="/"> <img src={logo} alt="Pixeled avatar icon of Developer (Gabby)"/> </NavLink>
        </>
    )
}

export default Logo
