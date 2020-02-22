/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './driver.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Rideoffers extends Component {
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
              <Link to="/driver">
                <h1>Ride My Way</h1>
              </Link>
            </div>
            <Link to="driver">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link to="/addoffer">
              <i className="fas fa-plus-circle i-active" />
              Add Offer
            </Link>
            <Link to="./riderequest">
              <i className="fas fa-car-side" />
              View Requests
            </Link>
            <Link to="/rideoffer" className="active">
              <i className="fas fa-taxi i-active" />
              Ride Offers
            </Link>
          </nav>
        </section>
        <header>
          <Link to="/notifications" className="notification">
            <i className="fas fa-bell fass" />
            <span className="counter">5</span>
          </Link>
          <Link to="/miniprofile">
            <div className="userimg" />
            <i className="fas fa-caret-down fass" />
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
                <h3>Rides Offers Created</h3>
                <span>23</span>
              </div>
            </div>
          </div>
          <h1 className="tbl">Ride Offers Created</h1>
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
                {' '}
                {this.state.rides.map(rides => (
                  <p key={rides.ride_id}>{rides.pickup}</p>
                ))}
              </td>
              <td>
                {' '}
                {this.state.rides.map(rides => (
                  <p key={rides.ride_id}>{rides.dropoff}</p>
                ))}
              </td>
              <td>
                {' '}
                {this.state.rides.map(rides => (
                  <p key={rides.ride_id}>{rides.date}</p>
                ))}
              </td>
              <td>
                {' '}
                {this.state.rides.map(rides => (
                  <p key={rides.ride_id}>{rides.time}</p>
                ))}
              </td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}
export default Rideoffers;
