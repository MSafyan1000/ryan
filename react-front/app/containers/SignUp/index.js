/* eslint-disable no-console */
/* eslint-disable no-alert */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React, { useState, useEffect } from 'react';
import '../../../THEME/main/assets/css/dashforge.auth.css';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';

// import SignUpForm from './signUpForm';

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {}, [signedUp]);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!signedUp) {
      try {
        await Auth.signUp(email, password);
        setSignedUp(true);
        props.history.push('/sign_up');
      } catch (e) {
        console.log(e);
        if (e.message && e.name === 'UserNotConfirmedException') {
          setSignedUp(true);
          console.log('from signedUp error');
        }
        alert(e.message);
      }
    } else {
      try {
        await Auth.confirmSignUp(email, confirmationCode);
        console.log('auth confirmCode');
        props.history.push('/profile');
      } catch (e) {
        console.log(e);
        alert(e.message);
      }
    }
  }
  return (
    <>
      <div>
        <Header />
        {/* navbar */}
        {/* {console.table('code', confirmationCode, 'email', email, password)} */}
        <div className="content content-fixed content-auth">
          <div className="container">
            <div className="media align-items-stretch justify-content-center ht-100p">
              <div className="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                {!signedUp ? (
                  <form onSubmit={handleSubmit} data-testid="form">
                    <div className="pd-t-20 wd-100p">
                      <h4 className="tx-color-01 mg-b-5">Create New Account</h4>
                      <p className="tx-color-03 tx-16 mg-b-40">
                        Its free to signup and only takes a minute.
                      </p>
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
                          <label className="mg-b-0-f">Password</label>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Enter your password"
                          data-testid="inputPassword"
                          onChange={e => setPassword(e.target.value)}
                          type="password"
                        />
                      </div>
                      <div className="form-group">
                        <label>Firstname</label>
                        <input
                          type="text"
                          className="form-control"
                          data-testid="inputFirstName"
                          placeholder="Enter your firstname"
                        />
                      </div>
                      <div className="form-group">
                        <label>Lastname</label>
                        <input
                          type="text"
                          className="form-control"
                          data-testid="inputLastName"
                          placeholder="Enter your lastname"
                        />
                      </div>
                      <div className="form-group tx-12">
                        By clicking <strong>Create an account</strong> below,
                        you agree to our terms of service and privacy statement.
                      </div>
                      {/* form-group */}
                      <button
                        className="btn btn-brand-02 btn-block"
                        data-testid="submitButton"
                        disabled={!validateForm()}
                        onClick={handleSubmit}
                      >
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
                        <Link to="/sign_in">Sign In</Link>
                      </div>
                    </div>
                  </form>
                ) : (
                  <>
                    {' '}
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
                            onChange={e => setConfirmationCode(e.target.value)}
                            type="password"
                          />
                        </div>

                        <div className="form-group tx-12">
                          By clicking <strong>Create an account</strong> below,
                          you agree to our terms of service and privacy
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
        <Footer />
      </div>
    </>
  );
}

export default withRouter(HomePage);
// export const HomePageTest = HomePage;
