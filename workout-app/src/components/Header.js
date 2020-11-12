import React from 'react'

import { Link } from 'react-router-dom'

import { MDCTopAppBar } from '@material/top-app-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement)

function Header(props) {
    return(
        <div>
            <Link to = '/'>Workout App</Link>
            <nav className='header-links'>
                {props.currentUser && <Link to = '/workouts'>Workouts</Link>}
                {props.currentUser && <Link to = '/goals'>Goals</Link>}
                {props.currentUser && <Link to = '/music'>Music</Link>}
                {!props.currentUser ? <Link to ='/login'>Log In</Link> : null}
                {props.currentUser && <p>Welcome, <Link to ='/profile'>{props.currentUser.username}</Link></p>}
                {props.currentUser && <button onClick = {props.handleLogout}>Logout</button>}
            </nav>
        </div>
    )
}

export default Header