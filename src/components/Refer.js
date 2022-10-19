import React, { useState } from 'react';
import { ReactComponent as EmailLogo } from '../assets/email.svg';
import './Refer.css';
import { ReactComponent as Success } from '../assets/success.svg';





function Refer() {
    const [isValid, setIsValid] = useState(null);
    

    function SetEmail() {
        const email = document.getElementById('EmailInput').value
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          
        if (email.match(validRegex)) {
        setIsValid(true)

        } 
        else {
        setIsValid(false)
        }
          
      }

    return (
            <div className="Body11">
                <div className='Name1'>
                    <p className='Paragraph1'>
                        REFER FRIENDS AND GET REWARDS
                    </p>
                </div>
                <div className='Text'>
                    <p className='Paragraph2'>
                        Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.
                    </p>
                </div>
                <div className='Confirm'> 
                {isValid === true &&
                    <div className='EmailValid'> 
                    <Success className='SuccessIcon'/><p className='ConfirmText'>Your email is confirmed!</p>
                    </div>
                    
                }
                {isValid === false &&
                    <p className='ErrorState'>Error State</p>
                    
                }
                </div>
                <div>
                    {isValid === null &&
                        <label className='Label'>
                            <EmailLogo className='Icon'/>
                            <input placeholder= "Enter your email address" id="EmailInput" type="text" name="EmailNull" className='Input'/>   
                        </label>
                        
                    }
                    {isValid === true &&
                        <label className='Label'>
                            <EmailLogo className='Icon'/>
                            <input placeholder= "Enter your email address" id="EmailInput" type="text" name="EmailValid" className='Input'/>
                            <button className='CopyButton'>Copy</button>
                        </label>
                    
                    }
                    {isValid === false &&
                        <label className='Label'>
                            <EmailLogo className='Icon'/>
                            <input placeholder= "Enter your email address" id="EmailInput" type="text" name="EmailFalse" className='Input'/>   
                        </label>
                        
                    }
                </div>
                    
                    <button className='Button' type='button' onClick={SetEmail}>Get Referral Link</button>
                    <div className='Limits'>
                        <p className='LimitsPar'>
                            Limits on max rewards apply.
                        </p>
                    </div>
                </div>
               

    )
}


export default Refer;