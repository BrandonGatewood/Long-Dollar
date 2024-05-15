import { useState } from "react";

// styles
import '../../css/button.css';
import '../../css/modal.css';

const CashOutButton = ({colleague}) => {
    const [isActive, setIsActive] = useState(false);

    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    const[isRendered, setIsRendered] = useState(false);
    const handleRenderAnimation = () => {
    }

    const handleDescription = () => {
        if(colleague.longDollar) {
            return <p>Confirm {colleague.name} is cashing out the long dollar today.</p>
        }
        else {
            return <p>Confirm you are cashing out the long dollar today</p>
        }
    }


    
    return(
        <>
            <button type="button" className="cashOutButton" onClick={handleIsActive}>
                Cash Out 
            </button>

            {/* Show modal */}
            {
                isActive && 
                <div className='modalOverlay'>
                    <button type="button" className="overlayButton" onClick={handleIsActive}></button>
                    <div className="modalContent">
                        <div className='modalHeader'>
                            <h2>Cash Out</h2>
                            <button type='button' className='closeButton' onClick={handleIsActive} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="closeButton" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                                </svg>
                            </button>
                        </div>
                        <div className="modalBody cashOutBody">
                            <div className="cashOutDate">
                                <p><strong>Date:</strong> 11/12/23</p>
                            </div>
                            <div className="cashOutDescription">
                                {handleDescription()} 
                            </div>
                        </div>
                        <div className="modalFooter">
                            <button type='button' className='saveButton'>
                                Confirm 
                            </button> 
                        </div>
                    </div>
                </div>  
            }
        </>
    )
}

export default CashOutButton;