import React from 'react';
import HomePage from './home';
import {Route, Switch} from 'react-router-dom';
import Profile from './profile';
import Request from './request';
import SignupDriver from './signupdriver';
import Driver from './driver';
import Login from './login';
import Signup from './signup';

const MainRoutes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/request" component={Request} />
        <Route path="/signupdriver" component={SignupDriver} />
        <Route path="/driver" component={Driver} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default MainRoutes;