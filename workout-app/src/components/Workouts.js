import React from 'react';

import { Link } from 'react-router-dom';

const Workouts = (props) => {
    console.log(props)
    return(
        <div>
            <h3>Lift: {props.workout.name}</h3>
            <p>Number of Sets: {props.workout.sets}</p>
            <p>Number of Reps per Set: {props.workout.reps}</p>
            <p>Amount of Weight: {props.workout.weight} pounds</p>
            <button onClick={() => props.removeWorkout(props.workoutId)}>Remove</button>
          
        </div>
    )
}

export default Workouts