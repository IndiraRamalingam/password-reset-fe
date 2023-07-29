import React from 'react'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
    <div> 
          <Routes>   
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/forgot_password' element={<ForgotPassword />} />
            <Route path='/reset_password/:token' element={<ResetPassword />} />
            <Route path="/" element={<Navigate to="/signin" replace />} />
          </Routes>
      
    </div>
      </BrowserRouter>
  )
}

export default App