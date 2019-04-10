import React, { Component } from "react";
import Button from "../presentational/Button";
import ButtonGroup from "../presentational/styled/ButtonGroup";
import { CompactPicker } from 'react-color'

//Must run: npm install react-color --save

class ButtonPanel extends Component {
  constructor() {
    super();
    this.state = {
      buttonPressed: 0,
      displayColorPicker: false
      // color: '#4D4D4D'
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onClickHandler(event){
      this.setState({ buttonPressed: 1 });
  }

  handleClick(event){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  // handleChangeComplete(color){
  //   this.setState({color, ...this.state});
  // };

  handleClose(event){
    this.setState({ displayColorPicker: false })
  };

  render() {
    const { buttonPressed } = this.state;
    const{ displayColorPicker } = this.state
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
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
          onClickHandler={this.handleClick}
        />
          { this.state.displayColorPicker ? <div style={ popover } >
          <div style={ cover } onClick={ this.handleClose }/> 
        <CompactPicker
          color = { this.props.color }
          onChangeComplete={ this.props.setColorHandler }
        />
        </div> : null }
        <Button
          classes="btn btn-success"
          text="Resize"
          id="SizeButton"
          onClickHandler={this.onClickHandler}
        />
        <Button
          classes="btn btn-primary"
          text="Save"
          id="LinkButton"
          onClickHandler={this.props.onSaveHandler }
        />
        
      </ButtonGroup>
    );
  }
}
export default ButtonPanel;