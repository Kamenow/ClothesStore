import React, { Fragment, useState } from 'react';
// import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    })

    const { name, email } = formData;

    console.log(name);
    console.log(email);

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = async e => {
        e.preventDefault();

        console.log('success');
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
                        <input type="text" className="password" name="password" onChange={e => onChange(e)} placeholder="password" />
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;