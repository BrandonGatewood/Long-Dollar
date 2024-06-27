import { useState } from "react";

// icons 
import CloseIcon from "../../assets/icons/closeIcon.svg?react";

// styles
import '../../css/button.css';
import '../../css/components/modal.css';

const RenameColleagueModal = ({ colleague }) => {
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
            <button type="button" className="button buttonRename buttonPrimary" onClick={ () => setIsActive(true) }>
                Rename 
            </button>
            
            {
                isActive &&
                <div className='modalOverlay'>
                    <button type="button" className="overlayButton" onClick={ handleModal }></button>
                    <div className={ `modalContent modalContentInfo ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>Rename Colleague</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                               <CloseIcon />
                            </button>
                        </div>
                        <div className="modalBody">
                            <input type="text" placeholder='Enter new name' />
                        </div>
                        <div className="modalFooter">
                            <button type='button' className='button buttonPrimary modalFooterButton'>
                                Save 
                            </button> 
                        </div>
                    </div>
                </div> 
            }
        </>
    )
}

export default RenameColleagueModal;