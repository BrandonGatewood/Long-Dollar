import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '../../assets/icons/homeIcon.svg?react';
import ReportsIcon from '../../assets/icons/reportsIcon.svg?react';

// Styles
import '../../css/components/navbar.css';
import '../../css/button.css';

const Navbar = () => {
    const [ currPage, setCurrPage ] = useState(1);

    return(
        <>
            <nav className='navbar'>
                <NavLink to='/' className="navbarLink navBorderRight" onClick={ () => setCurrPage(1) }>
                        <HomeIcon />
                        {
                            currPage === 1 && 
                            <p className='navbarTitle'>Home</p>
                        }
                </NavLink>
                <NavLink to='/Reports' className="navbarLink navBorderLeft" onClick={ () => setCurrPage(2) }>
                    <ReportsIcon />
                    {
                        currPage === 2 && 
                        <p className='navbarTitle'>Reports</p>
                    }
                </NavLink>
            </nav> 

        </>
    )
}

export default Navbar;