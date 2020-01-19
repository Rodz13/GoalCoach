import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';
import './signin.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    return (
      <div className="form-inline signin-wrap">
        <h2 className="header">Sign In</h2>
        <div className="form-group">
          <input
            className="form-control input"
            type="text"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control input"
            type="password"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div className="message">{this.state.error.message}</div>
        <div><Link to={'/signup'}>Not a user? Sign up instead</Link></div>
      </div>
    )
  }
}

export default SignIn;