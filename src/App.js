import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BasicForm from './pages/BasicForm';
import Advice from './pages/Advice';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/basic-form" element={<BasicForm/>} />
          <Route path="/advice" element={<Advice/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

