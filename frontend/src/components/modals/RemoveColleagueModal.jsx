import { useState } from "react";

// icons 
import CloseIcon from "../../assets/icons/closeIcon.svg?react";

// styles
import '../../css/button.css';
import '../../css/components/modal.css';

const RemoveColleagueModal = ({colleague}) => {
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
            <button type="button" className="button buttonRemove buttonAlert" onClick={ () => setIsActive(true) }>
                Remove 
            </button>
            {
                isActive && 
                <div className='modalOverlay'>
                    <button type="button" className="overlayButton" onClick={ handleModal }></button>
                    <div className={ `modalContent modalContentInfo ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>Remove Colleague</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                               <CloseIcon />
                            </button>
                        </div>
                        <div className="modalBody">
                            <p className="modalText">Are you sure you want to delete { colleague.name }</p>
                        </div>
                        <div className="modalFooter">
                            <button type='button' className='button buttonAlert modalFooterButton'>
                                Remove 
                            </button> 
                        </div>
                    </div>
                </div>  
            }
        </>
    )
}

export default RemoveColleagueModal;