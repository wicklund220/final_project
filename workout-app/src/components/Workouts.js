import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'evergreen-ui';

const Workouts = (props) => {
    console.log(props)
    return(
        <div className='single-item'>
            <h3>Lift: {props.workout.name}</h3>
            <p>Number of Sets: {props.workout.sets}</p>
            <p>Number of Reps per Set: {props.workout.reps}</p>
            <p>Amount of Weight: {props.workout.weight} pounds</p>
            <Button onClick={() => props.removeWorkout(props.workoutId)}>Remove</Button>
          
        </div>
    )
}

export default Workouts