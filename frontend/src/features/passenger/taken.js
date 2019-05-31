import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

class Taken extends Component {
  constructor() {
    super();
    this.state = {
      rideTaken: []
    };
  }
  componentDidMount() {
    fetch('/api/v1/rideTaken')
      .then(res => res.json())
      .then(rideTaken => this.setState({ rideTaken }));
  }
  render() {
    return (
      <div>
        <section id="sidemenu">
          <nav>
            <div className="logo">
              <Link to="/profile">
                <h1>Ride My Way</h1>
              </Link>
            </div>
            <Link to="profile" className="active">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link to="/taken">
              <i className="fas fa-car" />Rides Taken
            </Link>
            <Link to="/request">
              <i className="fas fa-car-side" />Request Ride
            </Link>
            <Link to="/rides">
              <i className="fas fa-taxi" />View Rides
            </Link>
            <Link to="/signupdriver" className="dlink active">
              <i className="fas fa-user-circle i-active" />Become a Driver
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
                <h3>Rides Taken</h3>
                <span>5</span>
              </div>
            </div>
          </div>
          <h1 className="tbl">Rides Taken</h1>
          <table>
            <thead>
              <tr>
                <th>Pickup</th>
                <th>Drop-off</th>
                <th>Driver</th>
                <th>Car #</th>
                <th>Date</th>
              </tr>
            </thead>
            <tr>
              <td>{this.state.rideTaken.map(rideTaken => 
              <li key={rideTaken.id}>{rideTaken.Pickup}</li>)}</td>
              <td>{this.state.rideTaken.map(rideTaken => 
              <li key={rideTaken.id}>{rideTaken.Dropoff}</li>)}</td>
              <td>{this.state.rideTaken.map(rideTaken => 
              <li key={rideTaken.id}>{rideTaken.Driver}</li>)}</td>
              <td>{this.state.rideTaken.map(rideTaken => 
              <li key={rideTaken.id}>{rideTaken.Car}</li>)}</td>
              <td>{this.state.rideTaken.map(rideTaken => 
              <li key={rideTaken.id}>{rideTaken.Date}</li>)}</td>
            </tr>
            <tbody />
          </table>
        </section>
      </div>
    );
  }
}

export default Taken;
