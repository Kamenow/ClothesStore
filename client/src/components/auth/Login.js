import React, { Fragment, useState } from 'react';
import Landing from '../../components/layout/Landing.js'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth.js';
// import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData;

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = async e => {
        e.preventDefault();

        login(email, password);
    }

    // Redirect if logged in

    if (isAuthenticated) {

    }

    return (
        <Fragment>
            <div className="wrapper">
                <div className="formContent">

                    <div className="loginIcon">
                        <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" className="profile" alt="profile" />
                    </div>

                    <form onSubmit={e => onSubmit(e)}>
                        <input type="text" className="login" name="email" onChange={e => onChange(e)} placeholder="email" />
                        <input type="password" className="password" name="password" onChange={e => onChange(e)} placeholder="password" />
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);