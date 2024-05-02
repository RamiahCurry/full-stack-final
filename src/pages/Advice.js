import React from 'react';
import { Link } from 'react-router-dom';
import './Advice.css';  // Ensure you have this CSS file in your components folder

const Advice = () => {
  return (
    <div className="advice-container">
      <h1>Advice for Morehouse Computer Science Students</h1>
      <ul className="advice-list">
        <li>
          <Link to="/advice/freshman"><img src="path_to_freshman_image.jpg" alt="Freshman Year"/>Freshman Year</Link>
        </li>
        <li>
          <Link to="/advice/sophomore"><img src="path_to_sophomore_image.jpg" alt="Sophomore Year"/>Sophomore Year</Link>
        </li>
        <li>
          <Link to="/advice/junior"><img src="path_to_junior_image.jpg" alt="Junior Year"/>Junior Year</Link>
        </li>
        <li>
          <Link to="/advice/senior"><img src="path_to_senior_image.jpg" alt="Senior Year"/>Senior Year</Link>
        </li>
      </ul>
    </div>
  );
};

export default Advice;
