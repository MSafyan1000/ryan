/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import HomePage from 'containers/HomePage/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import SignIn from 'containers/SignIn/Loadable';
import Profile from 'containers/Profile/Loadable';
import Forgot from 'containers/Forgot/Loadable';
import Upgrades from 'containers/Upgrades/Loadable';
import Settings from 'containers/Settings/Loadable';
import Help from 'containers/Help/Loadable';
import Go from 'containers/Go/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/sign_in" component={SignIn} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/go" component={Go} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/upgrades" component={Upgrades} />
      <Route path="/help" component={Help} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
