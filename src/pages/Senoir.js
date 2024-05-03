import React from 'react';
import ClassYearLayout from './ClassYearLayout';

const Senior = () => {
  const title = "Senior";
  const adviceList = [
    { key: 'resume', text: 'Finalize Your Resume and Online Presence: Make sure your resume is comprehensive and professionally represents your skills and experiences. Update your LinkedIn and other professional profiles.' },
    { key: 'apply-early', text: 'Apply for Jobs or Graduate Programs Early: Begin your job or graduate school applications early to meet deadlines and ensure you have time to prepare thoroughly.' },
    { key: 'networking', text: 'Capitalize on Networking Opportunities: Engage in extensive networking to connect with potential employers and professionals in your field.' },
    { key: 'capstone', text: 'Complete a Capstone Project or Thesis: Develop a significant project or thesis that highlights your skills and learning over your academic career.' }
  ];
  const courses = ["Senior Design Project", "Advanced Database Systems", "Advanced Software Engineering"];
  const books = [
    "The Lean Startup by Eric Ries",
    "Cracking the Coding Interview by Gayle Laakmann McDowell"
  ];
  const resources = <div>
                      <a href="https://example.com/jobs">Job Listings</a>
                      <a href="https://example.com/alumni">Alumni Network</a>
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

export default Senior;
