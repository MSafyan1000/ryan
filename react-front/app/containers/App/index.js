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
import { AppContext } from 'libs/contextLib';
import { Auth } from 'aws-amplify';

// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';

export default function App() {
  const [isAuthenticated, userHasAuthenticated] = React.useState(false);
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);
  React.useEffect(() => {
    onLoad();
    //init Materialize-css
    // M.AutoInit();
  }, []);

  async function onLoad() {
    try {
      const data = await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  console.log(isAuthenticated);
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/sign_in" component={SignIn} />
        <Route path="/forgot" component={Forgot} />
        {isAuthenticated && (
          <>
            <Route path="/go" component={Go} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/upgrades" component={Upgrades} />
            <Route path="/help" component={Help} />
          </>
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </AppContext.Provider>
  );
}
