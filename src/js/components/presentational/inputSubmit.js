import React from "react";
import PropTypes from "prop-types";
import Buttonify from "./styled/Buttonify";
const InputSubmit = ({ label, text, type, id, value, onClick,title }) => (
  <div className="button">
    <Buttonify
      width={"2rem"}
      height={"2rem"}
      type={type}
      className="button-control"
      text = {text}
      id={id}
      value={value}
      onClick={onClick}
      onSubmit={onClick}
      title={title}
      required
      >
    <label htmlFor={label}>{text}</label>
    </Buttonify>
    
  </div>
);
InputSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
export default InputSubmit;
