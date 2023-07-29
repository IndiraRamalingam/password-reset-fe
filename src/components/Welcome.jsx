import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div>
        <br/>
        <h2>Welcome to my page!!!</h2>

        <p>
         <Link to="/signin">Back to SignIn</Link>
       </p>
    </div>
  )
}

export default Welcome