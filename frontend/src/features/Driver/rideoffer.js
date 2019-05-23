import React, { Component } from 'react';
import './driver.css';
import { Link } from 'react-router-dom';

class Rideoffers extends Component {
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
                <Link to="driver" class="active"><i class="fas fa-home i-active" />Home</Link>
                <Link to="/addoffer"><i class="fas fa-plus-circle"></i>Add Offer</Link>
                <Link to="./riderequest"><i class="fas fa-car-side"></i>View Requests</Link>
                <Link to="/rideoffer"><i class="fas fa-taxi"></i>Ride Offers</Link>
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
                        <h3>Rides Offers Created</h3>
                        <span>23</span>
                    </div>
                </div>

            </div>
            <h1 class="tbl">Ride Offers Created</h1>
            <table>
                <thead>
                    <tr>
                        <th>Pickup</th>
                        <th>Drop-off</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tr>
                    <td>Magomeni</td>
                    <td>Buza</td>
                    <td>Harith Minhajj</td>
                    <td>28/10/2019</td>
                </tr>
                <tr>
                    <td>Mliman</td>
                    <td>Seedspace</td>
                    <td>5678909876543</td>
                    <td>22/10/2018</td>
                </tr>
                <tr>
                    <td>Magomeni</td>
                    <td>Buza</td>
                    <td>Harith Minhajj</td>
                    <td>25/10/2019</td>
                </tr>
                <tbody>
    
                </tbody>
            </table>
    
        </section>

            </div>
        )
    }
}
export default Rideoffers;