import { Fragment } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Piechart = (props) => {
    
    const objData = [];
    let confirmed, deaths, recovered;
    let selectedCountry = localStorage.country.toString();

    if(props.data.countries !== 0) {
        Object.keys(props.data.countries).forEach( i => {
            objData.push(props.data.countries[i]);
        });
    
        const country = objData.filter(index => {
            return index.Country === selectedCountry
        });
    
        country.forEach(index => {
            confirmed = index.NewConfirmed;
            deaths = index.NewDeaths;
            recovered = index.NewRecovered;
        });
    }else {
        confirmed = "N/A";
        deaths = "N/A";
        recovered = "N/A";
    }

    const data = [
        { name: "New Cofirmed", value: confirmed },
        { name: "New Deaths", value: deaths },
        { name: "New Recovered", value: recovered },
    ];

    const COLORS = ["#FDA42F", "#EC4362", "#4DE1CD"];

    return (
        <Fragment>
            <h3 style={{ marginTop: "0", fontSize: "16px"}}>{selectedCountry} New Case</h3><br/><br/><br/>
            {!props.data.apiStatus && <p style={{ textAlign: "center", paddingTop: "9rem" }}>No available Data on API</p>}
            
            {props.data.apiStatus && <PieChart width={280} height={210}>
                <Pie
                    data={data}
                    innerRadius={65}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={4}
                    dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                </Pie>
                <Tooltip/>
            </PieChart>}
            <br/><br/>
            {props.data.apiStatus &&              
            <ul>
                <li style={{ color: "#FDA42F"}}>New Confirmed: <span className={props.theme.toString() === "dark" ? "dm-piechart-data" : "lm-piechart-data"}>{confirmed}</span></li>
                <li style={{ color: "#EC4362"}}>New Deaths: <span className={props.theme.toString() === "dark" ? "dm-piechart-data" : "lm-piechart-data"}>{deaths}</span></li>
                <li style={{ color: "#4DE1CD"}}>New Recovered: <span className={props.theme.toString() === "dark" ? "dm-piechart-data" : "lm-piechart-data"}>{recovered}</span></li>
            </ul>}
        </Fragment>
    );
};

export default Piechart;