import PropTypes from 'prop-types';
 import './Section.scss'

 function Section({ title, children }) {
  return (
    <div className= "container">
      <h2 className = "title">{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;