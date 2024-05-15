import { useState } from 'react';

// styles
import '../../css/button.css'
import '../../css/modal.css';

const InfoColleagueButton = ({colleague}) => {
    const [isActive, setIsActive] = useState(false);
    const handleIsActive = () => {
        setIsActive(!isActive);
        if(!edit) {
            handleEdit();
        }
    }

    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        setEdit(!edit);
    }

    return(
        <>
            <button type="button" className="button colleagueCardButton" onClick={handleIsActive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="iconSecondary" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </button>

            {/* Show modal */}
            {
                isActive &&
                <div className='modalOverlay'>
                    <button type="button" className="overlayButton" onClick={handleIsActive}></button>
                    <div className='modalContent'>
                        <div className='modalHeader'>
                            <h2>{colleague.name}</h2>
                            <button type='button' className='closeButton' onClick={handleIsActive} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="closeButton" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                                </svg>
                            </button>
                        </div>
                        {
                            edit && 
                            <div class="modalBody infoModalBody">
                                <button type='button' className='editButton' onClick={handleEdit}>Rename colleague</button>
                                <button type='button' className='deleteButton'>Delete colleague</button>
                            </div>
                        }
                        {
                            !edit &&
                            <div>
                                <div class="modalBody ">
                                    <div className="back">
                                        <button type='button' className='button backButton' onClick={handleEdit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='rename'>
                                        <div className="renameTitle">
                                            <p>Enter new name: </p>
                                        </div>
                                        <div className="renameInput">
                                            <input type="text" placeholder='New name' value={colleague.name}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="modalFooter">
                                    <button type='button' className='saveButton'>
                                        Confirm 
                                    </button> 
                                </div>
                            </div>


                        }
                    </div>
                </div>
            }
            {
            }
        </>
    )
}

export default InfoColleagueButton;