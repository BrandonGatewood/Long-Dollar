// Mock Data
import ColleagueData from "../../data/mockDataColleagues.json";

// Buttons
import CashOutButton from "../buttons/CashOutButton";
import InfoColleagueButton from "../buttons/InfoColleagueButton";

// Styles
import "../../css/cards.css";

const ColleagueCard = ({query}) => {
    const handleWhoCashesOutNext = (longDollar) => {
        if(longDollar) {
            return(<p>They get the long dollar</p>)
        }
        else {
            return(<p>You get the long dollar</p>)
        }
    }
    return (
        <>
            {
                // filters colleagues when user types in search bar
                ColleagueData.Colleagues.filter(colleague => {
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
                            <div className="header">
                                    <h3>{colleague.name}</h3>
                                    <InfoColleagueButton colleague={colleague} /> 
                            </div>
                            <div className="description">
                                {handleWhoCashesOutNext(colleague.longDollar)}
                            </div>
                            <div className="cashOut">
                                <CashOutButton colleague={colleague} /> 
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default ColleagueCard;