import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
// import Background from './media/ride';

class Login extends Component {
  constuctor() {
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }
  handlePageChange() {
    window.location = "/profile";
  }

  render() {
    return (
      <div>
        <div class="log">
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
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <i className="fas fa-key" />
            <input type="password" placeholder="Password" />
          </div>
          <h1 onClick={this.handlePageChange}>
            {" "}
            <Link to="/profile.js" />
            LogIn
          </h1>
        </form>
      </div>
    );
  }
}

export default Login;
