import React from 'react';
import {Link} from 'react-scroll';

const ButtonContact = () => {
    return (
        <>
              <Link to="contact-me"
                    activeClassName="active" 
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={750}> 
                    <button>GET IN TOUCH</button> 
              </ Link>
        </>
    )
}

export default ButtonContact
