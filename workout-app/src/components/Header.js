import React from 'react'

import { Avatar, Button } from 'evergreen-ui'

import { Link } from 'react-router-dom'


function Header(props) {
    return(
        <div className = 'header'>
            <Link className ='link' to = '/'><h1>Workout App</h1></Link>
            <nav className='header-links'>
                {props.currentUser && <Link className ='link' to = '/workout'>Workouts</Link>}
                {props.currentUser && <Link className = 'link' to = '/goals'>Goals</Link>}
                {props.currentUser && <Link className ='link' to = '/music'>Music</Link>}
                {!props.currentUser ? <Link className ='link' to ='/login'>Log In</Link> : null}
                {props.currentUser && <p>Welcome, {props.currentUser.name}</p>}
                {props.currentUser && <Link className ='link' to ='/profile'><Avatar name ={props.currentUser.name}/></Link>}
                {props.currentUser && <Button onClick = {props.handleLogout}>Logout</Button>}
            </nav>
        </div>
    )
}

export default Header