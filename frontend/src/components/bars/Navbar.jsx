import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/icons/homeIcon.svg?react';
import ReportsIcon from '../../assets/icons/reportsIcon.svg?react';

// Styles
import '../../css/components/navbar.css';
import '../../css/button.css';

const Navbar = () => {
    const [ currPage, setCurrPage ] = useState(true);
    const handleCurrPage = () => {
        setCurrPage(!currPage);
    }
    return(
        <>
            <nav className='navbar'>
                <NavLink to='/' className="navbarLink navBorderRight" onClick={ handleCurrPage }>
                        <HomeIcon />
                        {
                            currPage && 
                            <p className='navbarTitle'>Home</p>
                        }
                </NavLink>
                <NavLink to='/Reports' className="navbarLink navBorderLeft" onClick={ handleCurrPage }>
                    <ReportsIcon />
                    {
                        !currPage && 
                        <p className='navbarTitle'>Reports</p>
                    }
                </NavLink>
            </nav> 

        </>
    )
}

export default Navbar;