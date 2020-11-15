import React, {Component} from 'react'

import { Route, Link, withRouter } from 'react-router-dom'
import { allWorkouts, postWorkout } from '../services/api_helper'

import { Button } from 'evergreen-ui'

import Workouts from './Workouts'

import CreateWorkout from './CreateWorkout'

import SingleWorkout from './SingleWorkout'

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

    // createWorkout = async(event, workoutData) => {
    //     event.preventDefault();
    //     const newWorkout = await postWorkout(workoutData);
    //     const workouts = this.state.workouts;
    //     const newWorkouts = [...workouts, newWorkout]
    //     this.setState({
    //         workouts: newWorkouts
    //     })
    //     this.props.history.push('/workout');
    // }

    removeWorkout = (workoutId) => {
        const userWorkouts = this.state.workouts;
        const newWorkouts1 = userWorkouts.slice(0, workoutId);
        const newWorkouts2 = userWorkouts.slice(workoutId + 1, userWorkouts.length);
        const both = newWorkouts1.concat(newWorkouts2)
        this.setState({
            workouts: both
        })
      }

    // deleteWorkout = async (id) => {
    //     await destroyWorkout(id);
    //     const workouts = this.state.workouts;
    //     const filterWorkouts = workouts.filter(workout => workout.id !== parseInt(id));
    //     this.setState({
    //         workouts: filterWorkouts
    //     })
    //     this.props.history.push('/workout')
    // }

    render() {
        return(
            <div className='workout-wrapper'>
                <h1>Your Workouts</h1>
                <section>
                    {this.state.workouts.map((workout, index) => {
                        return <Workouts 
                        removeWorkout = {this.removeWorkout}
                        workout = {workout}
                        key = {index}
                        workoutId = {index}
                        />
                    })}
                   {/* <Route exact path = '/workout' render = {(props) => {
                       console.log(props)
                       return <Workouts workouts = {this.state.workouts}
                       removeWorkout = {this.removeWorkout}
                       />
                   }} /> */}
                      {/* <Route exact path = '/workout/single/:id' render = {(props) => {
                          console.log(this.state)
                        return <SingleWorkout
                        workouts={this.state.workouts}
                        workoutId={props.match.params.id}
                        />
                    }} /> */}
                   {/* <Route exact path = '/workout/create' render = { (props) => {
                        return <CreateWorkout createWorkout = {this.createWorkout}/>
                         }} /> */}

                 
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