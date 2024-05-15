import { useState } from 'react';

// styles
import '../../css/button.css';
import '../../css/modal.css';

const AddColleagueButton = () => {
    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        setIsActive(!isActive);

    }

    return (
        <>

            <button type="button" className="button addButton" onClick={handleIsActive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="iconPrimary" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                </svg>
            </button> 

            {/* Show modal */}
            {
                isActive && 
                <div className='modalOverlay'>
                    <button type='button' className='overlayButton' onClick={handleIsActive}></button>
                    <div className='modalContent'>
                        <div className='modalHeader'>
                            <h2>Add New Colleague</h2>
                            <button type='button' className='closeButton' onClick={handleIsActive} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="closeButton" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                                </svg>
                            </button>
                        </div>
                        <div class="modalBody addModalBody">
                            <p>Enter colleague name:</p>
                            <div className="name">
                                <input type="text" placeholder='Name' />
                            </div>
                            <p>Who gets the next long dollar?</p>
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
                            <button type='button' className='saveButton'>
                                Save 
                            </button> 
                        </div>
                    </div>
                </div>
            }
            {
            }
        </>
    )
}

export default AddColleagueButton;