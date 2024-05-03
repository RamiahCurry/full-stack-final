import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeVideo from './YoutubeVideo';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ color: 'maroon' }}>Welcome, Future Morehouse Students!</h1>
      <p>Here you can find relevant advice for your journey as a Morehouse Computer Science student.</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <Link to="/basic-form">Go to Sign Up Sheet</Link>
        </div>
        <div style={{ marginRight: '10px' }}>
          <Link to="/advice">Advice + Current Events</Link>
        </div>
        <div>
          <Link to="/extracurriculars">Extracurriculars</Link>
        </div>
      </div>
      <hr />
      <h2>Morehouse Virtual Tour</h2>
      <YouTubeVideo videoId="7JcI3zmIM6A" />
    </div>
  );
};

export default Home;

