import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner.js';
import DashboardActions from './DashboardActions.js';
import { getCurrentProfile } from '../../actions/profile.js';
import PostItem from '../posts/PostItem.js';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }, post: { posts } }) => {
    useEffect(() => {
        getCurrentProfile();

    }, []);

    const navigate = useNavigate();

    let three = [];
    let sorted = posts.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date)
    });
    let mapped = sorted.map(post => {
        post.likes.forEach(liked => liked.user == user._id ? three.push(post) : '')
    }
    )
    let sliced = three.slice(0, 3);

    return loading && profile === null
        ? (navigate('/create-profile'))
        : (
            <div className='dashboardWrapper'>
                <Fragment >
                    {
                        profile !== null
                            ? <Fragment>
                                <div className='title'>
                                    <h1>Dashboard</h1 >
                                    <p className='yo'>Welcome {user && user.name}</p>
                                </div >

                                <Fragment>
                                    <div className='info'>
                                        <p className='yo'>company: {profile.company}</p>
                                        <p className='yo'>location: {profile.location}</p>
                                        <p className='yo'>website: {profile.website}</p>
                                    </div>
                                </Fragment>

                                <div className='bio'>
                                    <p className='yo'>bio:</p>
                                    <p>
                                        {profile.bio}
                                    </p>
                                </div>

                                {sliced.length > 0 && (
                                    <h2 className='lastLikedTextSize'>Last Liked</h2>
                                )}

                                <div className='lastLiked'>
                                    {sliced.map(liked => (
                                        <PostItem key={liked._id} post={liked} showActions={false} />
                                    ))}
                                </div>

                                <DashboardActions />
                            </Fragment>
                            : <Fragment>
                                <p>You have not yet setup a profile, please add some info</p>
                                <Link to='/create-profile'>
                                    Create Profile
                                </Link>
                            </Fragment>
                    }
                </Fragment >
            </div >
        )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    post: state.post
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
