import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './Header.css';

function Header() {
    return (
            <div className="Header">
                <div className="Header-logo">
                    <Logo />
                </div>
                <div className='wrap'>
                    
                        <ul className="Chrome-extention">
                            <a href='#'>Chrome extention</a>
                        </ul>
                    
                    
                        <ul className="Price-comp">
                            <a href='#'>Price Comparison</a>
                        </ul>
                    
                    
                        <ul className="Blog">
                            <a href='#'>Blog</a>
                        </ul>
                    
                </div>
            </div>
    )
    }

export default Header;