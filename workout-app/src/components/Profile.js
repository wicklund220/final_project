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
            <p>username: {props.currentUser.username}</p>
            <p>bio: {props.currentUser.bio}</p>
            <img src = {props.currentUser.picture} />
            <Button><Link className = 'link' to ='/profile/edit'>Edit Profile</Link></Button>
        </div>
    )
}

export default Profile;