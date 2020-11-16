import React from 'react';

import { Link } from 'react-router-dom'

import { Button } from 'evergreen-ui'

import Email from './Email'

const Footer = (props) => {
    return(
        <div className='footer'>
            <p>&copy; Nels Wicklund 2020</p>
            <Button id='contact'><Link className='link'  to = '/contact'>Contact Us</Link></Button>
        </div>
    )
}

export default Footer