import React from 'react';

import { Link } from 'react-router-dom';

const Workouts = (props) => {
    console.log(props)
    return(
        <div>
            {/* <h3>Lift: {props.workout.name}</h3>
            <p>Number of Sets: {props.workout.sets}</p>
            <p>Number of Reps per Set: {props.workout.reps}</p>
            <p>Amount of Weight: {props.workout.weight} pounds</p> */}
              {props.workouts.map((workout, index) => {
                        return (
                        
                            <div>
                                <Link to ={`/workout/single/${workout.id}`} key = {index}><h4>{workout.name}</h4></Link>
                                <p>Sets: {workout.sets}</p>
                                <p>Reps: {workout.reps}</p>
                                <p>Weight: {workout.weight}</p>
                            </div>
                           )
                })}
        </div>
    )
}

export default Workouts