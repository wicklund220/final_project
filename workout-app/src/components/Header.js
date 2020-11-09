import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
    return(
        <div>
            <Link to = '/'>Workout App</Link>
            <nav className='header-links'>
                <Link to = '/workouts'>Workouts</Link>
                <Link to = '/goals'>Goals</Link>
                <Link to = '/music'>Music</Link>
            </nav>
        </div>
    )
}

export default Header