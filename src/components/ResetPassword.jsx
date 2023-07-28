import React, { useState } from 'react';
import auth from '../services/auth';
import { useParams } from 'react-router-dom';

function ResetPassword() {

    const[password,setPassword] = useState('');
    const[confirmpassword,setConfirmpassword] = useState('');
    const {token} = useParams();

const handleUpdatesubmit = (event) =>{
    event.preventDefault();
    if(password == confirmpassword)
    {
        auth.resetpassword({password,token})
    }
}

  return (
    <div>
        <form onSubmit={handleUpdatesubmit}>
        <br/><br/>
            <input 
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            /><br/><br/>
             <input 
            type="password"
            placeholder="Confirm New Password"
            value={confirmpassword}
            onChange={(e)=>setConfirmpassword(e.target.value)}
            /><br/><br/>
            <button type="submit">Update Password</button>
        </form>
    </div>
  )
}

export default ResetPassword