import React from 'react';

const ConfirmationForm = () => {
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  function validateForm() {
    return email.length > 0 && confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      // setEmail('');
      props.history.push('/go');
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div className="pd-t-20 wd-100p">
        <h4 className="tx-color-01 mg-b-5">Confirmation Page</h4>
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
            <label className="mg-b-0-f">Confirmation Code</label>
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
};

export default withRouter(ConfirmationForm);
