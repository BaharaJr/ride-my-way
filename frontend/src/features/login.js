/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="log">
          <Link to="/">
            <p> Ride My Way</p>
          </Link>
        </div>
        <div className="login-form-wrapper modal" />
        <div className="form-header">
          <h1>Welcome Back</h1>
          <h3>Happy to See you Again</h3>
        </div>
        <form className="form">
          <div className="input-group">
            <i className="fas fa-user-check" />
            <input type="username" name="username" placeholder="username" />
          </div>
          <div className="input-group">
            <i className="fas fa-key" />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <Link to="/profile">
            <h1>LogIn</h1>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
