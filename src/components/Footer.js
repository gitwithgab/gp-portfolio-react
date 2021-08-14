import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer>

            <p>© {currentYear} Gabrielle Pantin </p>
            
        </footer>

    )
    
}

export default Footer