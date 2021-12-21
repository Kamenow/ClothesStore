import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post.js';

const PostForm = ({ addPost, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        bio: '',
        image: '',
    })

    const navigate = useNavigate();

    const { title, price, bio, image } = formData;

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = async e => {
        e.preventDefault();

        addPost(title, price, bio, image);

        navigate('/posts')
    }

    // Redirect if logged in

    if (!isAuthenticated) {
        navigate('/dashboard')
    }

    return (
        <Fragment>
            <div className="wrapper">
                <div className="formContent">

                    <div className="loginIcon">
                        <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" className="profile" alt="profile" />
                    </div>

                    <form onSubmit={e => onSubmit(e)}>
                        <input type="text" className="login" name="title" onChange={e => onChange(e)} placeholder="title" />
                        <input type="text" className="login" name="price" onChange={e => onChange(e)} placeholder="price" />
                        <input type="text" className="login" name="bio" onChange={e => onChange(e)} placeholder="bio" />
                        <input type="text" className="login" name="image" onChange={e => onChange(e)} placeholder="image" />
                        <input type="submit" value="Create Post" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPost })(PostForm)
