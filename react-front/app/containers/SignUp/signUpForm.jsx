import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signUp(email, password);
      setEmail('');
      // props.history.push('/sign_in');
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }

  return (
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
          By clicking <strong>Create an account</strong> below, you agree to our
          terms of service and privacy statement.
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
          Already have an account? <Link to="/sign_in">Sign In</Link>
        </div>
      </div>
    </form>
  );
};

export const handleSubmit = handleSubmit;
export default withRouter(SignUpForm);
