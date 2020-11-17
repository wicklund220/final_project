import React from 'react'

const Music = (props) => {
    const playlist1 = '37i9dQZEVXbLRQDuF5jeBp';
    const playlist2 = '37i9dQZF1DX76Wlfdnj7AP';
    const playlist3 = '37i9dQZF1DWUSyphfcc6aL';
    return(
        <div>
            <select name='playlist'>
                <option value = {playlist1}>Top 50</option>
                <option value = {playlist2}>Beast Mode</option>
                <option value = {playlist3}>Workout Beats</option>
            </select>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default Music