import React from 'react';


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
                                <h3>Lift: {workout.name}</h3>
                                <p>Number of Sets: {workout.sets}</p>
                                <p>Number of Reps: {workout.reps}</p>
                                <p>Amount of Weight: {workout.weight} Pounds</p>
                            </div>
                           
                        )
                })}
        </div>
    )
}

export default Workouts