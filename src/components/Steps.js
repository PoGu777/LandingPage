import React from 'react';
import { ReactComponent as Invitation } from '../assets/invite.svg';
import { ReactComponent as Coin } from '../assets/collect-coins.svg';
import { ReactComponent as Voucher } from '../assets/voucher.svg';
import './Steps.css';

function Steps() {
    return (
        <div className='Box'>
            <div className='InviteFriends'>
                <Invitation  className='Inv'/>
                <div className='StepOne'>
                    <p className='Head'>STEP 1</p>
                    <p className='InvFriends'>INVITE FRIENDS</p>
                    <p className='Refer'>Refer friends with your unique referral link.</p>
                </div>
            </div>
            <div className='Collect'>
                <Coin  className='Coin'/>
                <div className='StepTwo'>
                    <p className='Head'>STEP 2</p>
                    <p className='InvFriends'>COLLECT COINS</p>
                    <p className='Refer'>Get 1 coin for each friend that installs our extension using your referral link.</p>
                </div>
            </div>
            <div className='InviteFriends'>
                <Voucher  className='Voucher'/>
                <div className='StepOne'>
                    <p className='Head'>STEP 3</p>
                    <p className='InvFriends'>GET VOUCHER</p>
                    <p className='Refer'>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
                </div>
            </div>
        </div>
)
};

export default Steps;