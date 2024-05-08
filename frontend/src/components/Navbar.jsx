import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hamburger from '../assets/icons/hamburger.svg?react'
import logo from '../assets/images/LongDollarLogo.jpg'

import '../css/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    return(
        <>
            <nav className='navbar'>
                <div className="container">
                    <div className='logo'>
                        <Link to="/">
                        <img src={logo} alt="Long Dollar Logo" /> 
                        </Link> 
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/History">History</NavLink>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav> 

        </>
    )
}

export default Navbar;