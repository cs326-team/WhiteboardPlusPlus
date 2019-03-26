import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const InputSubmit = ({ label, text, id, onClick, type, value }) => (
  <Input
    type={type}
    text={text}
    id={id}
    onClick={onClick}
    onSubmit={onClick}
    value={value}
  >
    <label htmlFor={label}>{text}</label>
  </Input>
);

InputSubmit.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};
export default InputSubmit;
