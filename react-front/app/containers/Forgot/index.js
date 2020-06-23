/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import Header from 'components/Header';
import Footer from 'components/Footer';
import React, { useState } from 'react';
import '../../../THEME/main/assets/css/dashforge.auth.css';
import { Link } from 'react-router-dom';
import imgBg from '../../images/img18.png';
import { Auth } from 'aws-amplify';

export default function HomePage() {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  function validateCodeForm() {
    return email.length > 0;
  }

  function validateResetForm() {
    return (
      confirmationCode.length > 0 &&
      newPassword.length > 0 &&
      newPassword === confirmPassword
    );
  }

  async function handleSendCodeClick(event) {
    event.preventDefault();

    setIsSendingCode(true);

    try {
      await Auth.forgotPassword(email);
      setCodeSent(true);
    } catch (error) {
      console.log(error);
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await Auth.forgotPasswordSubmit(email, confirmationCode, newPassword);
      setConfirmed(true);
    } catch (error) {
      console.log(error);
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
      <form onSubmit={handleSendCodeClick}>
        <div className="wd-80p wd-sm-300 mg-b-15">
          <img src={imgBg} className="img-fluid" alt="" />
        </div>
        <h4 className="tx-20 tx-sm-24">Reset your password</h4>
        <p className="tx-color-03 mg-b-30 tx-center">
          Enter your username or email address and we will send you a link to
          reset your password.
        </p>
        <div className="wd-100p d-flex flex-column flex-sm-row mg-b-40">
          <input
            type="text"
            className="form-control wd-sm-250 flex-fill"
            placeholder="Enter username or email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className="btn btn-brand-02 mg-sm-l-10 mg-t-10 mg-sm-t-0"
            isLoading={isSendingCode}
            disabled={!validateCodeForm()}
          >
            Reset Password
          </button>
        </div>
      </form>
    );
  }
  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <div className="pd-t-20 wd-100p">
          <h4 className="tx-color-01 mg-b-5">Reset Password</h4>
          <div className="form-group">
            <label>Confirmation Code</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Confirmation Code"
              data-testid="inputConfirmationCode"
              value={confirmationCode}
              onChange={e => setConfirmationCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between mg-b-5">
              <label className="mg-b-0-f">New Passord</label>
            </div>
            <input
              className="form-control"
              placeholder="Enter your New Password"
              data-testid="inputPassword"
              onChange={e => setNewPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between mg-b-5">
              <label className="mg-b-0-f">Confirm Passord</label>
            </div>
            <input
              className="form-control"
              placeholder="Confirm Passwrod"
              data-testid="inputConfirmPassword"
              onChange={e => setConfirmPassword(e.target.value)}
              type="password"
            />
          </div>

          <div className="form-group tx-12">
            By clicking <strong>Create an account</strong> below, you agree to
            our terms of service and privacy statement.
          </div>
          {/* form-group */}
          <button
            className="btn btn-brand-02 btn-block"
            data-testid="submitButton"
            isLoading={isConfirming}
            disabled={!validateResetForm()}
            // onClick={handleSubmit}
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
            Already have an account? <Link to="/sign_in">Sign In</Link>
          </div>
        </div>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <Link to="/sign_in">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>
      <Header />
      {/* {console.table(
        'code',
        confirmationCode,
        'password',
        newPassword,
        'confirmPasswrod',
        confirmPassword,
        'email',
        email,
        'isConfirming',
        isConfirming,
        'isSendingCode',
        isSendingCode,
      )} */}
      <div className="content content-fixed content-auth-alt">
        <div className="container d-flex justify-content-center ht-100p">
          <div className="mx-wd-300 wd-sm-450 ht-100p d-flex flex-column align-items-center justify-content-center">
            <span className="tx-12 tx-color-03">
              Key business concept vector is created by{' '}
              <a href="#">freepik (freepik.com)</a>
            </span>
            {!codeSent
              ? renderRequestCodeForm()
              : !confirmed
              ? renderConfirmationForm()
              : renderSuccessMessage()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
