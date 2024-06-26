import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'; // Ensure the CSS is imported to style the components
import axios from 'axios';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const classificationRef = useRef(null);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
  const handlePasswordChange = (evt) => {
    const password = evt.target.value.trim();
    setPasswordError('');
  };
  
  const handleEmailChange = (evt) => {
    const email = evt.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Please enter valid email');
  };

  const handlePhoneChange = (evt) => {
    const phone = evt.target.value.trim();
    const phoneRegex = /^\d{10}$/;
    setPhoneError(phoneRegex.test(phone) ? '' : 'Please enter valid phone number');
  };

  const onFormSubmit = async(evt) => {
    evt.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const number = phoneRef.current.value.trim();
    const classification = classificationRef.current.value;

    // Validation
    if (!password || !email || !number || !classification) {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', {
        email,
        password,
        phoneNumber: number,
        classification
      });
      navigate('/signin'); // Adjust the route as necessary
      
      console.log(response.data); // Optionally handle response data
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }

    // Clear input fields after submission
    emailRef.current.value = '';
    passwordRef.current.value = '';
    phoneRef.current.value = '';
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Morehouse College</h1> {/* Title */}
        <p className="sign-in">Sign Up. Create an account!</p> {/* Subtitle */}
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

          <input
            placeholder='Phone Number'
            ref={phoneRef}
            onChange={handlePhoneChange}
          />
          <span>{phoneError}</span>

          <select ref={classificationRef}>
            <option value="">Select Classification</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>

          <input type='submit' />
        </form>
        <Link to="/signin">Go to Sign In</Link>
      </div>
    </div>
  );
};

export default Login;
