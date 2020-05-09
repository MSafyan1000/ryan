/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Header from 'components/Header';

import '../../../THEME/main/assets/css/dashforge.auth.css';

export const QUERY_ORDERS = gql`
  {
    allOrders {
      id
      description
      total
    }
  }
`;

export default function HomePage() {
  // const props = useQuery(QUERY_ORDERS);
  // const { loading, error, data } = props;

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <div>
        <Header />
        {/* navbar */}
        <div className="content content-fixed content-auth">
          <div className="container">
            <div className="media align-items-stretch justify-content-center ht-100p">
              <div className="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                <div className="pd-t-20 wd-100p">
                  <h4 className="tx-color-01 mg-b-5">Create New Account</h4>
                  <p className="tx-color-03 tx-16 mg-b-40">
                    It's free to signup and only takes a minute.
                  </p>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between mg-b-5">
                      <label className="mg-b-0-f">Password</label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group">
                    <label>Firstname</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your firstname"
                    />
                  </div>
                  <div className="form-group">
                    <label>Lastname</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your lastname"
                    />
                  </div>
                  <div className="form-group tx-12">
                    By clicking <strong>Create an account</strong> below, you
                    agree to our terms of service and privacy statement.
                  </div>
                  {/* form-group */}
                  <button className="btn btn-brand-02 btn-block">
                    Create Account
                  </button>
                  <div className="divider-text">or</div>
                  <button className="btn btn-outline-facebook btn-block">
                    Sign Up With Facebook
                  </button>
                  <button className="btn btn-outline-twitter btn-block">
                    Sign Up With Twitter
                  </button>
                  <div className="tx-13 mg-t-20 tx-center">
                    Already have an account?{' '}
                    <a href="page-signin.html">Sign In</a>
                  </div>
                </div>
              </div>
              {/* sign-wrapper */}
              <div className="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                <div className="mx-lg-wd-500 mx-xl-wd-550">
                  <img
                    src="../../assets/img/img16.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="pos-absolute b-0 r-0 tx-12">
                  Social media marketing vector is created by{' '}
                  <a
                    href="https://www.freepik.com/pikisuperstar"
                    target="_blank"
                  >
                    pikisuperstar (freepik.com)
                  </a>
                </div>
              </div>
              {/* media-body */}
            </div>
            {/* media */}
          </div>
          {/* container */}
        </div>
        {/* content */}
        <footer className="footer">
          <div>
            <span>© 2019 DashForge v1.0.0. </span>
            <span>
              Created by <a href="http://themepixels.me">ThemePixels</a>
            </span>
          </div>
          <div>
            <nav className="nav">
              <a
                href="https://themeforest.net/licenses/standard"
                className="nav-link"
              >
                Licenses
              </a>
              <a href="../../change-log.html" className="nav-link">
                Change Log
              </a>
              <a
                href="https://discordapp.com/invite/RYqkVuw"
                className="nav-link"
              >
                Get Help
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.array,
};
