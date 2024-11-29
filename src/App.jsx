import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blogdashboard from './Blogdashboard';
import Posts from './Posts';
import './App.css';  // Importing the external CSS file

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="blog">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Addnew</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Blogdashboard />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
