import React, { Component } from 'react';
import './landing.css';
import vid from './media/vid.mp4'
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constuctor() {
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }
    handlePageChange() {
        window.location = "/login";
    }

    render() {
        return (
            <div>
                <div className="fullscreen-bg">
                    <video className='videoTag' autoPlay loop muted>
                        <source src={vid} type='video/mp4' />
                    </video>
                    <div className="container">
                        <div className="banner-text">
                            <h1>Ride My Way</h1>
                            <p>Request, Share and Offer Rides</p>
                        </div>
                        <div className="btns">
                            <h1 className="btn login-btn" onClick={this.handlePageChange}>LOGIN</h1>
                            <h1 className="btn signup-btn" onClick={this.handlePageChange}>SIGN UP</h1>
                        </div>
                        <div className="form-container">
                            <div className="signup-form-wrapper modal">
                                <div className="x-btn signup-x">
                                    &times;
                    </div>
                                <div className="form-header">
                                    <h1>Welcome</h1>
                                    <h3>Join Peers and Enjoy Carpooling</h3>
                                    <h1> <Link to="./profile.js" ></Link>Sign Up</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default HomePage;