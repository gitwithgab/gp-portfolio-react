import React from 'react';
import ButtonContact  from "../../components/ButtonContact";
import {GrMysql} from "react-icons/gr";
import {SiPostman, SiNetlify} from"react-icons/si";



const ToolkitSection = () => {
    
    return (
        <>
       
        <section id="tool-kit">

                <h2>Toolkit</h2>

                <div>
                    <div>
                        <i class="fab fa-html5"></i>
                        <p>HTML</p>
                    </div>



                    <div>
                        <i class="fab fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>

                    <div>
                        <i class="fab fa-js-square"></i>
                        <p>JavaScript</p>
                    </div>

                    <div>
                        <GrMysql className="toolkit-icon"/>
                        <p>SQL</p>
                    </div>
                    
                    <div>
                        <i class="fas fa-database"></i>
                        <p>MongoDB</p>
                    </div>

                    <div>
                        <i class="fab fa-react"></i>
                        <p>React</p>
                    </div>

                    <div>
                        <i class="fab fa-node"></i>
                        <p>Node.js</p>
                    </div>
                    
                    <div>
                        <SiPostman className="toolkit-icon"/>
                        <p>Postman</p>
                    </div>
                    
                    <div>
                        <i class="fas fa-cogs"></i>
                        <p>REST API</p>
                    </div>

                    <div>
                        <SiNetlify className="toolkit-icon"/>
                        <p>Netlify</p>
                    </div>

                    <div>
                        <i class="fab fa-git-alt"></i>
                        <p>Git</p>
                    </div>

                    <div>
                        <i class="fab fa-github-square"></i>
                        <p>Github</p>
                    </div>


                    <div>
                        <i class="fab fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </div>

                    <div> 
                        <i class="fas fa-laptop-code"></i>
                        <p>Reponsive 
                        <br/>Design</p>
                    </div>
                    
                    <div>
                        <i class="fas fa-universal-access"></i>
                        <p>Accessibility</p>
                    </div>

                </div>

               <ButtonContact />

        </section>

      </>
    )
}

export default ToolkitSection
