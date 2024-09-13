import { useState } from "react";

// modals 
import AddColleagueModal from "../modals/AddColleagueModal";

// Cards
import ColleagueCard from "../cards/ColleagueCard";
import ReportCard from "../cards/ReportCard";

// Styles 
import '../../css/components/toolbar.css'

const Toolbar = ({ option }) => {
    // Searching colleagues
    const [query, setQuery] = useState("");

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    return(
        <> 
        <div className="toolbar">

            <div className="toolbarContent">
                <input type="text" placeholder='Search Colleague' onChange={handleQuery} value={query} />
                { option === true && <AddColleagueModal /> }
            </div>
            <div className="toolbarResults">
                { option === true && <ColleagueCard query={query} /> }
                { option === false && <ReportCard query={query} /> }
            </div>
        </div>
        </>
    )
}

export default Toolbar;