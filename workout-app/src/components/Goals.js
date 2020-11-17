import React from 'react'

import { Button } from 'evergreen-ui'

const Goals = (props) => {
    console.log(props)
    return(
        <div className='single-item'>
            <h3>Goal: {props.goal.title}</h3>
            <p>Goal Description: {props.goal.description}</p>
            <p>Target Date: {props.goal.date}</p>
            <Button onClick={()=> props.removeGoal(props.goalId)}>Remove</Button>
        </div>
    )
}

export default Goals