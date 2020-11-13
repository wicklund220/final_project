import React from 'react';

const SingleWorkout = (props) => {
    console.log(props.workouts, props.workoutId)
    const currentWorkout = props.workouts.find(workout => workout.id === parseInt(props.workoutId))
    return(
        <div>
            <h1>{currentWorkout.name}</h1>
        </div>
    )
}

export default SingleWorkout