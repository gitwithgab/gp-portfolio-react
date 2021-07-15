import React from 'react'
import Typewriter from 'typewriter-effect';
const TextRotate = () => {

    
    return (
        
            <>
                <div >
                    <Typewriter className="rotator" 
                                    options = {{
                                    strings:['Hello','Hola','Bonjour','Guten Tag','Olá',
                                    '你好','Namaste','Shalom','Shikamoo','مرحبا' ],
                                    autoStart:true,
                                    loop:true,

                                }} 
                            />
                </div>
                
             </>

    )
}

export default TextRotate
