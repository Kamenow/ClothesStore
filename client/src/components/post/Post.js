import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner.js';
import PostItem from '../posts/PostItem.js';
import { getPost } from '../../actions/post.js';
import CommentForm from './CommentForm.js';
import CommentItem from './CommentItem.js';

const Post = ({ getPost, post: { post, loading } }) => {
    const { id } = useParams();

    useEffect(() => {
        getPost(id)
    }, [getPost, id])

    return loading || post === null
        ? <Spinner />
        : <Fragment>
            <PostItem post={post} />
            <CommentForm postId={post._id} />
            <div>
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
        </Fragment>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
