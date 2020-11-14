import React from 'react'

const Goals = (props) => {
    console.log(props)
    return(
        <div>
            <h3>Goal Title: {props.goal.title}</h3>
            <p>Goal Description: {props.goal.description}</p>
            <p>Target Date: {props.goal.date}</p>
            <p>Photo: </p> <img src = {props.goal.file} />
            <button onClick={()=> props.removeGoal(props.goalId)}>Remove</button>
        </div>
    )
}

export default Goals