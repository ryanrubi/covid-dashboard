import { Fragment } from "react";
import { BarChart, Bar, XAxis, Cell, CartesianGrid, Tooltip } from "recharts";

const Barchart = (props) => {

  const data = [
    { id: 1, name: "Confirmed", count: props.data.global.TotalConfirmed, color: "#FDA42F" },
    { id: 2, name: "Deaths", count: props.data.global.TotalDeaths, color: "#EC4362" },
    { id: 3, name: "Recovered", count: props.data.global.TotalRecovered, color: "#4DE1CD" }
  ];

  return (
    <Fragment>
      <h3 style={{ marginTop: "0", fontSize: "16px"}}>Global Total Case</h3>

      {!props.data.apiStatus && <p style={{ textAlign: "center", padding: "14rem 0 14rem 0" }}>No available Data on API</p>}

      {props.data.apiStatus && 
        <BarChart width={280} height={420} data={data} margin={{ top: 25, right: 10, left: 0, bottom: 25 }}>
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: props.theme === "dark" ? "rgba(172,172,172)" : "rgba(72,72,72)" }}/>
          <Tooltip cursor={{ fill: props.theme === "dark" ? "rgba(22,31,39)" : "rgba(220,220,220)" }}/>
          <Bar dataKey="count" barSize={40}>
            {data.map((entry, index) => (
                <Cell key={data[index].id} fill={data[index].color}/>
            ))}
          </Bar>
        </BarChart>
      }
    </Fragment>
  );
};

export default Barchart;