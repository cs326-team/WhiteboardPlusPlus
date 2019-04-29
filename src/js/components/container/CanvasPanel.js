import React, { Component } from "react";
import Button from "../presentational/Button";
import ButtonGroup from "../presentational/styled/ButtonGroup";
import { CompactPicker } from 'react-color';
import ClipboardIcon from 'react-clipboard-icon';

//Must run: npm install react-color --save

class CanvasPanel extends Component {
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
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  onClickHandler(event){
      this.setState({ buttonPressed: 1 });
      alert("This feature is coming soon!");
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

  // heavily leans upon this stackoverflow post
  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  copyToClipboard(e) {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
  }

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
          text={this.props.linkUrl ? "Update Link" : "Create Link"}
          id="LinkButton"
          onClickHandler={this.props.onSaveHandler }
        />
         {this.props.linkUrl && (
           <form
            style={{display:"flex", border: "1px solid gray", borderRadius:"3px"}}>
            <textarea
              ref={(textarea) => this.textArea = textarea}
              value={this.props.linkUrl}
              readOnly
              style={{width:"80%", border: "none", marginRight:"5px"}}
            />
            {document.queryCommandSupported('copy') &&
              <Button
                marginBottom={"0rem"}
                paddingTop={"0.9rem"}
                classes="btn btn-light"
                text={
                  <ClipboardIcon 
                  size={20}
                  />
                }
                id="ShareButton"
                onClickHandler={this.copyToClipboard}
              />
            }
           </form>
         )}
      </ButtonGroup>
    );
  }
}
export default CanvasPanel;