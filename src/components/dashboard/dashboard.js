import Barchart from "./barChart";
import CountriesDataTable from "./countriesDataTable";
import Piechart from "./pieChart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import "./dashboard.css";

const Dashboard = (props) => {

    const widgets = useSelector(state => state.settings.widgets);

    return(
        <div className="dashboard-container">
            {/* TITLE */}
            <div className={props.theme.toString() === "dark" ? "title dm-title-container" : "title lm-title-container"}>
                <h3 className={props.theme.toString() === "dark" ? "dm-title" : "lm-title"}>Dashboard</h3>
            </div>
        
           {/* MARQUEE WIDGETS */}
            {widgets.marquee && <div className={props.theme.toString() === "dark" ? "marquee dm-marquee-container" : "marquee lm-marquee-container"}>
                <marquee>
                    <span style={{ color: "#FDA42F" }}>New Confirmed:</span><span className={props.theme.toString() === "dark" ? "dm-marquee-data" : "lm-marquee-data"}> {props.data.global.NewConfirmed}, </span>
                    <span style={{ color: "#FDA42F" }}>Total Confirmed:</span><span className={props.theme.toString() === "dark" ? "dm-marquee-data" : "lm-marquee-data"}> {props.data.global.TotalConfirmed}, </span>
                    <span style={{ color: "#EC4362" }}>New Deaths:</span><span className={props.theme.toString() === "dark" ? "dm-marquee-data" : "lm-marquee-data"}> {props.data.global.NewDeaths}, </span>
                    <span style={{ color: "#EC4362" }}>Total Deaths:</span><span className={props.theme.toString() === "dark" ? "dm-marquee-data" : "lm-marquee-data"}> {props.data.global.TotalDeaths}, </span>
                    <span style={{ color: "#4DE1CD" }}>New Recovered:</span><span className={props.theme.toString() === "dark" ? "dm-marquee-data" : "lm-marquee-data"}> {props.data.global.NewRecovered}, </span>
                    <span style={{ color: "#4DE1CD" }}>Total Recovered:</span><span className={props.theme.toString() === "dark" ? "dm-marquee-data" : "lm-marquee-data"}> {props.data.global.TotalRecovered} </span>
                </marquee>
            </div>}

            {/* GRID WIDGETS */}
            <div className="grid-container">
                {widgets.calendar && <div className={props.theme.toString() === "dark" ? "grid dm-grid-box" : "grid lm-grid-box"}>
                    <img src={require("../../assets/calendar.png")} alt="sample"/>
                    <div>
                        <p>Global New Case</p>
                        <h3 className={props.theme.toString() === "dark" ? "dm-grid-data" : "lm-grid-data"}>{props.data.date}</h3>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} id="chevron-right"/>
                </div>}

                {widgets.confirmed && <div className={props.theme.toString() === "dark" ? "grid dm-grid-box" : "grid lm-grid-box"}>
                    <img src={require("../../assets/confirmed.png")} alt="sample"/>
                    <div>
                        <p>New Confirmed</p>
                        <h3 className={props.theme.toString() === "dark" ? "dm-grid-data" : "lm-grid-data"}>{props.data.global.NewConfirmed}</h3>
                    </div>
                </div>}

                {widgets.deaths && <div className={props.theme.toString() === "dark" ? "grid dm-grid-box" : "grid lm-grid-box"}>
                    <img src={require("../../assets/deaths.png")} alt="sample"/>
                    <div>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Deaths</p>
                        <h3 className={props.theme.toString() === "dark" ? "dm-grid-data" : "lm-grid-data"}>{props.data.global.NewDeaths}</h3>
                    </div>
                </div>}

                {widgets.recovered && <div className={props.theme.toString() === "dark" ? "grid dm-grid-box" : "grid lm-grid-box"}>
                    <img src={require("../../assets/recovered.png")} alt="sample"/>
                    <div>
                        <p>New Recovered</p>
                        <h3 className={props.theme.toString() === "dark" ? "dm-grid-data" : "lm-grid-data"}>{props.data.global.NewRecovered}</h3>
                    </div>
                </div>}
            </div>
            
            {/* CHART WIDGETS */}
            <div className="chart-container">
                {widgets.bar_chart && <div className={props.theme.toString() === "dark" ? "barchart dm-barchart-box" : "barchart lm-barchart-box"}>
                    <Barchart data={props.data} theme={props.theme}/>
                </div>}

                {widgets.pie_chart && <div className={props.theme.toString() === "dark" ? "piechart dm-piechart-box" : "piechart lm-piechart-box"}>
                    <Piechart data={props.data} theme={props.theme}/>
                </div>}

                {widgets.countries && <div className={props.theme.toString() === "dark" ? "datatable dm-datatable-box" : "datatable lm-datatable-box"}>
                    <h3 style={{ marginTop: "0"}}>Countries</h3>
                    {!props.data.apiStatus && <p style={{ textAlign: "center", paddingTop: "14rem" }}>No available Data on API</p>}
                    {props.data.apiStatus && <CountriesDataTable data={props.data} theme={props.theme}/>}
                </div>}
            </div>
        </div>
    );
};

export default Dashboard;