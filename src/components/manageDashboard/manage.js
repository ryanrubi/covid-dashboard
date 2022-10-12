import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SettingsActions } from "../../store";
import "./manage.css";

const ManageDashboard = (props) => {

    const dispatch = useDispatch();
    const widgets = useSelector(state => state.settings.widgets);
    let selectedCountry = localStorage.country.toString();
    const [msg, setMsg] = useState(false);
    const objData = [];

    if(props.data.countries !== 0){
        Object.keys(props.data.countries).forEach( i => {
            objData.push(props.data.countries[i]);
        });
    }else {
        objData.push({
            Country: "No Available Country"
        });
    }

    const countries = objData.map(index => {
        return index.Country;
    });

    const save = () => {
        let marquee = document.getElementById("marquee");
        let calendar = document.getElementById("calendar");
        let confirmed = document.getElementById("confirmed");
        let deaths = document.getElementById("deaths");
        let recovered = document.getElementById("recovered");
        let bar_chart = document.getElementById("bar_chart");
        let pie_chart = document.getElementById("pie_chart");
        let countries = document.getElementById("countries");
        let contry = document.getElementById("select").value;
        
        dispatch(SettingsActions.widgetsSettings({
            marquee: marquee.checked === true ? true : false,
            calendar: calendar.checked === true ? true : false,
            confirmed: confirmed.checked === true ? true : false,
            deaths: deaths.checked === true ? true : false,
            recovered: recovered.checked === true ? true : false,
            bar_chart: bar_chart.checked === true ? true : false,
            pie_chart: pie_chart.checked === true ? true : false,
            countries: countries.checked === true ? true : false
        }));

        localStorage.setItem("country", contry);

        setMsg(true);
    };

    const onChangeHandler = () => setMsg(false);

    useEffect(() => {
        let select = document.getElementById("select");
        select.value = selectedCountry;

        for (const [key, value] of Object.entries(widgets)) {
            document.getElementById(key).checked = value;
        }
    });

    return(
        <div className="manage-container">
            {/* TITLE */}
            <div className={props.theme.toString() === "dark" ? "title dm-title-container" : "title lm-title-container"}>
                <h3 className={props.theme.toString() === "dark" ? "dm-title" : "lm-title"}>Manage Dashboard</h3>
            </div>

            {/* TABLE */}
            <div className={props.theme.toString() === "dark" ? "tbl-container dm-table-container" : "tbl-container lm-table-container"}>
                <table className={props.theme.toString() === "dark" ? "dm-table" : "lm-table"}>
                    <thead>
                        <tr>
                            <th className={props.theme.toString() === "dark" ? "dm-th" : "lm-th"}>Widgets</th>
                            <th className={props.theme.toString() === "dark" ? "dm-th" : "lm-th"}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Marquee</td>
                            <td><input type="checkbox" id="marquee" onChange={onChangeHandler}/> Marquee</td>
                        </tr>

                        <tr>
                            <td>Grid</td>
                            <td>
                                <input type="checkbox" id="calendar" onChange={onChangeHandler}/> Calendar &nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="confirmed" onChange={onChangeHandler}/> New Confirmed &nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="deaths" onChange={onChangeHandler}/> New Deaths &nbsp;&nbsp;&nbsp;
                                <input type="checkbox" id="recovered" onChange={onChangeHandler}/> New Recovered &nbsp;&nbsp;&nbsp;
                            </td>
                        </tr>

                        <tr>
                            <td>Bar Chart</td>
                            <td><input type="checkbox" id="bar_chart" onChange={onChangeHandler}/> Bar Chart</td>
                        </tr>

                        <tr>
                            <td>Pie Chart</td>
                            <td>
                                <input type="checkbox" id="pie_chart" onChange={onChangeHandler}/> Pie Chart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <select className={props.theme.toString() === "dark" ? "dm-select" : "lm-select"} onClick={onChangeHandler} id="select">
                                    {countries.map( i => {
                                        if(i === "No Available Country"){
                                            return <option key={i} value="Philippines">{i}</option>;
                                        }else {
                                            return <option key={i} value={i}>{i}</option>;
                                        }
                                    })}
                                </select>
                            </td>
                        </tr>
            
                        <tr>
                            <td>Countries Table</td>
                            <td><input type="checkbox" id="countries" onChange={onChangeHandler}/> Countries Table</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={save}>SAVE</button>
            </div>

            {msg && <div className="mssg-container">
                Save Successfully!
            </div>}
        </div>
    );
};

export default ManageDashboard;