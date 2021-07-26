import React from 'react';
import SocialLinks from "../../components/SocialLinks";
import FormContact from "../FormContact";


const nameValidation = (fieldName, fieldValue) => {
    if(fieldValue.trim() === '') {
        return `${fieldName} is required`;
    }

    return null;
};

const emailValidation = email => {
    if(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    ){
        return null;
    }

    if (email.trim() === ''){
        return 'Email address is required';
    }
        return 'Please enter a valid email address'
}

const subjectValidation = (fieldSubject, fieldValue) => {
    if(fieldValue.trim() === '') {
        return `${fieldSubject} is required`;
    }

    return null;
    };

const messageValidation = (fieldMessage, fieldValue) => {
    if(fieldValue === '') {
        return `${fieldMessage} is required`;
    }
    
    return null;
    };
    

const validate = {
    fullname : name => nameValidation('Full Name', name),
    email : emailValidation,
    subject : name => subjectValidation('Subject', name),
    message : name => messageValidation ('Message', name)
}

const initialValues = {
    fullname : '',
    email : '',
    subject : '',
    message : ''
}



const ContactSection = () => {
    return (
        <>
          
                <section id="contact-me">
            
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

                                <FormContact validate={validate} initialValues={initialValues} />

                            </div>   
                       
                        </div>
                    </section>
        
         </>
    )
}

export default ContactSection
