import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BasicForm from './pages/BasicForm';
import Advice from './pages/Advice';
import './App.css';
import FreshmanAdvice from './components/FreshmanAdvice';
import SophomoreAdvice from './components/SophomoreAdvice';
import JuniorAdvice from './components/JuniorAdvice';
import SeniorAdvice from './components/SeniorAdvice';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/basic-form" element={<BasicForm/>} />
          <Route path="/advice" element={<Advice/>} />
          <Route path="/advice/freshman" element={<FreshmanAdvice />} />
          <Route path="/advice/sophomore" element={<SophomoreAdvice />} />
          <Route path="/advice/junior" element={<JuniorAdvice />} />st
          <Route path="/advice/senior" element={<SeniorAdvice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

