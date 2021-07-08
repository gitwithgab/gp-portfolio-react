import React from 'react'

const FooterLight = () => {

    const currentYear = new Date().getFullYear();

    return (
       
            <footer id="footer-light">

                <p >

                    Copyright © {currentYear}

                </p>

            </footer>
        
    )
}

export default FooterLight
