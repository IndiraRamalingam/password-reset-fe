import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/signup">SignUp</NavLink>
            </li>
            <li>
                <NavLink to="/signin">SignIn</NavLink>
            </li>
        </nav>
    </div>
  )
}

export default NavBar