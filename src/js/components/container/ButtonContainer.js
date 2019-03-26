import React, { Component } from "react";
import ButtonInput from "../presentational/ButtonInput";
import ButtonStyle from "../presentational/ButtonStyle";


class ButtonContainer extends Component {
  constructor() {
    super();
    this.state = {
      buttonPressed: 0
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event){
      this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { buttonPressed } = this.state;
    return ( 
        <div class = "btn-group">
              <ButtonInput
                label="buttonPressedClear"
                text="Clear"
                type= {ButtonStyle}
                id="ClearButton"
                value="Clear"
                onClickHandler={this.onClickHandler}
            />
              <ButtonInput
                label="buttonPressedColor"
                text="Color"
                type={ButtonStyle}
                id="ColorButton"
                value="Color"
                onClickHandler={this.onClickHandler}
            />
              <ButtonInput
                label="buttonPressedSize"
                text="Size"
                type={ButtonStyle}
                id="SizeButton"
                value="Size"
                onClickHandler={this.onClickHandler}
            />
        </div> 
    );
  }
}
export default ButtonContainer;