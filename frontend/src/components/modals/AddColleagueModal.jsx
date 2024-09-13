import { useState } from 'react';
import { useColleaguesContext } from '../../hooks/useColleaguesContext';

// icons 
import CloseIcon from "../../assets/icons/closeIcon.svg?react";
import AddColleagueIcon from "../../assets/icons/plus.svg?react";

// styles
import '../../css/button.css';
import '../../css/components/modal.css';

const AddColleagueModal = () => {
    const { colleagues, dispatch } = useColleaguesContext();

    const [ isActive, setIsActive ] = useState(false);
    const [ modalAnimation, setModalAnimation ] = useState("slideUp");

    const [ name, setName ] = useState("");
    const [ longDollar, setLongDollar ] = useState(null);
    const [ error, setError ] = useState(null);

    const handleModal = () => {
        setModalAnimation("slideDown");
        setTimeout( () => {
            setIsActive(false);
            setName("");
            setLongDollar(null);
            setModalAnimation("slideUp");
        }, 200);
    }

    // backend 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const colleague = { name, longDollar }

        const response = await fetch('/api/colleagues', {
            method: 'POST' ,
            body: JSON.stringify(colleague),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }

        if(response.ok) {
            setName("");
            setLongDollar(null);
            setError(null);
            handleModal();
            dispatch({ type: 'CREATE_COLLEAGUE', payload: json })
        }
    }

    return (
        <>

            <button type="button" className="button" onClick={ () => setIsActive(true) }>
                <AddColleagueIcon className='iconWhite'/>
            </button> 

            {
                isActive && 
                <div className='modalOverlay modalAdd'>
                    <button type='button' className='overlayButton' onClick={ handleModal }></button>
                    <div className={ `modalContent ${ modalAnimation }` }>
                        <div className='modalHeader'>
                            <h2>Add New Colleague</h2>
                            <button type='button' className='button' onClick={ handleModal } >
                                <CloseIcon className='iconPrimary' />
                            </button>
                        </div>
                        <div className="modalBody">
                            <div className="modalInput">
                                <input type="text" placeholder='Enter name' onChange={ (e) => setName(e.target.value) } value={ name }/>
                            </div>
                            <p className='modalText'>Who gets the next long dollar?</p>
                            <div className="row">
                                <div className="col">
                                    <input type="radio" name="longDollar" id="You" value="You" onChange={ (e) => setLongDollar(false) } />
                                    <label htmlFor="You">You</label>
                                </div>
                                <div className="col">
                                    <input type="radio" name="longDollar" id="Them" value="Them" onChange={ (e) => setLongDollar(true) } />
                                    <label htmlFor="Them">Them</label>
                                </div>
                                <div className="col">
                                    <input type="radio" name="longDollar" id="Randomize" value="Randomize" onChange={ (e) => setLongDollar(Math.random() < 0.5) } />
                                    <label htmlFor="Randomize">Random</label>
                                </div>
                            </div>
                        </div>
                        <div className="modalFooter">
                            <button type='button' className='button buttonPrimary modalFooterButton' onClick={ handleSubmit }>
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