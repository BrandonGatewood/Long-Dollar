import { useState } from 'react';

// components
import RenameColleagueModal from './RenameColleagueModal';
import RemoveColleagueModal from './RemoveColleagueModal';

// icons
import MenuIcon from "../../assets/icons/menuIcon.svg?react";
import CloseIcon from "../../assets/icons/closeIcon.svg?react";

// styles
import '../../css/button.css'
import '../../css/components/modal.css';

const InfoColleagueButton = ({ colleague }) => {
    const [ isActive, setIsActive ] = useState(false);
    const [ modalAnimation, setModalAnimation ] = useState("slideUp");

    const handleModal = () => {
        setModalAnimation("slideDown");
        setTimeout( () => {
            setIsActive(false);
            setModalAnimation("slideUp");
        }, 200);
    }

    return(
        <>
            <button type="button" className="button" onClick={ () => setIsActive(true) }>
                <MenuIcon />
            </button>

            {
                isActive &&
                <div className='modalOverlay'>
                    <button type="button" className="overlayButton" onClick={ handleModal }></button>
                    <div className={ `modalContent ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>{colleague.name}</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="modalBody">
                            <RenameColleagueModal colleague={ colleague } />
                            <RemoveColleagueModal colleague={ colleague } />
                        </div>
                    </div>
                </div>
            }
            {
            }
        </>
    )
}

export default InfoColleagueButton;