import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth.js';

const Navbar = ({
  auth: { isAuthenticated, loading },
  profile: { profile },
  logout,
}) => {
  const authLinks = (
    <Fragment>
      <li>
        <Link to='#!' onClick={logout}>
          Logout
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/create-post'>Create Post</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <div className='icon'>
        <h1 className='logo'>
          <Link
            to='/'
            style={{
              textDecoration: 'none',
              color: 'brown',
            }}
          >
            Yavor Store
          </Link>
        </h1>
      </div>

      <div className='menu'>
        <ul>
          <li>
            <Link to='/posts'>Products</Link>
          </li>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout })(Navbar);
