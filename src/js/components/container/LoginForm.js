import React, { Component } from "react";
import Input from "../presentational/Input";
import InputSubmit from "../presentational/InputSubmit";
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
    console.log(this.state) //This is to show that we are updating the state when we type in the username/pasword field for the Demonstration Video
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
            type="password" //The password type makes it so that the password is not displayed to everyone.
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


