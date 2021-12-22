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
    post: { _id, user, title, name, image, price, bio, likes, comments, date },
    showActions
}) => {

    return (
        <Fragment>
            <div className="card postItem " >
                <Link className='removeDecoration' to={`/posts/${_id}`}>
                    <a><img src={image} alt="Clothing Image" /></a>
                    <h2>From: {name}</h2>
                    <h2>Title: {title}</h2>
                    <p className="price" >Price: {price}$</p >
                    <p>Bio: {bio}</p>
                </Link>
                {showActions && (
                    <Fragment>
                        <button onClick={e => removeLike(_id)}>Unlike</button>
                        <button onClick={e => addLike(_id)}>Like</button>
                        {!auth.loading && user == auth.user._id && (
                            <button onClick={e => deletePost(_id)}>delete</button>
                        )}
                        <p>Likes: {likes.length} Comments: {comments.length}</p>
                    </Fragment>
                )}
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
