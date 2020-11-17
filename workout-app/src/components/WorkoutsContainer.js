import React, {Component} from 'react'

import { Route, Link, withRouter } from 'react-router-dom'
import { allWorkouts, postWorkout } from '../services/api_helper'

import { Button } from 'evergreen-ui'

import Workouts from './Workouts'



class WorkoutsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workouts: [
                {
                    name: 'Bench Press',
                    sets: 4,
                    reps: 10,
                    weight: 225
                }
            ]
        }
    }

    componentDidMount() {
        this.readAllWorkouts();
    }

    readAllWorkouts = async () => {
        const workouts = await allWorkouts();
        console.log(workouts);
        this.setState({
            workouts: workouts
        })
    }

    createWorkout = async(event, workoutData) => {
        event.preventDefault();
        const newWorkout = await postWorkout(workoutData);
        const workouts = this.state.workouts;
        const newWorkouts = [...workouts, newWorkout]
        this.setState({
            workouts: newWorkouts
        })
        this.props.history.push('/workout');
    }

   

    render() {
        return(
            <div className='workout-wrapper'>
                <h1>Your Workouts</h1>
                <section>
                    {this.props.workouts.map((workout, index) => {
                        return <Workouts 
                        removeWorkout = {this.props.removeWorkout}
                        workout = {workout}
                        key = {index}
                        workoutId = {index}
                        />
                    })}
                  

                 
                </section>
                <br/>
                <div>
                    <Button><Link className='link' to = '/workout/create'>Create Workout</Link></Button>
                </div>
            </div>
        )
    }
}

export default withRouter(WorkoutsContainer)