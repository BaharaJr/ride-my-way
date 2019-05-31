import React, { Component } from "react";
import "./driver.css";
import { Link } from "react-router-dom";

class RideRequests extends Component {
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
            <div class="logo">
              <Link to="/driver">
                <h1>Ride My Way</h1>
              </Link>
            </div>
            <Link to="driver" class="active">
              <i class="fas fa-home i-active" />
              Home
            </Link>
            <Link to="/addoffer">
              <i class="fas fa-plus-circle" />Add Offer
            </Link>
            <Link to="./riderequest">
              <i class="fas fa-car-side" />View Requests
            </Link>
            <Link to="/rideoffer">
              <i class="fas fa-taxi" />Ride Offers
            </Link>
          </nav>
        </section>
        <header>
          <Link to="/notifications" class="notification">
            <i class="fas fa-bell fass" />
            <span class="counter">5</span>
          </Link>
          <Link to="/miniprofile">
            <div class="userimg" />
            <i class="fas fa-caret-down fass" />
          </Link>
        </header>
        <section id="content-area">
          <div class="heading">
            <p> Hi Bennett</p>
          </div>
          <hr />

          <div class="cards">
            <div class="col-rides">
              <div class="card">
                <h3>Requests Denied</h3>
                <span>23</span>
              </div>
            </div>
            <div class="col-rides">
              <div class="card">
                <h3>Requests Accepted</h3>
                <span>56</span>
              </div>
            </div>
            <div class="col-rides">
              <div class="card">
                <h3>Total Rides</h3>
                <span>79</span>
              </div>
            </div>
          </div>
          <h1 class="tbl">Ride Requests</h1>
          <table>
            <thead>
              <tr>
                <th>Pick-up</th>
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
export default RideRequests;
