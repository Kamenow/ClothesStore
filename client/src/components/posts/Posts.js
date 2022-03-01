import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner.js';
import PostItem from './PostItem.js';
import { getPosts } from '../../actions/post.js';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts);

  return (
    <Fragment>
      {posts ? (
        <div className='storeItem'>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} showActions={true} />
          ))}
          <div className='background-image'></div>
        </div>
      ) : (
        <p>NoPosts</p>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
