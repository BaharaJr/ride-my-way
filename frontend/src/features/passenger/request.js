import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
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
              <i className="fas fa-home i-active" />
              Home
            </Link>
            <Link to="/taken">
              <i className="fas fa-car" />
              Rides Taken
            </Link>
            <Link to="./request">
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
          <Link to="/miniprofile">
            <div className="user-img" />
            <i className="fas fa-caret-down fass" />
          </Link>
        </header>
        <section id="content-area">
          <div className="heading">
            <p> Hi Bennett</p>
          </div>
          <hr />

          <h1 className="request">Find a ride</h1>
          <div className="div-group">
            <p className="p-groups">Pick-up</p>
            <input type="text" placeholder="Meet me Here" className="inputs" />
            <p className="p-groups">Drop-off</p>
            <input type="text" placeholder="Drop-off here" className="inputs" />
            <DatePicker
              selected={this.state.startDate}
              timeInputLabel="Time:"
              onChange={this.handleChange}
              dateFormat="MMM d, yyyy || h:mm aa"
              showTimeInput
              className="datepicker-input"
            />
            <h1 className="btnss">
              {" "}
              <Link to="/rideoffer" />
              Find
            </h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Request;
