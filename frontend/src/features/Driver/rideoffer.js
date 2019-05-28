import React, { Component } from "react";
import "./driver.css";
import { Link } from "react-router-dom";

class Rideoffers extends Component {
  constructor() {
    super();
    this.state = {
      rideoffers: []
    };
  }
  componentDidMount() {
    fetch("/api/v1/rideOffers")
      .then(res => res.json)
      .then(rideoffers =>
        this.setState({ rideoffers }, () =>
          console.log("ride offers", rideoffers)
        )
      );
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
            <Link to="driver" className="active">
              <i className="fas fa-home i-active" />
              Home
            </Link>
            <Link to="/addoffer">
              <i className="fas fa-plus-circle" />
              Add Offer
            </Link>
            <Link to="./riderequest">
              <i className="fas fa-car-side" />
              View Requests
            </Link>
            <Link to="/rideoffer">
              <i className="fas fa-taxi" />
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
              <td>Magomeni</td>
              <td>Buza</td>
              <td>Harith Minhajj</td>
              <td>28/10/2019</td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}
export default Rideoffers;
