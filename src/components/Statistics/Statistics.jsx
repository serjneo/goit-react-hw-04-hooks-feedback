import PropTypes from 'prop-types';
import './Statistics.scss'


function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
            <ul className ="list">
                <li className= "item">
                    <span>Good: {good} </span>
                </li>
                <li className= "item">
                    <span>Neutral: {neutral}</span>
                </li>
                <li className= "item">
                    <span>Bad: {bad} </span>
                </li>
                 <li className= "item">
                    <span>Total: {total}</span>
                </li>
                 <li className= "item">
                    <span>Positive feedback: {positivePercentage} %</span> 
                </li>
            </ul>
            </div>
    )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;