import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert.js';
import { register } from '../../actions/auth.js';
// import axios from 'axios';
import PropTypes from 'prop-types'

const Register = ({ setAlert, register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });

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

            // const newUser = {
            //     name,
            //     email,
            //     password,
            // };

            // try {
            //     const config = {
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     };

            //     const body = JSON.stringify(newUser);

            //     console.log(body);
            //     const res = await axios.post('http://localhost:5005/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err);
            // }
            register({ name, email, password })
        }
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
};

export default connect(null, { setAlert, register })(Register);