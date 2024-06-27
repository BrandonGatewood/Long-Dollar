// Mock Data
import ColleagueData from "../../data/mockDataColleagues.json";

// Buttons
import ClaimModal from "../modals/ClaimModal";
import InfoColleagueModal from "../modals/InfoColleagueModal";

// Styles
import "../../css/components/cards.css";

const ColleagueCard = ({ query }) => {
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