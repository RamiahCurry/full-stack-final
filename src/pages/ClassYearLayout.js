import React from 'react';
import './ClassYearLayout.css';

const ClassYearLayout = ({ title, adviceList, courses, books, resources }) => {
  return (
    <div className="year-layout">
      <h1 className="page-title">{title} Year Advice</h1>
      <div className="advice-section">
        {adviceList.map(advice => (
          <div key={advice.key} className="advice-item">
            <p>{advice.text}</p>
          </div>
        ))}
      </div>
      <div className="courses-books-section">
        <div className="courses-section">
          <h2>Recommended Courses</h2>
          <ul>{courses.map(course => <li key={course}>{course}</li>)}</ul>
        </div>
        <div className="books-section">
          <h2>Books to Read</h2>
          <ul>{books.map(book => <li key={book}>{book}</li>)}</ul>
        </div>
      </div>
      <div className="resources-section">
        <h2>Additional Resources</h2>
        {resources}
      </div>
    </div>
  );
};

export default ClassYearLayout;
