import React from "react";
import PropTypes from "prop-types";
import BaseButton from './styled/BaseButton';

const Button = ({ classes, text, id, onClickHandler, marginBottom, paddingTop }) => (
  <BaseButton
    className={classes}
    id={id}
    onClick={onClickHandler}
    marginBottom={marginBottom}
    paddingTop={paddingTop}
  >
    {text}
  </BaseButton>
);

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Button;
