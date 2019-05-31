import React, { Component } from "react";
import "./driver.css";
import { Link } from "react-router-dom";

class Driver extends Component {
  constructor() {
    super();
    this.state = {
      rideRequests: []
    };
  }
  componentDidMount() {
    fetch('/api/v1/rideRequests')
      .then(res => res.json())
      .then(rideRequests => this.setState({ rideRequests }));
  }
  render() {
    return (
      <div>
        <section id="sidemenu">
          <nav>
            <div>
              <Link to="/driver">
                <h1>Ride My Way</h1>
              </Link>
            </div>
            <Link to="driver" className="active">
              <i className="fas fa-home i-active" />
              Home
            </Link>
            <Link to="./addoffer">
              <i className="fas fa-plus-circle" />Add Offer
            </Link>
            <Link to="/riderequest">
              <i className="fas fa-car-side" />View Requests
            </Link>
            <Link to="/rideoffer">
              <i className="fas fa-taxi" />Ride Offers
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
            <div className="col-rides">
              <div className="card">
                <h3>Requests Accepted</h3>
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
          <h1 className="tbl">Ride Requests</h1>
          <table>
            <thead>
              <tr>
                <th>Pickup</th>
                <th>Drop-off</th>
                <th>Name</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tr>
              <td>{this.state.rideRequests.map(rideRequests => 
              <li key={rideRequests.id}>{rideRequests.Pickup}</li>)}</td>
              <td>{this.state.rideRequests.map(rideRequests => 
              <li key={rideRequests.id}>{rideRequests.Dropoff}</li>)}</td>
              <td>{this.state.rideRequests.map(rideRequests => 
              <li key={rideRequests.id}>{rideRequests.Name}</li>)}</td>
              <td>{this.state.rideRequests.map(rideRequests => 
              <li key={rideRequests.id}>{rideRequests.Phone}</li>)}</td>
            </tr>
            <tbody />
          </table>
        </section>
      </div>
    );
  }
}

export default Driver;
