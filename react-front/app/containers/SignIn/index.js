/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import Footer from 'components/Footer';
import React, { useState, useEffect } from 'react';
import '../../../THEME/main/assets/css/dashforge.auth.css';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useAppContext } from 'libs/contextLib';
import { Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function HomePage(props) {
  const { userHasAuthenticated } = useAppContext();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signingUp, setSigningUp] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function snackbarClose(e) {
    setSnackbarOpen(false);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);

      setSnackbarOpen(true);
      setSnackbarMsg('You are Logged In');

      props.history.push('/go');
    } catch (e) {
      if (e.message && e.name === 'UserNotConfirmedException') {
        // setSigningUp(true);
        console.table(['signIn', e]);
      }
      setSnackbarOpen(true);
      setSnackbarMsg(e.message);
    }
  }

  return (
    <>
      <div>
        <Header />
        {console.table('snackbarOPen', snackbarOpen, 'msg', snackbarMsg)}
        {/* navbar */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={snackbarClose}
          message={<span id="message-id">{snackbarMsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={snackbarClose}
            >
              X
            </IconButton>,
          ]}
        />
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
                  {!signingUp ? (
                    <>
                      {' '}
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
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <div className="d-flex justify-content-between mg-b-5">
                          <label className="mg-b-0-f">Password</label>

                          <Link to="/forgot" className="tx-13">
                            Forgot password?
                          </Link>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Enter your password"
                          onChange={e => setPassword(e.target.value)}
                          type="password"
                        />
                      </div>
                      <button
                        className="btn btn-brand-02 btn-block"
                        disabled={!validateForm()}
                        onClick={handleSubmit}
                      >
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
                        Dont have an account?&nbsp;
                        <Link to="/sign_up">Create an Account</Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <form onSubmit={handleSubmit} data-testid="form">
                        <div className="pd-t-20 wd-100p">
                          <h4 className="tx-color-01 mg-b-5">
                            Confirmation Page
                          </h4>
                          <div className="form-group">
                            <label>Email address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter your email address"
                              data-testid="inputEmail"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <div className="d-flex justify-content-between mg-b-5">
                              <label className="mg-b-0-f">
                                Confirmation Code
                              </label>
                            </div>
                            <input
                              className="form-control"
                              placeholder="Enter your Code send via Email"
                              data-testid="inputPassword"
                              onChange={e =>
                                setConfirmationCode(e.target.value)
                              }
                              type="password"
                            />
                          </div>

                          <div className="form-group tx-12">
                            By clicking <strong>Create an account</strong>{' '}
                            below, you agree to our terms of service and privacy
                            statement.
                          </div>
                          {/* form-group */}
                          <button
                            className="btn btn-brand-02 btn-block"
                            data-testid="submitButton"
                            onClick={handleSubmit}
                          >
                            Confirm
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
                            <Link to="/sign_in">Sign In</Link>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
              {/* sign-wrapper */}
            </div>
            {/* media */}
          </div>
          {/* container */}
        </div>
        {/* content */}
        <Footer />
      </div>
    </>
  );
}

export default withRouter(HomePage);
