// Signup.js

import React from 'react';
import logo from '/loginLogo.png';
import { Link } from 'react-router-dom';
import '../assets/SignUp.css'; // Import CSS file

function Signup() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="signup-container">
        <img src={logo} className="logo" alt="logo" />
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <div className='text-center mt-1 opacity-50 hover:opacity-100'>
            <Link to='/login'>Already a user (Login)</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
