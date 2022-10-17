import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as EmailLogo } from '../assets/email.svg';
import { ReactComponent as Insta } from '../assets/instagram.svg';

import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Map'>
                <div className='About'>
                    <Logo className='Logo'/>
                    <p className='Mission'>
                        Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!
                    </p>
                    <p className='Copy'>
                        © 2021 Ratepunk. All Rights Reserved.
                    </p>
                </div>
                <div className='FooterLinkBox'>
                    <p className='LinkHead'>QUICK LINKS</p>
                    <ul className='List'>
                        <a className='Price' href='#'>Price Comparison</a>
                        <a className='Other' href='#'>Chrome Extension</a>
                        <a className='Other' href='#'>How It Works</a>
                        <a className='Other' href='#'>Ratepunk Blog</a>
                        <a className='Other' href='#'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='ContactSocialBox'>
                    <div className='Contact'>
                        <p className='ContactText'>Contact</p>
                        <div className='ContactBox'>
                            <EmailLogo className='EmailLogo'/>
                            <p className='Email'>hi@ratepunk.com</p>
                        </div>
                    </div>
                    <div className='SocialBox'>
                        <div>
                            <p className='SocialBoxHead'>Social</p>
                            <div>
                                <Insta className='InstaLogo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
};

export default Footer;