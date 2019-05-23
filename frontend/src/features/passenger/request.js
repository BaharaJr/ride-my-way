import React, { Component } from 'react';
import './profile.css'
import { Link } from 'react-router-dom';
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
        })
      }

    render() {
        return (
            <div>
                <section id="sidemenu">
                    <nav>
                        <div class="logo">
                            <Link to="/profile">
                                <h1>Ride My Way</h1>
                            </Link>
                        </div>
                        <Link to="profile" class="active"><i class="fas fa-home i-active" />Home</Link>
                        <Link to="/taken"><i class="fas fa-car"></i>Rides Taken</Link>
                        <Link to="./request"><i class="fas fa-car-side"></i>Request Ride</Link>
                        <Link to="/rides"><i class="fas fa-taxi"></i>View Rides</Link>
                        <Link to="/signupdriver" class="dlink active"><i class="fas fa-user-circle i-active"></i>Become a Driver</Link>
                    </nav>
                </section>
                <header>
                    <Link to="/notifications" class="notification">
                        <i class="fas fa-bell fass"></i>
                        <span class="counter">5</span>
                    </Link>
                    <Link to="/miniprofile">
                        <div class="user-img">
                        </div>
                        <i class="fas fa-caret-down fass"></i>
                    </Link>
                </header>
                <section id="content-area">
                    <div class="heading">
                        <p> Hi Bennett</p>
                    </div>
                    <hr />

                    <h1 class="request">Find a ride</h1>
                    <div classNameName="div-group">
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
                            <h1 className="btnss"> <Link to="/rideoffer" ></Link>Find</h1>
                        </div>
                </section>
            </div>
        )
    }
}

export default Request;