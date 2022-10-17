import React from 'react';
import { ReactComponent as EmailLogo } from '../assets/email.svg';
import './Refer.css';

function Refer() {
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
                <div>
                    <p className='ErrorState'> 
                        Error state
                    </p>
                </div>
                <div>
                    <label>
                        <EmailLogo className='Icon'/>
                        <input placeholder= "Enter your email address" type="text" name="name" className='Input'/>
                            
                    </label>
                    <button className='Button' type='button'>Get Referral Link</button>
                </div>
                <div className='Limits'>
                    <p>
                        Limits on max rewards apply.
                    </p>
                </div>
            </div>

    )
}


export default Refer;