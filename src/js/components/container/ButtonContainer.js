import React, { Component } from "react";
import ButtonInput from "../presentational/ButtonInput";
import ButtonStyle from "../presentational/ButtonStyle";


class ButtonContainer extends Component {
  constructor() {
    super();
    this.state = {
      buttonPressed: 0
    };
    this.click = this.click.bind(this);
  }
  click(event){
      this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { buttonPressed } = this.state;
    return ( 
        <div class = "btn-group">
            <ButtonInput
            label="buttonPressed"
            text="Clear"
            type= {ButtonStyle}
            id="buttonPressed"
            value="Clear"
            click={this.click}
            />
            <ButtonInput
            label="buttonPressed"
            text="Color"
            type={ButtonStyle}
            id="buttonPressed"
            value="Color"
            click={this.click}
            />
            <ButtonInput
            label="buttonPressed"
            text="Size"
            type={ButtonStyle}
            id="buttonPressed"
            value="Size"
            click={this.click}
            />
        </div> 
    );
  }
}
export default ButtonContainer;