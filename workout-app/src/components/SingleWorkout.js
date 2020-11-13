import React from 'react';

import { allWorkouts } from '../services/api_helper'

const SingleWorkout = (props) => {
    const test = async() => {
        const singleWorkout = await allWorkouts(props.workoutId)
        console.log(singleWorkout)
    }
    test()
    // const currentWorkout = props.workouts.find(workout => workout.id === parseInt(props.workoutId))
    return(
        <div>
            <h1>{props.workouts.name}</h1>
        </div>
    )
}

export default SingleWorkout