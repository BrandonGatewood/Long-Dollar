// Mock data
import ReportData from "../../data/mockDataHistory.json";

// Styles 
import "../../css/cards.css";

const ReportCard = ({query}) => {

    const findWhoCashedOut = (dollar, date, name) => {
        if(dollar) {
            return(<p>{name} got the long dollar</p>)
        }
        else {
            return(<p>You got the long dollar</p>)
        }
    }

    return(
        <>
            {
                // filters colleagues when user types in search bar
                ReportData.Reports.filter(report => {
                    if(query === "") {
                        return report;
                    }
                    else if(report.name.toLowerCase().includes(query.toLowerCase())) {
                        return report;
                    }
                    // displays filtered results
                }).map((report, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="reportHeader">
                                <div className="title">
                                    <h3>{report.name}</h3>
                                </div>
                                <p>{report.date}</p>
                            </div>
                            <div className="description">
                                {findWhoCashedOut(report.dollar, report.date, report.name)}
                            </div>
                            <div className="emptySpace"></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ReportCard;