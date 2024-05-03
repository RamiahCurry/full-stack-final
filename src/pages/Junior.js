import React from 'react';
import ClassYearLayout from './ClassYearLayout';

const Junior = () => {
  const title = "Junior";
  const adviceList = [
    { key: 'leadership', text: 'Undertake Leadership Roles: Engage in leadership positions in various clubs or organizations to build skills and enhance your resume.' },
    { key: 'advanced-internships', text: 'Pursue Advanced Internships or Co-op Opportunities: Seek internships or co-op roles that offer significant responsibility and advanced professional experience.' },
    { key: 'prepare-grad-school', text: 'Prepare for Graduate School: Start your preparation for graduate school applications, from exams to essays.' },
    { key: 'deepen-connections', text: 'Deepen Academic and Professional Connections: Strengthen relationships with professors and industry professionals for future opportunities and mentorships.' }
  ];
  const courses = ["Machine Learning", "Full Stack Development", "Database Systems"];
  const books = [
    "Algorithms to Live By by Brian Christian and Tom Griffiths",
    "The Mythical Man-Month by Frederick P. Brooks Jr."
  ];
  const resources = <div>
                      <a href="https://example.com/research">Research Opportunities</a>
                      <a href="https://example.com/conferences">Upcoming Conferences</a>
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

export default Junior;
