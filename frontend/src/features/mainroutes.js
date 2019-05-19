import React from 'react';
import HomePage from './home';
import {Route, Switch} from 'react-router-dom';
import Profile from './profile';
import Request from './request';
import SignupDriver from './signupdriver';
import Driver from './driver';

const MainRoutes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/request" component={Request} />
        <Route path="/signupdriver" component={SignupDriver} />
        <Route path="/driver" component={Driver} />
    </Switch>
)

export default MainRoutes;