import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactSession }  from 'react-client-session';
import './Login.css'; // Ensure the CSS is imported to style the components
import axios from 'axios';

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (evt) => {
    const password = evt.target.value.trim();
    setPasswordError('');
  };
  
  const handleEmailChange = (evt) => {
    const email = evt.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Please enter valid email');
  };

  const onFormSubmit = async(evt) => {
    evt.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    // Validation
    if (!password || !email) {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
        // Send a POST request to login
        console.log('Sending login request with email:', email, 'password:', password);
        const response = await axios.post('http://localhost:3001/login', {
          email,
          password
        });
        
        console.log('Login response:', response.data);

        ReactSession.set("Email", email);
        // Redirect to the home page if login is successful
        navigate('/home');
      } catch (error) {
        console.error('Error logging in:', error.message);
        // Display error message to the user
        alert('Invalid email or password.');
      }

    // Clear input fields after submission
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Morehouse College</h1> {/* Title */}
        <p className="sign-in">Sign In. Log in to your account!</p> {/* Subtitle */}
        <form onSubmit={onFormSubmit}>
          <input
            placeholder='Email'
            ref={emailRef}
            onChange={handleEmailChange}
          />
          <span>{emailError}</span>

          <input
            placeholder='Password'
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
          <span>{passwordError}</span>

          <input type='submit' value='Sign In' />
        </form>
        <Link to="/signup">Go to Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
