/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './profile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rides: [],
    };
  }

  async componentDidMount() {
    const rides = (await axios.get('/rides')).data;
    this.setState({
      rides,
    });
  }

  render() {
    return (
      <div>
        <section id="sidemenu">
          <nav>
            <div className="logo">
              <Link to="/">
                <h1>Ride My Way</h1>
              </Link>
            </div>
            <Link to="profile" className="active">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link to="/taken">
              <i className="fas fa-car" />
              Rides Taken
            </Link>
            <Link to="/request">
              <i className="fas fa-car-side" />
              Request Ride
            </Link>
            <Link to="/rides">
              <i className="fas fa-taxi" />
              View Rides
            </Link>
            <Link to="/signupdriver" className="dlink active">
              <i className="fas fa-user-circle i-active" />
              Become a Driver
            </Link>
          </nav>
        </section>
        <header>
          <Link to="/notifications" className="notification">
            <i className="fas fa-bell fass" />
            <span className="counter">5</span>
          </Link>
          <Link to="/">
            <div className="userimg" />
            <i className="fas fa-caret-down fass">
              <div className="dropdown-content" />
            </i>
          </Link>
        </header>
        <section id="content-area">
          <div className="heading">
            <p> Hi Bennett</p>
          </div>
          <hr />

          <div className="cards">
            <div className="col-rides">
              <div className="card">
                <h3>Rides Given</h3>
                <span>23</span>
              </div>
            </div>
            <div className="col-rides">
              <div className="card">
                <h3>Rides Taken</h3>
                <span>56</span>
              </div>
            </div>
            <div className="col-rides">
              <div className="card">
                <h3>Total Rides</h3>
                <span>79</span>
              </div>
            </div>
          </div>
          <h1 className="tbl">Available Ride Offers</h1>
        <table>
          <thead>
            <tr>
              <th>Pickup</th>
              <th>Drop-off</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tr>
            <td>
              {this.state.rides.map(rides => (
                <p key={rides.ride_id}>{rides.pickup}</p>
              ))}
              {' '}
            </td>
            <td>
              {this.state.rides.map(rides => (
                <p key={rides.ride_id}>{rides.dropoff}</p>
              ))}
              {' '}
            </td>
            <td>
              {this.state.rides.map(rides => (
                <p key={rides.ride_id}>{rides.date}</p>
              ))}
            </td>
            <td>
              {this.state.rides.map(rides => (
                <p key={rides.ride_id}>{rides.time}</p>
              ))}
            </td>
          </tr>
          <tbody />
        </table>
        </section>
      </div>
    );
  }
}

export default Profile;
