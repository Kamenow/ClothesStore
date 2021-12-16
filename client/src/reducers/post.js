import {
    GET_POSTS,
    POST_ERROR
} from '../actions/types.js';

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        default:
            return state
    }
}