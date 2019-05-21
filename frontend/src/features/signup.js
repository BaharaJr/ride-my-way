import React, { Component } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constuctor() {
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }
    handlePageChange() {
        window.location = "/profile";
    }

    render() {
        return (
            <div>
                    <div className="form-container">
                <div class="log">
                    <Link to="/">
                        <p> Ride My Way</p>
                    </Link>
                </div>
                
                            <div className="signup-form-wrapper modal">
                                <div className="form-header">
                                    <h1>Welcome</h1>
                                    <h3>Join Peers and Enjoy Carpooling</h3>
                                </div>
                                <form classNameName="form">
                                    <div className="input-group">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="input-group">
                                        <i className="fas fa-user-check"></i>
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="input-group">
                                        <i className="far fa-envelope"></i>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="input-group">
                                        <i className="fas fa-mobile-alt"></i>
                                        <input type="phone" placeholder="Phone Number" />
                                    </div>
                                    <div className="input-group">
                                        <i className="fas fa-key"></i>
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <h1 className="btnss"> <Link to="/profile.js" ></Link>Sign Up</h1>
                                </form>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Signup;