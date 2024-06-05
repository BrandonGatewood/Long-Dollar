import Signout from '../assets/icons/signOut.svg?react';
import Logo from '../assets/images/LongDollarLogo.jpg';
// Styles
import '../css/components/topBar.css';

const TopBar = () => {

    return (
        <>
            <div className="topBarContainer">
                <img className='logo' src={ Logo } alt="Long Dollar logo" />
                <Signout />
            </div>
        </>
    )
}

export default TopBar;