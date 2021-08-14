import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/img/avatar-w-bg.png";

const PageNotFound = () => {
    return (
        <>
            <div></div>

            <div className="page-not-found">
                
                <header>

                    <Link to="/">       

                        <img src={logo} alt="Pixeled avatar icon of Developer (Gabby)"/>
                    
                    </Link>
                    
                </header>

                <div>
                    
                    <div>
                        <h1>OOPS</h1>

                        <p>404 - PAGE NOT FOUND</p>
                    </div>

                    <Link to="/">                            
                        <button>GO BACK</button>
                    </Link>
                </div>
                

            </div>
        </>
    )
}

export default PageNotFound
