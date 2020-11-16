import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'evergreen-ui';

const Profile = (props) => {
    console.log(props)
    return(
        <div>
            {/* <h1>{props.profile.data}</h1> */}
            {/* <button onClick = {props.renderProfile}>Get Profile Info</button> */}
            <h1>{props.currentUser.name}</h1>
            <img className='profile-picture' src = {props.currentUser.picture} />
            <p>username: {props.currentUser.username}</p>
            <p>bio: {props.currentUser.bio}</p>
            <Button><Link className = 'link' to ='/profile/edit'>Edit Profile</Link></Button>
        </div>
    )
}

export default Profile;