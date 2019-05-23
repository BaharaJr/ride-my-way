import React, { Component } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';

class Rides extends Component {
    render() {
        return (
            <div>
               <section id="sidemenu">
            <nav>
                <div class="logo">
                    <Link to="/">
                        <h1>Ride My Way</h1>
                    </Link>
                </div>
                <Link to="profile" class="active"><i class="fas fa-home" />Home</Link>
                <Link to="/taken"><i class="fas fa-car"></i>Rides Taken</Link>
                <Link to="/request"><i class="fas fa-car-side"></i>Request Ride</Link>
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
                <div class="userimg" />
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
            <h1 class="tbl">Available Ride Offers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Pickup</th>
                        <th>Drop-off</th>
                        <th>Driver</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tr>
                    <td>Magomeni</td>
                    <td>Buza</td>
                    <td>Harith Minhajj</td>
                    <td>28/10/2019</td>
                    <td>28/10/2019</td>
                </tr>
                <tr>
                    <td>Mliman</td>
                    <td>Seedspace</td>
                    <td>5678909876543</td>
                    <td>22/10/2018</td>
                    <td>28/10/2019</td>
                </tr>
                <tr>
                    <td>Magomeni</td>
                    <td>Buza</td>
                    <td>Harith Minhajj</td>
                    <td>25/10/2019</td>
                    <td>28/10/2019</td>
                </tr>
                <tbody>
    
                </tbody>
            </table>
    
        </section>

            </div>
        )
    }
}
export default Rides;