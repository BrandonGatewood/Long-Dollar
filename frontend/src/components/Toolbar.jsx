import { useState } from "react";

// Mock Data
import Data from "../data/mockData.json";

// Styles 
import '../css/toolbar.css'

const Toolbar = () => {
    // Searching colleagues
    const [query, setQuery] = useState("");

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    // Adding new colleague
    const handleAddNewColleague = () => {
        alert("add button clicked");
    }

    // update info of selected colleague
    const handleColleagueInfo = () => {
        alert("info button clicked");
    }

    // change who gets the long dollar
    const handleLongDollar = () => {
        alert("long dollar button clicked");
    }


    return(
        <>
            <div className="toolbar">
                <input type="text" placeholder='Search colleague' onChange={handleQuery} value={query} />
                <button type="button" className="addButton" onClick={handleAddNewColleague}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="icon" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                    </svg>
                </button> 
            </div>
            <div>
                {
                    // filters colleagues when user types in search bar
                    Data.Colleagues.filter(colleague => {
                        if(query === "") {
                            return colleague;
                        }
                        else if(colleague.name.toLowerCase().includes(query.toLowerCase())) {
                            return colleague;
                        }
                        // displays filtered results
                    }).map((colleague, index) => {
                        // determine who gets the long dollar
                        var longDollarString = "";
                        if(colleague.longDollar) {
                            longDollarString = "They get the long dollar.";
                        }
                        else {
                            longDollarString = "You get the long dollar.";
                        }

                        return (
                            <div key={index} className="colleagueCard">
                                <div className="row">
                                    <div className="column">
                                        <h3>{colleague.name}</h3>
                                    </div>
                                    <div className="colleagueMenu">
                                        <button type="button" className="colleagueCardButton" onClick={handleColleagueInfo}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="description">
                                    <p>{longDollarString}</p>
                                </div>
                                <div className="longDollar">
                                    <button type="button" className="colleagueCardButton" onClick={handleColleagueInfo}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="icon" viewBox="0 0 16 16">
                                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Toolbar;