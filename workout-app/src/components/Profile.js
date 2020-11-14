import React from 'react';

import { Link } from 'react-router-dom';

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
            <Link to ='/profile/edit'>Edit Profile</Link>
        </div>
    )
}

export default Profile;