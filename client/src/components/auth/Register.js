import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAlert } from '../../actions/alert.js'

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    })

    const { name, email, password, rePassword } = formData;

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = async e => {
        e.preventDefault();

        if (password !== rePassword) {
            props.setAlert('Passwords do not match', 'danger');
        } else {
            console.log('Success')

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

            //     // "proxy": "http://localhost:3000"
            //     // axios.post('http://localhost:5000/api/users', body)
            //     // .then(res => {
            //     //     console.log(res);
            //     // })
            //     // .catch(err => {
            //     //     console.log(err);
            //     // });

            //     console.log(body);
            //     const res = await axios.post('http://localhost:5000/api/users', body, config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err);
            // }
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
                        <input type="text" className="login" name="name" value={name} onChange={e => onChange(e)} required placeholder="name" />
                        <input type="text" className="login" name="email" value={email} onChange={e => onChange(e)} required placeholder="email" />
                        <input type="password" className="login" name="password" value={password} onChange={e => onChange(e)} required placeholder="password" />
                        <input type="password" className="login" name="rePassword" value={rePassword} onChange={e => onChange(e)} required placeholder="repeat password" />
                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null, { setAlert })(Register);