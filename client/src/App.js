import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Footer from './components/layout/Footer.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Alert from './components/layout/Alert.js';
import Dashboard from './components/dashboard/Dashboard.js';
import CreateProfile from './components/profile-forms/CreateProfile.js';
import EditProfile from './components/profile-forms/EditProfile.js';
import PrivateRoute from './components/routing/PrivateRoute.js';
// Redux
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/auth.js';
import setAuthToken from './utils/setAuthToken.js';
// Style
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard" element={
                <PrivateRoute component={Dashboard} />
              } />
            <Route path="/create-profile" element={
              <PrivateRoute component={CreateProfile} />
            } />
            <Route path="/edit-profile" element={
              <PrivateRoute component={EditProfile} />
            } />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </Provider >
  );
}

export default App;
