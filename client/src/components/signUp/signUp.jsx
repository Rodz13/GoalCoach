import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../../firebase';
import './signup.scss';

class SignUp extends Component {
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

  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    return (
      <div className="form-inline signup-wrap">
        <h2 className="header">Sign Up</h2>
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
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div className="message">{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
      </div>
    )
  }
}

export default SignUp;