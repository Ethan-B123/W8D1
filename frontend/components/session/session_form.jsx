import React from "react";


class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleInput(type) {
    return e => this.setState({[type]: e.target.value});
  }

  render() {
    let header;
    switch (this.props.location.pathname) {
      case "/login":
        header = "Log In!";
        break;
      case "/signup":
        header = "Sign Up!";
        break;
      default:
        header = "What!";
    }
    return (
      <form>
        <h1>{header}</h1>
        <label htmlFor="username-input">Username: </label>
        <input id="username-input" type="text" onChange={this.handleInput("username")} />
        <label htmlFor="password-input">Password: </label>
        <input id="password-input" type="password" onChange={this.handleInput("password")} />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}


export default SessionForm;
