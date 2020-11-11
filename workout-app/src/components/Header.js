import React from 'react'

import { Link } from 'react-router-dom'

function Header(props) {
    return(
        <div>
            <Link to = '/'>Workout App</Link>
            <nav className='header-links'>
                <Link to = '/workouts'>Workouts</Link>
                <Link to = '/goals'>Goals</Link>
                <Link to = '/music'>Music</Link>
                {!props.currentUser ? <Link to ='/login'>Log In</Link> : null}
                {props.currentUser && <p>Welcome, {props.currentUser.username}</p>}
                {props.currentUser && <button onClick = {props.handleLogout}>Logout</button>}
            </nav>
        </div>
    )
}

export default Header