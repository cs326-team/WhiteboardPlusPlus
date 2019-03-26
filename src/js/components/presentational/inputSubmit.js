import React from "react";
import PropTypes from "prop-types";
const InputSubmit = ({ label, text, type, id, value, onClick }) => (
  <div className="button">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="btn btn-primary"
      text = {text}
      id={id}
      value={value}
      onClick={onClick}
      required
    />
  </div>
);
InputSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};
export default InputSubmit;
