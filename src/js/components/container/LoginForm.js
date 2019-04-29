import React, { Component } from "react";
import Input from "../presentational/Input";
import InputSubmit from "../presentational/InputSubmit";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  render() {
    const { username, password } = this.state;
    return (
      <div id="Login">
        <form id="Login-Form">
          <Input
            text="Username:"
            label="Username"
            type="text"
            id="username"
            value={username}
            handleChange={this.handleChange}
          />
          <Input
            text="Password:"
            label="Password"
            type="password" 
            id="password"
            value={password}
            handleChange={this.handleChange}
          />
          <InputSubmit
            label="Log-In"
            type="submit"
            id="submitButton"
            onClick={(e) => {console.log(this.state); }} //The handleChange is mapped to the onClick inside of InputSubmit

          />
        </form>
      </div>
    );
  }
}

export default FormContainer;


