import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import "./notification.css";

const Notification = (props) => {   
    const closeNotif = () => {
        document.getElementById('notif').style.display='none';
    };

    return (   
        <div className="notif-container" id="notif"><FontAwesomeIcon icon={faClose} className="notif-icon" onClick={closeNotif}/> No available Data on API</div>
    );
};

export default Notification;