import React, { Component } from "react";
import Button from "../presentational/Button";
import ButtonGroup from "../presentational/styled/ButtonGroup";

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
      <ButtonGroup>
        <Button
          classes="btn btn-danger"
          text="Clear"
          id="ClearButton"
          onClickHandler={() => window.location.reload()}
        />
        <Button
          classes="btn btn-warning"
          text="Change Color"
          id="ColorButton"
          onClickHandler={this.onClickHandler}
        />
        <Button
          classes="btn btn-success"
          text="Resize"
          id="SizeButton"
          onClickHandler={this.onClickHandler}
        />
        <Button
          classes="btn btn-primary"
          text="Share"
          id="LinkButton"
          onClickHandler={this.onClickHandler}
        />
        
      </ButtonGroup>
    );
  }
}
export default ButtonContainer;