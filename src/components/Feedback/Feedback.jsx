import PropTypes from 'prop-types'
import './Feedback.scss'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <div className="container">
      {options.map(option => (
          <button key={option} name={option} type="button" onClick={onLeaveFeedback}
            className="button">
            {option}
          </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;