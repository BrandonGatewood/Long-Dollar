import { useState } from "react";

// icons 
import CloseIcon from "../../assets/icons/closeIcon.svg?react";

// styles
import '../../css/button.css';
import '../../css/components/modal.css';

const ClaimModal = ({colleague}) => {
    const [ isActive, setIsActive ] = useState(false);
    const [ modalAnimation, setModalAnimation ] = useState("slideUp");

    const handleModal = () => {
        setModalAnimation("slideDown");
        setTimeout( () => {
            setIsActive(false);
            setModalAnimation("slideUp");
        }, 200);
    }

    const handleDescription = () => {
        if(colleague.longDollar) {
            return <p className="modalText">{colleague.name} is claiming the long dollar today.</p>
        }
        else {
            return <p className="modalText">You are claiming the long dollar today</p>
        }
    }


    
    return(
        <>
            <button type="button" className="button buttonClaim buttonPrimary" onClick={ () => setIsActive(true) }>
                Claim 
            </button>
            {
                isActive && 
                <div className='modalOverlay'>
                    <button type="button" className="overlayButton" onClick={ handleModal }></button>
                    <div className={ `modalContent ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>Claim Long Dollar</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                               <CloseIcon />
                            </button>
                        </div>
                        <div className="modalBody">
                            <p className='modalDate'>
                                <strong>Date:</strong> <em>11/12/23</em>
                            </p>
                            { handleDescription() } 
                        </div>
                        <div className="modalFooter">
                            <button type='button' className='button buttonPrimary modalFooterButton'>
                                Confirm 
                            </button> 
                        </div>
                    </div>
                </div>  
            }
        </>
    )
}

export default ClaimModal;