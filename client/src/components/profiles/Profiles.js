import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner.js';
import { getProfiles } from '../../actions/profile.js';

const ProfileItem = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles()
    }, [])

    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <h1>Developers</h1>
                <p>
                    Browse
                </p>
            </Fragment>}
        </Fragment>
    )
}

ProfileItem.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(ProfileItem)
