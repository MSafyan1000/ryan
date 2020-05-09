/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import React from 'react';
import '../../../THEME/main/assets/css/dashforge.auth.css';

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
        {/* navbar */}
        <div className="content content-fixed content-auth">
          <div className="container">
            <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
              <div className="media-body align-items-center d-none d-lg-flex">
                <div className="mx-wd-600">
                  <img
                    src="../../assets/img/img15.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="pos-absolute b-0 l-0 tx-12 tx-center">
                  Workspace design vector is created by{' '}
                  <a
                    href="https://www.freepik.com/pikisuperstar"
                    target="_blank"
                  >
                    pikisuperstar (freepik.com)
                  </a>
                </div>
              </div>
              {/* media-body */}
              <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                <div className="wd-100p">
                  <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                  <p className="tx-color-03 tx-16 mg-b-40">
                    Welcome back! Please signin to continue.
                  </p>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="yourname@yourmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between mg-b-5">
                      <label className="mg-b-0-f">Password</label>
                      <a href="#" className="tx-13">
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button className="btn btn-brand-02 btn-block">
                    Sign In
                  </button>
                  <div className="divider-text">or</div>
                  <button className="btn btn-outline-facebook btn-block">
                    Sign In With Facebook
                  </button>
                  <button className="btn btn-outline-twitter btn-block">
                    Sign In With Twitter
                  </button>
                  <div className="tx-13 mg-t-20 tx-center">
                    Dont have an account?
                    <a href="page-signup.html">Create an Account</a>
                  </div>
                </div>
              </div>
              {/* sign-wrapper */}
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
