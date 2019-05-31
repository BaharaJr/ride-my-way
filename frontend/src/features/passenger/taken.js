import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

class Taken extends Component {
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
                <span>56</span>
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
              <td>Magomeni</td>
              <td>Buza</td>
              <td>Harith Minhajj</td>
              <td>T 234DFG</td>
              <td>28/10/2019</td>
            </tr>
            <tr>
              <td>Mliman</td>
              <td>Seedspace</td>
              <td>Leticia</td>
              <td>T45DSA</td>
              <td>22/10/2018</td>
            </tr>
            <tr>
              <td>Magomeni</td>
              <td>Buza</td>
              <td>Harith Minhajj</td>
              <td>T 234DFG</td>
              <td>25/10/2019</td>
            </tr>
            <tbody />
          </table>
        </section>
      </div>
    );
  }
}

export default Taken;
