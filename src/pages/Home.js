// Client side
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import YouTubeVideo from './YoutubeVideo';
import axios from 'axios';

const Home = () => {
  const [userClassification, setUserClassification] = useState('');

  useEffect(() => {
    // Fetch user classification from the server
    const fetchUserClassification = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/classification');
        setUserClassification(response.data.classification);
      } catch (error) {
        console.error('Error fetching user classification:', error.message);
      }
    };

    fetchUserClassification();
  }, []);

  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto', backgroundColor: '#f8f8f8' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        {/* Logout link */}
        <Link to="/logout" style={{ textDecoration: 'none', color: 'maroon' }}>Logout</Link>
      </div>
      <h1 style={{ color: 'maroon' }}>Welcome, Morehouse Students!</h1>
      <p>Here you can find relevant advice for your journey as a Morehouse Computer Science student.</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div>
          <Link to="/advice">Advice + Current Events ||| </Link>
        </div>
        <div>
          <Link to="/extracurriculars"> Extracurriculars</Link>
        </div>
      </div>
      <hr />
      <h2>Morehouse Virtual Tour</h2>
      <YouTubeVideo videoId="7JcI3zmIM6A" />
      {userClassification === 'Freshman' && (
        <Link to="/freshman">Freshmen Go Here!</Link>
      )}
      {userClassification === 'Sophomore' && (
        <Link to="/sophomore">Sophomores Go Here!</Link>
      )}
      {userClassification === 'Junior' && (
        <Link to="/junior">Juniors Go Here!</Link>
      )}
      {userClassification === 'Senior' && (
        <Link to="/senior">Seniors Go Here!</Link>
      )}
    </div>
  );
};

export default Home;

