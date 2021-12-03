import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/register" element={<Landing />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
