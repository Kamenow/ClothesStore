import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div>
            <Link className='editCreate' to="/edit-profile">Edit Profile</Link>
        </div>
    )
}

export default DashboardActions
