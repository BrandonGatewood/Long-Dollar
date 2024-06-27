import Logo from '../../assets/images/LongDollarLogo.jpg';

// Components
import SignOutModal from '../modals/SignOutModal';

// Styles
import '../../css/components/topBar.css';

const TopBar = () => {

    return (
        <>
            <div className="topBarContainer">
                <img className='logo' src={ Logo } alt="Long Dollar logo" />
                <SignOutModal />
            </div>
        </>
    )
}

export default TopBar;