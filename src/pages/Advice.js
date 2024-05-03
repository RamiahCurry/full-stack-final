import React from 'react';
import { Link } from 'react-router-dom';
import './Advice.css'; // Ensure the CSS is properly imported
import freshmanImage from './fresh.jpeg';
import sophImage from './sophomore.jpeg';
import junImage from './Juniors.jpeg';
import senImage from './senior.png';

const Advice = () => {
  return (
    <div className="advice-background">
      <div className="advice-container">
        <h1>Advice for Morehouse Computer Science Students</h1>
        <div className="year-links">
          <Link to="/freshman">
          <img src={freshmanImage} alt="Freshman Year" />
          </Link>

          <Link to="/sophomore">
          <img src={sophImage} alt="Sophomore Year" />
          </Link>
          <Link to="/junior">
          <img src={junImage} alt="Junior Year" />
          </Link>
          <Link to="/senior">
          <img src={senImage} alt="Senior Year" />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Advice;

