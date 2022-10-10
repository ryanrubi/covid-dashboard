import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import NavBar from "./components/navBar/navBar";
import ModeButton from "./components/button/modeButton";
import "./App.css";

// const ManageDashboard = React.lazy(() => import("./components/manageDashboard/manage"));
// const Dashboard = React.lazy(() => import("./components/dashboard/dashboard"));
const ManageDashboard = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/manageDashboard/manage")), 400);
  });
});

const Dashboard = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/dashboard/dashboard")), 400);
  });
});

function App() {

  const [data, setData] = useState({
    global: "",
    countries: "",
    date: ""
  });

  //SET DEFAULT LOCAL STORAGE ITEM
  if(!localStorage.theme){
    localStorage.setItem("theme", "light");
  }

  if(!localStorage.country){
    localStorage.setItem("country", "Philippines");
  }

  const [theme, setTheme] = useState(localStorage.theme.toString());

  //GET API DATA
  const fetchData = useCallback( async () => {
    const response = await fetch("https://api.covid19api.com/summary");
    const jsonData = await response.json();

    if(jsonData.Message !== "Caching in progress"){

      let date = new Date(jsonData.Global.Date);
      let month = date.getUTCMonth() + 1;
      let day = date.getUTCDate();
      let year = date.getUTCFullYear();
      let newdate = month + "/" + day + "/" + year;

      setData({
        global: jsonData.Global,
        countries: jsonData.Countries,
        date: newdate,
        apiStatus: true
      }); 
    }else {
      setData({
        global: {
            NewConfirmed: "N/A",
            NewDeaths: "N/A",
            NewRecovered: "N/A",
            TotalConfirmed: "N/A",
            TotalDeaths: "N/A",
            TotalRecovered: "N/A"
        },
        countries: 0,
        date: "N/A",
        apiStatus: false
      });
    }
  }, []);

  const darkModeHandler = () => {
    localStorage.setItem("theme", "dark");
    setTheme(localStorage.theme.toString());
  };

  const lightModeHandler = () => {
    localStorage.setItem("theme", "light");
    setTheme(localStorage.theme.toString());
  };

  useEffect(() => {
    const interval = setInterval(() => {
        fetchData();
    }, 300000);

    return () => clearInterval(interval); 
  });

  useEffect(() => {
    fetchData();
  });

  useEffect(() => {
    if(theme === "dark"){
      document.getElementById("light-mode").style.display = "block";
      document.getElementById("dark-mode").style.display = "none";
      document.body.style.backgroundColor = "rgb(15, 18, 25)";
    }else {
      document.getElementById("light-mode").style.display = "none";
      document.getElementById("dark-mode").style.display = "block";
      document.body.style.backgroundColor = "rgb(245, 245, 245)";
    }
  }, [theme]);

  return (
    <div className="App">
      <ModeButton darkmode={darkModeHandler} lightmode={lightModeHandler} theme={theme}/>

      <NavBar theme={theme}/>
      <Suspense fallback={<div className={theme.toString() === "dark" ? "lds-ring dm-lds-ring" : "lds-ring lm-lds-ring"}><div></div><div></div><div></div><div></div></div>}>
        <Switch>
          <Route path="/" exact>
            <Dashboard theme={theme} data={data}/>
          </Route>
          
          <Route path="/manage-dashboard">
            <ManageDashboard theme={theme} data={data}/>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
