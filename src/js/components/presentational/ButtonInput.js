import React from "react";
import PropTypes from "prop-types";
const ButtonInput = ({ label, text, type, id, value, click }) => (
  <div className="button-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="button-control"
      id={id}
      value={value}
      onClick={click}
      required
    />
  </div>
);
ButtonInput.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default ButtonInput;
