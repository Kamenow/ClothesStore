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
  showActions,
}) => {
  return (
    <Fragment>
      <div className='card postItem '>
        <Link className='removeDecoration' to={`/posts/${_id}`}>
          <a>
            <img src={image} alt='Clothing Image' />
          </a>
          <div className='from'>
            <i class='fa-solid fa-user'></i>
            <p>{name}</p>
          </div>

          <div className='title'>
            <i class='fa-solid fa-shirt'></i>
            <p>{title}</p>
          </div>
          <p className='price'>{price}$</p>
          <p>{bio}</p>
        </Link>
        {showActions && (
          <Fragment>
            <div className='button-wrapper'>
              <button onClick={(e) => removeLike(_id)}>
                <i class='unlike fa-solid fa-thumbs-down'></i>
              </button>
              <button onClick={(e) => addLike(_id)}>
                <i class='like fa-solid fa-thumbs-up'></i>
              </button>
              {!auth.loading && user == auth.user._id && (
                <button onClick={(e) => deletePost(_id)}>
                  <i class='delete fa-solid fa-trash-can'></i>
                </button>
              )}
            </div>
            <div className='likes-comments'>
              <div>
                <i class='fa-solid fa-heart'></i>: {likes.length}
              </div>
              <div>
                <i class='fa-solid fa-comment'></i>: {comments.length}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
