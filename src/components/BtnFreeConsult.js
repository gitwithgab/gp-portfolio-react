import React from 'react';
import {Link} from 'react-scroll';

const BtnFreeConsult = () => {
    return (
        <>
                <Link to="contact-me"
                    activeClassName="active" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={750}> 
                    <button>FREE CONSULTATION</button> 
                </ Link>
        </>
    )
}

export default BtnFreeConsult
