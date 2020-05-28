import React from 'react';

import logo from '../images/img1.png';
import { Link, withRouter } from 'react-router-dom';
import { useAppContext } from 'libs/contextLib';
import { Auth } from 'aws-amplify';

function index(props) {
  const { userHasAuthenticated, isAuthenticated } = useAppContext();

  const [visible, setVisible] = React.useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    await Auth.signOut();

    userHasAuthenticated(false);
    props.history.push('/');
  }

  return (
    <div className="navbar-right">
      <div className={`dropdown dropdown-profile ${visible ? 'show' : ''}`}>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            setVisible(!visible);
          }}
          className="dropdown-link"
          data-toggle="dropdown"
          data-display="static"
        >
          <div className="avatar avatar-sm">
            <img src={logo} className="rounded-circle" alt="" />
          </div>
        </a>

        <div
          className={`dropdown-menu dropdown-menu-right tx-13 ${
            visible ? 'show' : ''
          }`}
        >
          <div className="avatar avatar-lg mg-b-15">
            <img src={logo} className="rounded-circle" alt="" />
          </div>
          <h6 className="tx-semibold mg-b-5">Katherine Pechon</h6>
          <p className="mg-b-25 tx-12 tx-color-03">Administrator</p>
          <Link to="/help" className="dropdown-item">
            <i data-feather="help-circle" /> Help
          </Link>
          <Link to="/upgrades" className="dropdown-item">
            <i data-feather="edit-3" /> Buy Upgrades
          </Link>
          <Link to="/settings" className="dropdown-item">
            <i data-feather="settings" /> Settings
          </Link>
          <Link to="/profile" className="dropdown-item">
            <i data-feather="settings" /> Profile
          </Link>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item" onClick={handleLogout}>
            <i data-feather="log-out" /> Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(index);
