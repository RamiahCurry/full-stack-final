import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/Home';
import BasicForm from './pages/BasicForm';
import Advice from './pages/Advice';
import Login from './pages/login';  
import SignIn from './pages/signin';  
import Freshman from './pages/Freshman';
import Sophomore from './pages/Sophomore';
import Junior from './pages/Junior';
import Senior from './pages/Senoir';
import Extracurriculars from './pages/Extracurriculars';
import './App.css';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />  // Set Login as the default route
          <Route path="/signup" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/freshman" element={<Freshman />} />
          <Route path="/sophomore" element={<Sophomore />} />
          <Route path="/junior" element={<Junior />} />
          <Route path="/senior" element={<Senior />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;