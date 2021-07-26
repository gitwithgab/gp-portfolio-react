import React from 'react';



const Form = ({errors, handleChange, handleSubmit, touched, values}) => {


    return (
        <>
                <form action="https://formspree.io/f/xjvjoddp" method="POST" onSubmit={handleSubmit}>
                    
                    <div className= "form-input">     

                        <label>
                        
                        
                        <input 
                            id="fullname" 
                            type="text" 
                            placeholder="Full Name *" 
                            name="fullname"
                            value={values.fullname}
                            onChange={handleChange}
                            required
                        />
                        
                        {touched.fullname && 
                        <p>{errors.fullname}</p>}
                       
                      
                       </label>

                    </div>    

                    <div className= "form-input">

                        <label>
                        
                        <input 
                            id="email"  
                            type="email" 
                            placeholder="Email Address *" 
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />

                        {touched.email && 
                        <p>{errors.email}</p>}
                        
                        </label>

                    </div>

                    <div className= "form-input">   

                        <label>

                        <input 
                            id="subject"  
                            type="text" 
                            placeholder="Subject *" 
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            required
                        />

                        {touched.subject && 
                        <p>{errors.subject}</p>}
                        
                        </label>
                    </div>  

                    <div className= "form-input">   

                        <label>
                     
                        <textarea 
                            id="message" 
                            placeholder ="Message *" 
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            required
                            >
                        </textarea>
                        
                        {touched.message && 
                        <p>{errors.message}</p>}
                        
                        </label>
                    </div>   
                                    
                    <button type="submit">SEND</button>
                                
                </form>
        </>
    )
}

export default Form
