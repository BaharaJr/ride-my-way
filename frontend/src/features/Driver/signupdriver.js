import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './driver.css';

class SignupDriver extends Component {
    constuctor() {
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
      }
      handlePageChange() {
        window.location = "/driver";
      }
    render (){
        return (
            <div>
                <div class="log">
                    <Link to="/profile">
                        <p> Ride My Way</p>
                    </Link>
                </div>
                
                  <div className="form-headers">
                        <h3>Make Money While Driving</h3>

                    </div>
                    <form classNameName="forms">
                        <div className="input-groups">
                        <i class="fas fa-address-card"></i>
                            <input type="text" placeholder="Registered Names" />
                        </div>
                        <div className="input-groups">
                        <i class="far fa-id-badge"></i>
                            <input type="integer" placeholder="Driving Licence" />
                        </div>
                        <div className="input-groups">
                        <i class="fas fa-car"></i>
                            <input type="integer" placeholder="Car Number" />
                        </div>
                        <div className="input-groups">
                        <i class="fas fa-car-side"></i>
                            <input type="text" placeholder="Car Type" />
                        </div>
                        <div className="input-groups">
                        <i class="far fa-file-alt"></i>
                            <input type="integer" placeholder="Car Licence" />
                        </div>
                        <h1 className="btnss" onClick={this.handlePageChange}> <Link to="/driver" ></Link>Sign Up</h1>
                    </form>
                </div>
        )
    }
}
export default SignupDriver;