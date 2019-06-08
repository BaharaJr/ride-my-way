import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./driver.css";

class SignupDriver extends Component {
  constuctor() {
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }
  handlePageChange() {
    window.location = "/driver";
  }
  render() {
    return (
      <div>
        <div className="log">
          <Link to="/profile">
            <p> Ride My Way</p>
          </Link>
        </div>

        <div className="form-headers">
          <h3>Make Money While Driving</h3>
        </div>
        <form className="forms">
          <div className="input-groups">
            <i className="fas fa-address-card" />
            <input type="text" placeholder="Registered Names" />
          </div>
          <div className="input-groups">
            <i className="far fa-id-badge" />
            <input type="integer" placeholder="Driving Licence" />
          </div>
          <div className="input-groups">
            <i className="fas fa-car" />
            <input type="integer" placeholder="Car Number" />
          </div>
          <div className="input-groups">
            <i className="fas fa-car-side" />
            <input type="text" placeholder="Car Type" />
          </div>
          <div className="input-groups">
            <i className="far fa-file-alt" />
            <input type="integer" placeholder="Car Licence" />
          </div>
          <h1 className="btnss" onClick={this.handlePageChange}>
            <Link to="/driver" />Sign Up
          </h1>
        </form>
      </div>
    );
  }
}
export default SignupDriver;
