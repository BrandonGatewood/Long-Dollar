import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '../assets/icons/homeIcon.svg?react';
import ReportsIcon from '../assets/icons/reportsIcon.svg?react';

// Styles
import '../css/navbar.css';
import '../css/button.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    return(
        <>
            <nav className='navbar'>
                <NavLink to='/' className="navbarLink">
                        <HomeIcon />
                        <p className='navbarTitle'>Home</p>
                </NavLink>
                <NavLink to='/Reports' className="navbarLink">
                    <ReportsIcon />
                    <p className='navbarTitle'>Reports</p>
                </NavLink>
            </nav> 

        </>
    )
}

export default Navbar;