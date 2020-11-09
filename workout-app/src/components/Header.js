import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
    return(
        <div>
            <h1>Workout App</h1>
            <nav className='header-links'>
                <Link to = '/workouts'>Workouts</Link>
                <Link to = '/goals'>Goals</Link>
            </nav>
        </div>
    )
}

export default Header