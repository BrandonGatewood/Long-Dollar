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

     const handleLongDollar = (dollar) => {
        if(dollar) {
            return <p className="text">Long dollar: Them</p>
        }
        else {
            return <p className="text">Long dollar: You</p>
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
                            <div className="cardBody">
                                <div className="cardBodyDescription">
                                    {
                                        handleLongDollar(colleague)
                                    }
                                </div>
                                <div className="cardBodyButton">
                                    <ClaimModal colleague={ colleague } /> 
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ColleagueCard;