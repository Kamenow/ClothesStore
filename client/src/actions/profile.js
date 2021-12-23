import axios from 'axios';
import { setAlert } from './alert.js';

import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    CLEAR_PROFILE
} from './types.js';

// Get current users profile 
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:9000/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get all profiles 
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE })

    try {
        const res = await axios.get('http://localhost:9000/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get profile by ID
export const getProfileById = (userId) => async dispatch => {
    dispatch({ type: CLEAR_PROFILE })

    try {
        const res = await axios.get(`http://localhost:9000/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Create or update profile
export const createProfile = (formData, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('http://localhost:9000/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

        // if (!edit) {
        //     history.push('/dashboard')
        // }
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};