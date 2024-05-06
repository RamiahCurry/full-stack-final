import React, { useState } from 'react';
import { ReactSession } from 'react-client-session';
import axios from 'axios';

const Logout = () => {
  // Retrieve the email from the session
  const userEmail = ReactSession.get("Email");

  // State variables for form inputs
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to backend to change password
      const response = await axios.put(`/change-password/${userEmail}`, { phoneNumber, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error changing password:', error.message);
      setMessage('Error changing password. Please try again.');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Set the email to blank in the session storage
    ReactSession.set("Email", "");
  };

  return (
    <div>
      {/* Display the email */}
      <p>User Email: {userEmail}</p>
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
      
      {/* Form for changing password */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Change Password</button>
      </form>

      {/* Display success or error message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Logout;
