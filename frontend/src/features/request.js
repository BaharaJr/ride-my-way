import React, {Component} from 'react';
import './profile.css'
import { Link } from 'react-router-dom';


class Request extends Component{

    render(){
        return(
            <div>
            <section id="sidemenu">
            <nav>
                <div class="logo">
                    <Link to="./home">
                        <h1>Ride My Way</h1>
                    </Link>
                </div>
                <Link to="profile" class="active"><i class="fas fa-home i-active" />Home</Link>
                <Link to="/"><i class="fas fa-car"></i>Rides Taken</Link>
                <Link to="./request"><i class="fas fa-car-side"></i>Request Ride</Link>
                <Link to="/"><i class="fas fa-taxi"></i>View Rides</Link>
                <Link to="/" class="dlink active"><i class="fas fa-user-circle i-active"></i>Become a Driver</Link>
            </nav>
        </section>
        <header>
            <Link to="/" class="notification">
                <i class="fas fa-bell fass"></i>
                <span class="counter">5</span>
            </Link>
            <Link to="/">
                <div class="user-img">
                </div>
                <i class="fas fa-caret-down fass"></i>
            </Link>
        </header>
        <section id="content-area">
            <div class="heading">
                <p> Hi Bennett</p>
            </div>
            <hr/>
    
            <div class="cards">
                <div class="col-rides">
                    <div class="card">
                        <h3>Rides Given</h3>
                        <span>23</span>
                    </div>
                </div>
                <div class="col-rides">
                    <div class="card">
                        <h3>Rides Taken</h3>
                        <span>56</span>
                    </div>
                </div>
                <div class="col-rides">
                    <div class="card">
                        <h3>Total Rides</h3>
                        <span>79</span>
                    </div>
                </div>
            </div>
    
        </section>
            </div>
        )
    }
}

export default Request;