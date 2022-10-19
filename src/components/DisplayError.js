import React from 'react';
import './DisplayError.css';
import { ReactComponent as Success } from '../assets/success.svg';



function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      return (
        <p className='EmailValid'> <Success />Your email is confirmed!</p>
      )
  
    } else {
  
      return (
        <p className='ErrorState'>Error State</p>
        )
  
    }
  
  }
  
export default ValidateEmail;

