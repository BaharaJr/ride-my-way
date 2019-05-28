import React, { Component } from "react";
import "./driver.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddOffer extends Component {
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
            <div class="logo">
              <Link to="/driver">
                <h1>Ride My Way</h1>
              </Link>
            </div>
            <Link to="driver" class="active">
              <i class="fas fa-home" />
              Home
            </Link>
            <Link to="/addoffer">
              <i class="fas fa-plus-circle" />
              Add Offer
            </Link>
            <Link to="./riderequest">
              <i class="fas fa-car-side" />
              View Requests
            </Link>
            <Link to="/rideoffer">
              <i class="fas fa-taxi" />
              Ride Offers
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
          <div className="form-header">
            <h3>Offer a ride and let passengers catch you on road</h3>
          </div>
          <section className="offer-group">
            <div className="div-group">
              <p className="p-groups">Pick-up</p>
              <input
                type="text"
                placeholder="Meet me Here"
                className="inputs"
              />
              <p className="p-groups">Drop-off</p>
              <input
                type="text"
                placeholder="Drop-off here"
                className="inputs"
              />
              <p className="p-groups">Stopovers</p>
              <p className="stop-over">Add your stopover points</p>
              <input type="text" placeholder="Stopovers" className="inputs" />
              <p className="p-groups">Date & Time</p>
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
                Add Offer
              </h1>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
export default AddOffer;
