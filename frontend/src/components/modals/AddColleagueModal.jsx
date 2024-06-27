import { useState } from 'react';

// icons 
import CloseIcon from "../../assets/icons/closeIcon.svg?react";
import AddColleagueIcon from "../../assets/icons/addColleagueIcon.svg?react";

// styles
import '../../css/button.css';
import '../../css/components/modal.css';

const AddColleagueModal = () => {
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

            <button type="button" className="button buttonAddColleague" onClick={ () => setIsActive(true) }>
                <AddColleagueIcon className='iconPrimary'/>
            </button> 

            {
                isActive && 
                <div className='modalOverlay modalAdd'>
                    <button type='button' className='overlayButton' onClick={ handleModal }></button>
                    <div className={ `modalContent ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>Add New Colleague</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                                <CloseIcon />
                            </button>
                        </div>
                        <div class="modalBody">
                            <div className="modalInput">
                                <input type="text" placeholder='Enter name' />
                            </div>
                            <p className='modalText'>Who gets the next long dollar?</p>
                            <div className="row">
                                <div className="col">
                                    <input type="radio" name="longDollar" id="You" value="You" />
                                    <label htmlFor="You">You</label>
                                </div>
                                <div className="col">
                                    <input type="radio" name="longDollar" id="Them" value="Them" />
                                    <label htmlFor="Them">Them</label>
                                </div>
                                <div className="col">
                                    <input type="radio" name="longDollar" id="Randomize" value="Randomize" />
                                    <label htmlFor="Randomize">Random</label>
                                </div>
                            </div>
                        </div>
                        <div class="modalFooter">
                            <button type='button' className='button buttonPrimary modalFooterButton'>
                                Add 
                            </button> 
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AddColleagueModal;