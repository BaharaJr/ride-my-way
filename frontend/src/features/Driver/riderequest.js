import React, { Component } from "react";
import "./driver.css";
import { Link } from "react-router-dom";

class RideRequests extends Component {
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
            <Link to="driver">
              <i class="fas fa-home" />
              Home
            </Link>
            <Link to="/addoffer">
              <i class="fas fa-plus-circle" />Add Offer
            </Link>
            <Link to="./riderequest" class="active">
              <i class="fas fa-car-side i-active" />View Requests
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
export default RideRequests;
