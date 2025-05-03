import "./Auth.css";

const AuthSignUp = () => {
  return (
    <div>
      <form className="auth-container">
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            type="number"
            required
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>
          </label>
          <input
            className="auth-input"
            placeholder="Confirm Password"
            type="password"
            required
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AuthSignUp;
