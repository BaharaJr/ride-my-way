/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      roleId: 1,

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  submit(e) {
    e.preventDefault();
    axios.post('/users/register', {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      roleId: this.state.roleId,
    }).then((res) => {
      localStorage.setItem('jwt', res.data.token);
      localStorage.setItem('roleId', res.data.user.roleId);
      localStorage.setItem('name', res.data.user.name);
      localStorage.setItem('username', res.data.user.username);
      localStorage.setItem('id', res.data.user.id);
      this.props.history.push('/profile');
    });
  }

  render() {
    return (
      <div>
        <div className="log">
          <Link to="/">
            <p> Ride My Way</p>
          </Link>
        </div>
        <div className="signup-form-wrapper modal">
          <div className="form-header">
            <h1>Welcome</h1>
            <h3>Join Peers and Enjoy Carpooling</h3>
          </div>
          <form classNameName="form">
            <div className="input-group">
              <i className="fas fa-user" />
              <input
                type="text"
                placeholder="Full Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fas fa-user-check" />
              <input
                type="text"
                placeholder="Username"
                value={this.state.userame}
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <i className="far fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <i className="fas fa-key" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <Link to="/login">
              <h1 className="btnss signup-btn">SIGNUP</h1>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
