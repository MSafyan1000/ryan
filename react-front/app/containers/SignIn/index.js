/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import '../../../THEME/main/assets/css/dashforge.auth.css';
import { Link, withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';

function HomePage(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      alert('Logged in');
    } catch (e) {
      console.log(e);
      // alert(e.message);
    }
  }

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
                      type="password"
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
