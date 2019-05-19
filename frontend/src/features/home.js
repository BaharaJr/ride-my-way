import React, {Component} from 'react';
import './landing.css';
import vid from './media/vid.mp4'
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render(){
        return(
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
                <button className="btn login-btn">LogIn</button>
                <button className="btn signup-btn"> Sign Up</button>
            </div>
            <div className="form-container">
                <div className="signup-form-wrapper modal">
                    <div className="x-btn signup-x">
                        &times;
                    </div>
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
                        <button> <Link to="./profile.js" ></Link>Sign Up</button>
                    </form>
                </div>

                <div className="login-form-wrapper modal">
                    <div className="x-btn login-x">
                        &times;
                    </div>
                    <div className="form-header">
                        <h1>Welcome Back</h1>
                        <h3>Happy to See you Again</h3>
                    </div>
                    <form className="form">
                        <div className="input-group">
                            <i className="fas fa-user-check"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-group">
                            <i className="fas fa-key"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <button> <Link to="./profile.js" ></Link>LogIn</button>

                    </form>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default HomePage;