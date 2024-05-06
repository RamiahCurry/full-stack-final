import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import Home from './pages/Home';
import BasicForm from './pages/BasicForm';
import Advice from './pages/Advice';
import Login from './pages/login';  
import SignIn from './pages/signin';  
import Logout from './pages/logout';  
import Freshman from './pages/Freshman';
import Sophomore from './pages/Sophomore';
import Junior from './pages/Junior';
import Senior from './pages/Senoir';
import Extracurriculars from './pages/Extracurriculars';
import './App.css';

function App() {
  ReactSession.setStoreType("localStorage");

  // Function to check if user is authenticated (email exists)
  const isAuthenticated = () => {
    const userEmail = ReactSession.get("Email");
    return !!userEmail; // Convert to boolean
  };
// Function to render a private route
const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" replace />;
};

return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />  // Set Login as the default route
        <Route path="/signup" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/logout" element={<PrivateRoute element={<Logout />} />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/basic-form" element={<PrivateRoute element={<BasicForm />} />} />
        <Route path="/advice" element={<PrivateRoute element={<Advice />} />} />
        <Route path="/freshman" element={<PrivateRoute element={<Freshman />} />} />
        <Route path="/sophomore" element={<PrivateRoute element={<Sophomore />} />} />
        <Route path="/junior" element={<PrivateRoute element={<Junior />} />} />
        <Route path="/senior" element={<PrivateRoute element={<Senior />} />} />
        <Route path="/extracurriculars" element={<PrivateRoute element={<Extracurriculars />} />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;