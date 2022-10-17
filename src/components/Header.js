import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Menu } from '../assets/menu.svg';
import './Header.css';

var x = window.matchMedia("(min-width: 1900px)")

function Header(x) {
    if (x.matches) {
        return (
                <div className="Header">
                    <div className='HeaderMap'>
                        <Logo className="Header-logo"/>
                        <div className='wrap'>
                                <ul className='MenuLinks'>
                                    <a className="Chrome-extention" href='#'>Chrome extention</a>
                                    <a className="Price-comp" href='#'>Price Comparison</a>
                                    <a className="Blog" href='#'>Blog</a>
                                </ul>
                            
                        </div>
                    </div>
                </div>
        )
        }
    else {
        return (
        <div className="Header">
                    <div className='HeaderMap'>
                        <Logo className="Header-logo"/>
                        <button className='Menu-logo' href="#" ><Menu className="Menu-logo-inner"/></button>
                        
                    </div>
                </div>
        )
    }
}


export default Header;