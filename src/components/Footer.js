import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer>

            <p className="footer"> 
                Gabrielle Pantin © {currentYear} |
                hello@gabriellepantin.com 
            </p>
            
        </footer>

    )
    
}

export default Footer