import React from 'react';
import logo from '/loginLogo.png';
import { Link } from 'react-router-dom';
import '..assets/Login.css'; // Import CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} className="logo" alt="logo" />
        <form>
          <div className="form-group">
            <label htmlFor="email" className="label">Email Address</label>
            <input type="email" id="email" className="input" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" className="input" />
          </div>
          <button type="submit" className="btn">Login</button>
          <div className='text-center mt-1'>
            <Link to='/signUp' className="signup-link">Not a user (Sign Up)</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
