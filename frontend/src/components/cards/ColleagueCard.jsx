import { useEffect, useState } from "react";
import { useColleaguesContext } from "../../hooks/useColleaguesContext";

// Buttons
import ClaimModal from "../modals/ClaimModal";
import InfoColleagueModal from "../modals/InfoColleagueModal";

// Styles
import "../../css/components/cards.css";

const ColleagueCard = ({ query }) => {
    const { colleagues, dispatch } = useColleaguesContext();

    useEffect( () => {
        const fetchColleagues = async () => {
            const response = await fetch('/api/colleagues');
            const json = await response.json();

            if(response.ok) {
                dispatch({ type: 'SET_COLLEAGUES', payload: json })
            }
        }

        fetchColleagues();
    }, []);

    
    const handleLongDollar = (longDollar) => {
        if(longDollar) {
            return <p className="cardLongDollar">Long dollar: Them</p> 
        }
        else {
            return <p className="cardLongDollar">Long dollar: You</p>
        }
    }

    return (
        <>
            {
                // filters colleagues when user types in search bar
                colleagues && colleagues.filter(colleague => {
                    if(query === "") {
                        return colleague;
                    }
                    else if(colleague.name.toLowerCase().includes(query.toLowerCase())) {
                        return colleague;
                    }
                    // displays filtered results
                }).map((colleague, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="cardHeader">
                                    <h3 className="cardTitle">{ colleague.name }</h3>
                                    <InfoColleagueModal colleague={ colleague } /> 
                            </div>
                            <div className="cardDescription">
                                {
                                    handleLongDollar(colleague.longDollar)
                                }
                                <ClaimModal colleague={ colleague } /> 
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ColleagueCard;