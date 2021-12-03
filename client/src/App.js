import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import './App.css';
import Login from './components/layout/Login.js';
import Footer from './components/layout/Footer.js';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
