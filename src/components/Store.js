import React from 'react';
import { ReactComponent as Chrome } from '../assets/chrome.svg';
import { ReactComponent as Apple } from '../assets/apple.svg';
import { ReactComponent as Star } from '../assets/star.svg';
import './Store.css';

function Store() {
    return (
        <div className='StoreBar'>
            <div className='Chrome'>
                    <Chrome className='Pic'/>
                    <div className='TextBox'>
                        <p className='Line1'>available in the</p>
                        <p className='Line2'>chrome web store</p>
                    </div>
            </div>
            <div className='Apple'>
                    <Apple className='Pic'/>
                    <div className='TextBox'>
                        <p className='Line1'>available in the</p>
                        <p className='Line2'>apple app store</p>
                    </div>
            </div>
            <div className='Rate'>
                <Star className='Star'/>
                <Star className='Star'/>
                <Star className='Star'/>
                <Star className='Star'/>
                <Star className='Star'/>
                <p className='StoreRe'>Chrome Store reviews</p>

            </div>
        </div>
)
};

export default Store;