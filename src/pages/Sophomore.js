import React from 'react';
import ClassYearLayout from './ClassYearLayout';

const Sophomore = () => {
  const title = "Sophomore";
  const adviceList = [
    { key: 'academic-focus', text: 'Deepen Your Academic Focus: Start to explore specialized courses that align with your career interests. Engage more deeply with your major’s core subjects.' },
    { key: 'internships', text: 'Seek Internships and Practical Experience: Practical experiences like internships are invaluable. They enhance your learning and provide insights into professional environments.' },
    { key: 'expand-network', text: 'Expand Your Network: Attend networking events, connect with alumni, and utilize platforms like LinkedIn to meet professionals in your field.' },
    { key: 'long-term-goals', text: 'Start Considering Your Long-Term Goals: Whether it’s graduate school or jumping straight into your career, now is the time to start planning for the future.' }
  ];
  const courses = ["Advanced Programming", "Data Structures", "System Analysis"];
  const books = [
    "The Pragmatic Programmer by Andrew Hunt and David Thomas",
    "Design Patterns: Elements of Reusable Object-Oriented Software by Erich Gamma"
  ];
  const resources = <div>
                      <a href="https://example.com/career">Career Services</a>
                      <a href="https://example.com/internships">Internship Opportunities</a>
                    </div>;

  return (
    <ClassYearLayout 
      title={title}
      adviceList={adviceList}
      courses={courses} 
      books={books} 
      resources={resources} 
    />
  );
};

export default Sophomore;
