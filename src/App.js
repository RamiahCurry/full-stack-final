import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BasicForm from './pages/BasicForm';
import Advice from './pages/Advice';
import Login from './pages/login';  
import './App.css';
import Freshman from './pages/Freshman';
import Sophomore from './pages/Sophomore';
import Junior from './pages/Junior';
import Senior from './pages/Senoir';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />  // Set Login as the default route
          <Route path="/home" element={<Home />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/freshman" element={<Freshman />} />
          <Route path="/sophomore" element={<Sophomore />} />
          <Route path="/junior" element={<Junior />} />
          <Route path="/senior" element={<Senior />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


