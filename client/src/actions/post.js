import axios from 'axios';
import { setAlert } from './alert.js';
import {
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