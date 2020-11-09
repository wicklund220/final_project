import React from 'react'

const Goals = (props) => {
    return(
        <div>
            <h3>Goal Title: {props.goal.title}</h3>
            <p>Goal Description: {props.goal.description}</p>
            <p>Target Date: {props.goal.date}</p>
        </div>
    )
}

export default Goals