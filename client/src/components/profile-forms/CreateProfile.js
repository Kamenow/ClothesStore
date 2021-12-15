import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
// import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile.js';

const CreateProfile = ({ createProfile }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        bio: ''
    })

    const {
        company,
        website,
        location,
        bio
    } = formData

    const onChange = e =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const onSubmit = async e => {
        e.preventDefault();

        createProfile(formData);
    };


    return (
        <Fragment>
            <div className="wrapper">
                <div className="formContent">

                    <div className="loginIcon">
                        <img src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" className="profile" alt="profile" />
                    </div>

                    <form onSubmit={e => onSubmit(e)}>
                        <div>
                            <input type="text" className="login" name="company" value={company} onChange={e => onChange(e)} placeholder="company" />
                            <small>your company name</small>
                        </div>
                        <div>
                            <input type="text" className="login" name="website" value={website} onChange={e => onChange(e)} placeholder="website" />
                            <small>website url</small>
                        </div>
                        <div>
                            <input type="text" className="login" name="location" value={location} onChange={e => onChange(e)} placeholder="location" />
                            <small >an short summary</small>
                        </div>
                        <div>
                            <input type="text" className="login" name="bio" value={bio} onChange={e => onChange(e)} placeholder="bio" />
                            <small>an short summary</small>
                        </div>
                        <input type="submit" value="Create Profile" />
                    </form>
                </div>
            </div >
        </Fragment >
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}

export default connect(null, { createProfile })(CreateProfile)
