import React from 'react'
import { Link } from "react-scroll";

const NavLinks = (props) => {
    return (
        <>
            <nav>
                    <ul>
                        
                        <li><Link to='introduction' 
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                            onClick={() => props.isMobile && props.closeMobileNav()}>Home</ Link>
                        </li>

                        <li><Link to='about-me-sect' 
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                            onClick={() => props.isMobile && props.closeMobileNav()}>About</ Link>
                        </li>

                        <li><Link to='services' 
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                            onClick={() => props.isMobile && props.closeMobileNav()}>Services</ Link>
                        </li>

                        <li><Link to='tool-kit' 
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                            onClick={() => props.isMobile && props.closeMobileNav()}>Toolkit</ Link>
                        </li>

                        <li><Link to='projects' 
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                            onClick={() => props.isMobile && props.closeMobileNav()}>Projects</ Link>
                        </li>

                        <li><Link to='contact-me-sect' 
                            activeClassName="active" 
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={750}
                            onClick={() => props.isMobile && props.closeMobileNav()}>Contact</ Link>
                        </li>
                    </ul>
            </nav>
          
        </>
    )
}

export default NavLinks
