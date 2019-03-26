import React, { Component } from "react";
import ButtonInput from "../presentational/ButtonInput";

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
        //<div>
        <button id = "ClearButton">
            <ButtonInput
            text="Clear"
            label="buttonPressed"
            type="button"
            id="buttonPressed"
            value={buttonPressed}
            click={this.click}
            />
        </button>   
       /* <button id = "ColorsButton">
            <ButtonInput
            text="Colors"
            label="buttonPressed"
            type="button"
            id="buttonPressed"
            value={buttonPressed}
            click={this.click}
            />
        </button>
        <button id = "SizeButton">
            <ButtonInput
            text="Size"
            label="buttonPressed"
            type="button"
            id="buttonPressed"
            value={buttonPressed}
            click={this.click}
            />
        </button>
        </div> */
    );
  }
}
export default ButtonContainer;