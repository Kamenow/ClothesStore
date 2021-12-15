import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert.js';
import { register } from '../../actions/auth.js';
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const navigate = useNavigate();

    const { name, email, password, rePassword } = formData;

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = async e => {
        e.preventDefault();

        if (password !== rePassword) {
            setAlert('Passwords do not match', 'danger');
        } else {
            setAlert('Success');
            register({ name, email, password })
        }
    };

    if (isAuthenticated) {
        navigate('/dashboard')
    }

    return (
        <Fragment>
            <div className="wrapper">
                <div className="formContent">

                    <div className="loginIcon">
                        <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" className="profile" alt="profile" />
                    </div>

                    <form onSubmit={e => onSubmit(e)}>
                        <input type="text" className="login" name="name" value={name} onChange={e => onChange(e)} placeholder="name" />
                        <input type="text" className="login" name="email" value={email} onChange={e => onChange(e)} placeholder="email" />
                        <input type="password" className="login" name="password" value={password} onChange={e => onChange(e)} placeholder="password" />
                        <input type="password" className="login" name="rePassword" value={rePassword} onChange={e => onChange(e)} placeholder="repeat password" />
                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);