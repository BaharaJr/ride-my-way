import React, {Componet} from 'react';

class Home extends Componet{
    render(){
        return(
<div class="fullscreen-bg">
        <video loop muted autoplay class="fullscreen-bg__video"> <source src="/UI/media/vid.mp4" type="video/webm"> 
        <div class="container">
            <div class="banner-text">
                <h1>Ride My Way</h1>
                <p>Request, Share and Offer Rides</p>
            </div>
            <div class="btns">
                <button class="btn login-btn"> Login</button>
                <button class="btn signup-btn"> Sign Up</button>
            </div>
            <div class="form-container">
                <div class="signup-form-wrapper modal">
                    <div class="x-btn signup-x">
                        &times;
                    </div>
                    <div class="form-header">
                        <h1>Welcome</h1>
                        <h3>Join Peers and Enjoy Carpooling</h3>
                    </div>
                    <form class="form">
                        <div class="input-group">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Full Name">
                        </div>
                        <div class="input-group">
                            <i class="fas fa-user-check"></i>
                            <input type="text" placeholder="Username">
                        </div>
                        <div class="input-group">
                            <i class="far fa-envelope"></i>
                            <input type="email" placeholder="Email">
                        </div>
                        <div class="input-group">
                            <i class="fas fa-mobile-alt"></i>
                            <input type="phone" placeholder="Phone Number">
                        </div>
                        <div class="input-group">
                            <i class="fas fa-key"></i>
                            <input type="password" placeholder="Password">
                        </div>
                        <button type="button" onclick="window.location.href = 'http:./UI/ui/profile.html';"> Sign
                            Up</button>
                    </form>
                </div>

                <div class="login-form-wrapper modal">
                    <div class="x-btn login-x">
                        &times;
                    </div>
                    <div class="form-header">
                        <h1>Welcome Back</h1>
                        <h3>Happy to See you Again</h3>
                    </div>
                    <form class="form">
                        <div class="input-group">
                            <i class="fas fa-user-check"></i>
                            <input type="text" placeholder="Username">
                        </div>
                        <div class="input-group">
                            <i class="fas fa-key"></i>
                            <input type="password" placeholder="Password">
                        </div>
                        <button type="button" onclick="window.location.href = '/UI/ui/profile.html';"> LogIn</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default Home;