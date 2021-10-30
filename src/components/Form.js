import React, {useState} from 'react';


const Form = () => {

    const [fullName, setFullName] = useState ("");
    const [email, setEmail] = useState ("");
    const [subject, setSubject] = useState ("");
    const [message, setMessage] = useState ("");
    const [errorFullName, setErrorFullName] = useState ("");
    const [errorEmail, setErrorEmail] = useState ("");
    const [errorSubject, setErrorSubject] = useState ("");
    const [errorMessage, setErrorMessage] = useState ("");


    const validateForm = () => {


        let isValidated = true;


            if (fullName === "")
            {
                setErrorFullName ("Full Name is required");
                isValidated=false;
            }
            else 
            {
                setErrorFullName ("");
            }


            if(email === "")
            {
                setErrorEmail("Email address is required");
                isValidated=false;
            }

            else
            {
                setErrorEmail("");
            }


            if(subject === "")
            {
                setErrorSubject("Subject is required");
                isValidated=false;
            }
            else
            {
                setErrorSubject("")
            }


            if(message === "")
            {
                setErrorMessage("Message is required");
                isValidated=false;
            }
            else
            {
                setErrorMessage("")
            }


            return isValidated;

    }


    return (
        <>
                <form action="https://formspree.io/f/xjvjoddp" method="POST" >
                    
                    <div className= "form-input">     

                        <label></label>
                        
                        
                        <input 
                            id="fullname" 
                            type="text" 
                            placeholder="Full Name *" 
                            name="fullname"
                            value={fullName}
                            onChange={(event)=>{setFullName(event.target.value)}}
                            
                        />
                        
                        <span className ="error">{errorFullName}</span>
                       
                       

                    </div>    

                    <div className= "form-input">

                        <label></label>
                        
                        <input 
                            id="email"  
                            type="email" 
                            placeholder="Email Address *" 
                            name="email"
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
                            
                        />

                        <span className ="error">{errorEmail}</span>
                        
                       

                    </div>

                    <div className= "form-input">   

                        <label></label>

                        <input 
                            id="subject"  
                            type="text" 
                            placeholder="Subject *" 
                            name="subject"
                            value={subject}
                            onChange={(event)=>{setSubject(event.target.value)}}
                            
                        />

                        <span className ="error">{errorSubject}</span>
                        
                        
                    </div>  

                    <div className= "form-input">   

                        <label></label>
                     
                        <textarea 
                            id="message" 
                            placeholder ="Message *" 
                            name="message"
                            value={message}
                            onChange={(event)=>{setMessage(event.target.value)}}
                            
                            >
                        </textarea>
                    
                        <span className ="error">{errorMessage}</span>
                        

                    </div>   
                                    
                    <button type="submit" onClick={()=>{validateForm()}}>SEND</button>
                                
                </form>

                
        </>
    )
}

export default Form