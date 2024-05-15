import { useState } from "react";

// Buttons 
import AddButton from "./buttons/AddColleagueButton";

// Cards
import ColleagueCard from "./cards/ColleagueCard";
import ReportCard from "./cards/ReportCard";

// Styles 
import '../css/toolbar.css'

const Toolbar = ({option}) => {
    // Searching colleagues
    const [query, setQuery] = useState("");

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    return(
        <> 
            <div className="toolbar">
                <input type="text" placeholder='Search colleague' onChange={handleQuery} value={query} />
                {option === true && <AddButton />}
            </div>
            <div>
                {option === true && <ColleagueCard query={query} />}
                {option === false && <ReportCard query={query} /> }
            </div>
        </>
    )
}

export default Toolbar;