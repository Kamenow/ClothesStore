import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth.js';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <Fragment>
            <li><Link to="#!" onClick={logout}>Logout</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </Fragment>
    );

    return (
        <div>
            <div className="navbar">
                <div className="icon">
                    <h1 className="logo" >
                        <Link to="/"
                            style={{
                                textDecoration: 'none',
                                color: 'brown'
                            }}>Yavor Store</Link>
                    </h1>
                </div>

                <div className="menu">
                    <ul>
                        <li><Link to="#">Products</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
                    </ul>
                </div>
            </div>
        </div>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout })
    (Navbar);
