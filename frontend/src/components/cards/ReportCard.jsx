// Mock data
import ReportData from "../../data/mockDataHistory.json";

// Styles 
import "../../css/components/cards.css";

const ReportCard = ({query}) => {

    const handleLongDollar = (dollar) => {
        if(dollar) {
            return <p>Long dollar: Them</p>
        }
        else {
            return <p>Long dollar: You</p>
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
                            <div className="cardHeader">
                                <h3 className="cardTitle">{report.name}</h3>
                                <p>{report.date}</p>
                            </div>
                            <div className="cardDescription report">
                                {
                                    handleLongDollar(report.dollar)
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ReportCard;