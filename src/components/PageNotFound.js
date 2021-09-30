import React from 'react';
import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <>

            <div className="page-not-found">

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
