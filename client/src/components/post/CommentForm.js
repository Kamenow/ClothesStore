import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post.js';

const CommentForm = ({ postId, addComment }) => {
    const [text, setText] = useState('');

    return (
        <div>
            <div >
                <div >
                    <h3>Leave a Comment</h3>
                </div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        addComment(postId, { text });
                        setText('');
                    }}
                >
                    <textarea
                        name='text'
                        cols='30'
                        rows='5'
                        placeholder='Comment the post'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                    />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm)
