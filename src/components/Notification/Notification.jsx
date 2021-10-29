import PropTypes from 'prop-types';
import './Notification.scss'

function Notification({ message }) {
    return (
        <p className ="text">
            {message}
       </p>
   )  
 } 

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Notification;