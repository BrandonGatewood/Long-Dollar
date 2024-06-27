import { useState } from 'react';

// icons 
import SignOut from '../../assets/icons/signOut.svg?react';
import CloseIcon from "../../assets/icons/closeIcon.svg?react";

// styles
import '../../css/button.css';
import '../../css/components/modal.css';

const SignOutModal = () => {
    const [isActive, setIsActive] = useState(false);
    const [ modalAnimation, setModalAnimation ] = useState("slideUp");

    const handleModal = () => {
        setModalAnimation("slideDown");
        setTimeout( () => {
            setIsActive(false);
            setModalAnimation("slideUp");
        }, 200);
    }

    return (
        <>

            <button type="button" className="button" onClick={ () => setIsActive(true) }>
                <SignOut /> 
            </button> 

            {
                isActive && 
                <div className='modalOverlay modalAdd'>
                    <button type='button' className='overlayButton' onClick={ handleModal }></button>
                    <div className={ `modalContent ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>Signing Out</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="modalBody">
                            <p className='modalText'>Are you sure you want to sign out?</p> 
                        </div>
                        <div className="modalFooter">
                            <button type='button' className='button buttonAlert modalFooterButton'>
                                Sign out 
                            </button> 
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SignOutModal;