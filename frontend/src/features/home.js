import React, { PureComponent } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import vid from './media/vid.mp4';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <video className="videoTag" autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="banner-text">
            <h1>Ride My Way</h1>
            <p>Request, Share and Offer Rides</p>
          </div>
          <div className="btns">
            <Link to="/login">
              <button type="button" className="btn login-btn">
                LOGIN
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn signup-btn">
                SIGN UP
              </button>
            </Link>
          </div>
          <div className="form-container">
            <div className="signup-form-wrapper modal">
              <div className="x-btn signup-x">&times;</div>
              <div className="form-header">
                <h1>Welcome</h1>
                <h3>Join Peers and Enjoy Carpooling</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="h-profile">Go literally anywhere. From anywhere.</h1>
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
        </div> */}
      </div>
    );
  }
}

export default HomePage;
