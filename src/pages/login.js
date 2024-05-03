import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure the CSS is imported to style the components

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Login logic here
    console.log('Login attempted with:', username, password);
    navigate('/home'); // Adjust the route as necessary
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Morehouse College</h1> {/* Title */}
        <p className="sign-in">Sign in</p> {/* Subtitle */}
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
