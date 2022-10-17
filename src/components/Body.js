import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './Body.css';
import Steps from './Steps.js';
import Refer from './Refer.js';
import Store from './Store.js';

function Body() {
    return (
            <div className='Body'>
                
                    <Refer />
                    <Steps />
                    <Store />
                
                
                    
                
            </div>

    )
}


export default Body;