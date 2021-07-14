import React from 'react';
import SocialLinks from '../components/SocialLinks';

const ContactSection = () => {
    return (
        <>

          
                <section id="contact-me">
            
                        <h2>Contact Me</h2>

                        <div className="c-info">

                            <div>

                                <form action="https://formspree.io/f/xjvjoddp" method="POST">
                                    <label><input type="fullname" placeholder="Full Name"/></label>
                                    <label><input type="email" placeholder="Email Address" name="_replyto"/></label>
                                    <label><input type="subject" placeholder="Subject"/></label>
                                    <label><textarea placeholder ="How can I help?" name="message"></textarea></label>
                                    <button type="submit">SEND</button>
                                </form>

                            </div>   
                       
                            <div>

                                <h3>LET'S CONNECT!</h3><br/>

                                <p>
                                    Feel free to reach out and let me know how I can help to develop your next digital solution.
                                    I'm also happy to chat, have a coffee and connect.
                                    <br/><br/>Thanks for stopping by!
                                </p>

                                <SocialLinks />

                            </div>
                        </div>
                    </section>
        
         </>
    )
}

export default ContactSection
