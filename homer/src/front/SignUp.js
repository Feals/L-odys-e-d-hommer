import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastname: ''
    };
  }

  updateEmailField = (event) => {
    this.setState({ email: event.target.value });
  }
  updatePasswordField = (event) => {
    this.setState({ password: event.target.value });
  }
  updateNameField = (event) => {
    this.setState({ name: event.target.value });
  }
  updateLastnameField = (event) => {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("A name was submitted :");
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
    console.log("Name: ", this.state.name);
    console.log("Lastname: ", this.state.lastname);
  }

  render() {
    return (
      <div>        
        <h1>Email: {this.state.email}</h1>
        <h1>Password: {this.state.password}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Lastname: {this.state.lastname}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" onChange={this.updateEmailField} />
          <input type="password" name="password" onChange={this.updatePasswordField} />
          <input type="passwordbis" name="passwordbis" />
          <input type="text" name="name" onChange={this.updateNameField} />
          <input type="text" name="lastname" onChange={this.updateLastnameField} />
          <input type="submit" value="Soumettre"/>
        </form>
      </div>
    );
  }
}

export default SignUp;
