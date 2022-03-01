import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post.js';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <div className='comment'>
      <p>
        <i class='fa-solid fa-user'></i> {name}
      </p>
      <p>
        <i class='fa-solid fa-comment'></i> {text}
      </p>

      {!auth.loading && user === auth.user._id && (
        <button onClick={(e) => deleteComment(postId, _id)} type='button'>
          <i class='fa-solid fa-trash-can'></i>
        </button>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
