import axios from 'axios';
import { setAlert } from './alert.js';
import {
    ADD_POST,
    DELETE_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES
} from './types.js';

// Get posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Add like
export const addLike = (postId) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:8000/api/posts/like/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Remove like
export const removeLike = (postId) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:8000/api/posts/unlike/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Delete like
export const deletePost = (postId) => async dispatch => {
    try {
        await axios.delete(`http://localhost:8000/api/posts/${postId}`);

        dispatch({
            type: DELETE_POST,
            payload: postId
        });

        dispatch(setAlert('Post Removed', 'success'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Add post like
export const addPost = (title, price, bio, image) => async dispatch => {
    const userInfo = {
        title,
        price,
        bio,
        image,
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(userInfo);

    try {
        const res = await axios.post(`http://localhost:8000/api/posts/`, body, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });

        dispatch(setAlert('Post Created', 'success'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}