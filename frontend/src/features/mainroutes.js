import React from 'react';
import HomePage from './home';
import {Route, Switch} from 'react-router-dom';
import Profile from './passenger/profile';
import Request from './passenger/request';
import SignupDriver from './Driver/signupdriver';
import Driver from './Driver/driver';
import Login from './login';
import Signup from './signup';
import RideRequests from './Driver/riderequest';
import AddOffer from './Driver/addoffer';
import RideOffers from './Driver/rideoffer';

const MainRoutes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/request" component={Request} />
        <Route path="/signupdriver" component={SignupDriver} />
        <Route path="/driver" component={Driver} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/riderequest" component={RideRequests} />
        <Route path="/addoffer" component={AddOffer} />
        <Route path="/rideoffer" component={RideOffers} />
    </Switch>
)

export default MainRoutes;