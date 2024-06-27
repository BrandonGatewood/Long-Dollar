import { useState } from "react";

// modals 
import AddColleagueModal from "../modals/AddColleagueModal";

// Cards
import ColleagueCard from "../cards/ColleagueCard";
import ReportCard from "../cards/ReportCard";

// Styles 
import '../../css/components/toolbar.css'

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
                { option === true && <AddColleagueModal /> }
            </div>
            <div className="toolbarResults">
                { option === true && <ColleagueCard query={query} /> }
                { option === false && <ReportCard query={query} /> }
            </div>
        </>
    )
}

export default Toolbar;