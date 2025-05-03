import "./Auth.css";

const AuthLogin = () => {
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
        <div>
          <button className="button btn-primary btn-login cursor">Login</button>
        </div>
        <div>
          <button className="cta">Login with Test Credentials</button>
        </div>
      </form>
    </div>
  );
};
export default AuthLogin;
