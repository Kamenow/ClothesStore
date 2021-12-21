import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post.js';
import Posts from './Posts.js';

const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, user, title, name, image, price, bio, likes, comments, date } }) => {

    return (
        <Fragment>
            <div className="card" >
                <Link to={`/post/${_id}`}>
                    <a><img src={image} alt="Clothing Image" /></a>
                    <h1>From: {name}</h1>
                    <h1>{title}</h1>
                    <p className="price" >{price}$</p >
                    <p>{bio}</p>
                </Link>
                <button onClick={e => removeLike(_id)}>Unlike</button>
                <button onClick={e => addLike(_id)}>Like</button>
                <button>comment</button>
                {!auth.loading && user == auth.user._id && (
                    <button onClick={e => deletePost(_id)}>delete</button>
                )}
                <p>Likes: {likes.length} Comments: {comments.length}</p>
            </div >
        </Fragment>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)
