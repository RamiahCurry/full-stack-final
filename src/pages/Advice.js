import React from 'react';
import { Link } from 'react-router-dom';
import './Advice.css'; // Ensure the CSS is properly imported

const Advice = () => {
  return (
    <div className="advice-background">
      <div className="advice-container">
        <h1>Advice for Morehouse Computer Science Students</h1>
        <div className="year-links">
          <Link to="/freshman"><img src="/images/fresh.jpeg" alt="Freshman Year" /></Link>
          <Link to="/sophomore"><img src="/images/sophomore.jpeg" alt="Sophomore Year" /></Link>
          <Link to="/junior"><img src="/images/Junior.jpeg" alt="Junior Year" /></Link>
          <Link to="/senior"><img src="/images/senior.png" alt="Senior Year" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Advice;

