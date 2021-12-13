import axios from 'axios';
import { setAlert } from './alert.js';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types.js';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
    const newUser = {
        name,
        email,
        password,
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(newUser);

    try {
        const res = await axios.post('http://localhost:8000/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
}