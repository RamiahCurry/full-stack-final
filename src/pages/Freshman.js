import React from 'react';
import ClassYearLayout from './ClassYearLayout';

import image1 from './fretwo.jpeg';
import image2 from './fredorm.jpeg';

const Freshman = () => {
  const title = "Freshman";
  const adviceList = [
    { key: 'engage', text: 'Engage Actively in Your Learning: Participate in class, ask questions, and immerse yourself in your subjects.' },
    { key: 'manage', text: 'Manage Your Time Wisely: Balance your studies, social life, and rest by using planners or apps to keep track of your tasks.' },
    { key: 'explore', text: 'Explore Extracurricular Activities: Join clubs, sports teams, or other campus organizations to broaden your horizons and make new friends.' },
    { key: 'build', text: 'Build a Support Network: Connect with classmates, professors, and advisors who can provide support, advice, and guidance throughout your college journey.' }
  ];
  const courses = ["Introduction to Computer Science", "Calculus I", "Physics I"];
  const books = [
    "Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin",
    "Introduction to Algorithms by Thomas H. Cormen"
  ];
  const resources = <div>
                      <a href="https://example.com/guides">Study Guides</a>
                      <a href="https://example.com/tools">Development Tools</a>
                    </div>;

  return (
    <div style={{ position: 'relative' }}>
      <ClassYearLayout 
        title={title}
        initialAdvice={adviceList}
        adviceList={adviceList}
        courses={courses} 
        books={books} 
        resources={resources} 
      />
      <img src={image1} alt="Image 1" style={{ position: 'absolute', bottom: 0, left: 100, width: '300px', height: '300px' }} />
      <img src={image2} alt="Image 2" style={{ position: 'absolute', bottom: 0, right: 100, width: '300px', height: '300px' }} />
    </div>
  );
};

export default Freshman;
