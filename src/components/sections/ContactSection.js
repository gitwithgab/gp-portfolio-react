import React from 'react';
import SocialLinks from "../../components/SocialLinks";
import Form from "../Form";


const ContactSection = () => {
    return (
        <>
          
                <section style={{backgroundColor:"#0a131e"}}  >
                   
                    <div id="contact-me" data-aos="fade-up">
                            <h2>Contact Me</h2>

                            <div className="c-info">

                                <div>

                                    <h3>LET'S CONNECT!</h3><br/>

                                    <p>
                                        Feel free to reach out and let me know how I can help to develop your next digital solution.
                                        I'm also happy to chat, have a coffee and connect.
                                        <br/><br/>Thanks for stopping by!
                                    </p>

                                    <SocialLinks />

                                </div>

                                <div>

                                    <Form />

                                </div>   
                        
                            </div>
                            
                    </div>
                        
                </section>
        
         </>
    )
}

export default ContactSection
