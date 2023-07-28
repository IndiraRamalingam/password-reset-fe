import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import auth from '../services/auth';

function SignIn() {
 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  
  const handleSignin =(event) =>{
    event.preventDefault();
    console.log(email,password)
    auth.signin({email,password})
  
  }
  
    return (
      <>
       <form onSubmit={handleSignin}>
        <br/><br/>
         <input 
         type='email'
         value={email}
         placeholder='Email ID'
         onChange={(event) => setEmail(event.target.value) }
        /><br/><br/>
         <input 
         type='password'
         value={password}
         placeholder='Password'
         onChange={(event) => setPassword(event.target.value) }
        /><br/><br/>
        <button type="submit">Sign In</button>
       </form>
       <br></br>
       <Link to='/forgot_password'>Forgot Password</Link>
       <p>
        New User? <Link to="/signup">Sign Up</Link>
       </p>
      </>
    )
  }
  

export default SignIn