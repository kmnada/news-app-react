import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../login';
import SignUp from '../signup';
import PrivateRoute from './helpers/privateRoute';
import MainLayout from './mainlayout';

const RootLayout = () => (
  <Switch>
    <Redirect from="/" to="login" exact={true} />
    <Route path="/login" exact={true} component={Login} />
    <Route path="/signup" exact={true} component={SignUp} />
    <PrivateRoute component={MainLayout} />
  </Switch>
);

export default RootLayout;
