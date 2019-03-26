import React, { Component } from "react";
import Input from "../presentational/Input";
import InputSubmit from "../presentational/inputSubmit";
import Buttonify from "../presentational/styled/Buttonify";

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
    console.log(this.state)
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { username } = this.state;
    const { password } = this.state;
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
            type="password" //The password type makes it so that the password is not displayed to everyone.
            id="password"
            value={password}
            handleChange={this.handleChange}
          />
        </form>
          <InputSubmit
            text="Log-in"
            label="Log-In"
            type= {Buttonify}
            value = "Log-In"
            title = "Testing"
            onClick={(e) => {e.preventDefault(); console.log(this.state); }} //The handleChange is mapped to the onClick inside of InputSubmit
            //The prevent default prevents the automatic Submit type button from refreshing the page.

          />
      </div>
    );
  }
}

export default FormContainer;


