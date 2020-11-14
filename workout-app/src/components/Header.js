import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'evergreen-ui';

function Header(props) {
    return(
        <div className = 'header'>
            <Button><Link className ='link' to = '/'>Workout App</Link></Button>
            <nav className='header-links'>
                {props.currentUser && <Link className ='link' to = '/workout'>Workouts</Link>}
                {props.currentUser && <Link className = 'link' to = '/goals'>Goals</Link>}
                {props.currentUser && <Link className ='link' to = '/music'>Music</Link>}
                {!props.currentUser ? <Link className ='link' to ='/login'>Log In</Link> : null}
                {props.currentUser && <p>Welcome, <Link className ='link' to ='/profile'>{props.currentUser.username}</Link></p>}
                {props.currentUser && <Button onClick = {props.handleLogout}>Logout</Button>}
            </nav>
        </div>
    )
}

export default Header