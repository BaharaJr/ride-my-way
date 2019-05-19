import React from 'react';
import HomePage from './home';
import {Route, Switch} from 'react-router-dom';
import Profile from './profile';
import Request from './request';

const MainRoutes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/request" component={Request} />
    </Switch>
)

export default MainRoutes;