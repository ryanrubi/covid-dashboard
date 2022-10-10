import { NavLink } from "react-router-dom";
import "./navBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    return(
        <div className="navbar-container">
            <div className={props.theme.toString() === "dark" ? "brand dm-brand" : "brand lm-brand"}><NavLink className="navlink" to="/">COVID Dashboard</NavLink></div>
            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faChartLine} className={props.theme.toString() === "dark" ? "icon dm-icon" : "icon lm-icon"}/><NavLink className="navlink" to="/covid-dashboard"> Dashboard</NavLink></li>
                    <li><FontAwesomeIcon icon={faGripHorizontal} className={props.theme.toString() === "dark" ? "icon dm-icon" : "icon lm-icon"}/><NavLink className="navlink" to="/manage-dashboard"> Manage Dashboard</NavLink></li>
                </ul>
            </nav>

            {/* <span>Created By </span><span className={props.theme.toString() === "dark" ? "dm-span" : "lm-span"}>Ryan Rubi</span> */}
        </div>
    );
};

export default NavBar;