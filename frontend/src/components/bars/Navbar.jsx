import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Assets
import Logo from '../../assets/images/LongDollarLogo.jpg';
import Hamburger from '../../assets/icons/hamburger.svg?react';
import Close from '../../assets/icons/close.svg?react';

// Styles
import '../../css/components/navbar.css';
import '../../css/button.css';

const Navbar = () => {
   const [ showNavbar, setShowNavbar ] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    return(
        <>
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink to='/'>
                        <img src={ Logo }  alt="Mimo's Logo" className="logo" />
                    </NavLink>
                </div>
                <div className="menuIcon" onClick={ handleShowNavbar }>
                    { !showNavbar && <Hamburger /> }
                    { showNavbar && <Close /> }
                </div>
                {
                    showNavbar && 
                        <button type='button' className='overlayButton' onClick={ handleShowNavbar }></button>
                }
                <div className={`nav-elements  ${ showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Transactions'>
                                Transactions 
                            </NavLink>
                        </li>
                        <li className='signout'>
                            <button className='button buttonPrimary buttonSignout'>
                                Signout 
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    ); 
}

export default Navbar;