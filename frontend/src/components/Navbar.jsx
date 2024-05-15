import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../assets/icons/hamburger.svg?react';
import CloseNav from '../assets/icons/closeNav.svg?react';
import logo from '../assets/images/LongDollarLogo.jpg';

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
                <div className="container">
                    <div className='logo'>
                        <Link to="/">
                        <img src={logo} alt="Long Dollar Logo" /> 
                        </Link> 
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        { !showNavbar && <Hamburger /> }
                        { showNavbar && <CloseNav />}
                    </div>
                    {
                        showNavbar && <div className="navOverlay">
                            <button type='button' className='overlayButton' onClick={handleShowNavbar}></button>
                        </div>
                    }
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