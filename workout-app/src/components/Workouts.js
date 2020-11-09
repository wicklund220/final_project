import React from 'react';

const Workouts = (props) => {
    console.log(props)
    return(
        <div>
            <h3>Workout name: {props.workout.title}</h3>
            <p>Lift: {props.workout.name}</p>
            <p>Number of Sets: {props.workout.sets}</p>
            <p>Number of Reps per Set: {props.workout.reps}</p>
            <p>Amount of Weight: {props.workout.weight} pounds</p>
        </div>
    )
}

export default Workouts