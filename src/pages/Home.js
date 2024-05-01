import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeVideo from './YouTubeVideo';
import './Home.css';


const Home = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden'
    }}>
      <YouTubeVideo videoId="7JcI3zmIM6A" />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1>Welcome, Future Morehouse Students!</h1>
        <p>Sign in to explore courses, advice, and more!</p>
        <Link to="/signin" style={{
          background: 'maroon',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>Sign In</Link>
      </div>
    </div>
  );
};

export default Home;

