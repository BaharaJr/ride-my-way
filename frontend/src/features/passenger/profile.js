import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

class Profile extends Component {
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
          <h1 className="h-profile">Go literally anywhere. From anywhere.</h1>
          <div className="p-profile">
            <div className="card-profile">
              <h2> Smart </h2>
              <p>
                With access to millions of journeys, you can quickly find people
                nearby travelling your way.
              </p>
            </div>
            <div className="card-profile">
              <h2> Simple </h2>
              <p>
                Enter your exact address to find the perfect ride. Choose who
                you’d like to travel with. And book!
              </p>
            </div>
            <div className="card-profile">
              <h2> Standard </h2>
              <p>
                Designed for you to give you the comfort and standard you need
                in choosing your rides
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
