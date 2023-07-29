import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from "../services/instance";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ForgotPassword() {
  const [email,setEmail] = useState('');
  const[msg,setMsg]=useState('');
  const[info,setInfo]=useState('');

  const handleForgotpassword =(event) =>{
    event.preventDefault();
    forgotpassword({email})
  }

  const forgotpassword=async({email})=>{
    console.log(email)
    if(email!=""){
      try{
          const response=await instance.authInstance.post('/forgot_password',{email});
          setInfo(`Password Reset Link has to sent to your Email Id - ${email}`)
          console.log("YES")
          }
          catch(error)
          {
            setMsg('Email does not exists')
            console.log("YES")
          }
      }  
      else{
        setMsg('Email is required to send Mail')
      }
}

  const formStyles = {
    background: "whitesmoke",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    width: "28rem",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "0rem 1.5rem",
  };

  return (
    <div className="mx-auto col-10 col-md-8 col-lg-4 mt-5" style={formStyles}>
      <Form onSubmit={handleForgotpassword}>
             <div>
                <h4 style={{ textAlign: "center" }}>FORGOT PASSWORD PAGE</h4>
                <br/>
              </div>
                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type="email" 
                    placeholder="Enter Email"
                    value={email}
                    
                    onChange={(event) => setEmail(event.target.value) }
                    />
                </Form.Group>
                 <p style={{ color: "red" }}>{msg}</p>
                  <p style={{ color: "green" }}>{info}</p>
                
                 <div className="text-center">
                    <Button variant="primary" type="submit">
                      Send Email
                    </Button>
                    <br/><br/>
                    
                     <Link to="/signin">Back to SignIn</Link>
                </div>
      </Form>
    </div>
  )
}

export default ForgotPassword