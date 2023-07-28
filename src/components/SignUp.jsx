import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import auth from '../services/auth'

function SignUp() {
  
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const handleSignup =(event) =>{
  event.preventDefault();
  
  auth.signup({name,email,password})
}

  return (
    <>
     <form onSubmit={handleSignup}>
      <br/><br/>
      <input 
       type='text'
       value={name}
       placeholder='User Name'
       onChange={(event) => setName(event.target.value) }
      /><br/><br/>
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
      <button type="submit">Sign Up</button>
     </form>
     <p>
      Already Registered? <Link to="/signin">Sign In</Link>
     </p>
    </>
  )
}

export default SignUp