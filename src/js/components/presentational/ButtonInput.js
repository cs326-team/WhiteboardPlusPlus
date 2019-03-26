import React from "react";
import PropTypes from "prop-types";
import ButtonStyle from "./ButtonStyle";
const ButtonInput = ({ label, text, type, id, value, click }) => (
  <div className="button">
    <ButtonStyle
      type={type}
      className="button control"
      id={id}
      value={value}
      onClick={click}
      required
    >
    {text}
    </ButtonStyle>
    {//<label htmlFor={label}>{text}</label>
    }
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
