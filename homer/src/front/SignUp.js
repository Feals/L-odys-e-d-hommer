import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Email: {this.state.email}</h1>
        <input type="email" name="email" onChange={this.updateEmailField.bind(this)} />
      </div>
    );
  }
}

export default SignUp;
