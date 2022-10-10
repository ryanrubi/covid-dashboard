import { Fragment, useEffect } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./modeButton.css";

const ModeButton = (props) => {

    useEffect(() => {
        if (props.theme.toString() === "dark") {
            document.getElementById("light-mode").style.display = "block";
            document.getElementById("dark-mode").style.display = "none";
        }else {
            document.getElementById("light-mode").style.display = "none";
            document.getElementById("dark-mode").style.display = "block";
        }
    }, [props.theme]);

    return (
        <Fragment>
            <FontAwesomeIcon icon={faMoon} id="dark-mode" onClick={props.darkmode}/>
            <FontAwesomeIcon icon={faSun} id="light-mode" onClick={props.lightmode}/>
        </Fragment>
    );
};

export default ModeButton;