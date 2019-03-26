import React from "react";
import PropTypes from "prop-types";
import BaseButton from './styled/BaseButton';

const Button = ({ classes, text, id, onClickHandler }) => (
  <BaseButton
    className={classes}
    id={id}
    onClick={onClickHandler}
  >
    {text}
  </BaseButton>
);

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
