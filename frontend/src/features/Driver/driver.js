import React, { Component } from "react";
import "./driver.css";
import { Link } from "react-router-dom";

class Driver extends Component {
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
                <th>Destination</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Time</th>
              </tr>
            </thead>
            <tr>
              <td>Magomeni</td>
              <td>Buza</td>
              <td>Harith Minhajj</td>
              <td>09876543</td>
              <td>28/10/2019</td>
            </tr>
            <tr>
              <td>Mliman</td>
              <td>Seedspace</td>
              <td>Leticia</td>
              <td>5678909876543</td>
              <td>22/10/2018</td>
            </tr>
            <tr>
              <td>Magomeni</td>
              <td>Buza</td>
              <td>Harith Minhajj</td>
              <td>098234567</td>
              <td>25/10/2019</td>
            </tr>
            <tbody />
          </table>
        </section>
      </div>
    );
  }
}

export default Driver;
