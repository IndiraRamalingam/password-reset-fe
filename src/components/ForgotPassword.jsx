import React, { useState } from 'react';
import auth from '../services/auth';

function ForgotPassword() {
  const [email,setEmail] = useState('');

  const handleForgotpassword =(event) =>{
    event.preventDefault();
    console.log("Clicked"); 
    auth.forgotpassword({email})
    console.log(email)
  }
  
  return (
    <div>
      <form onSubmit={handleForgotpassword}>
      <br/><br/>
         <input 
         type='email'
         value={email}
         placeholder='Email ID'
         onChange={(event) => setEmail(event.target.value) }
        /><br/><br/>
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}

export default ForgotPassword