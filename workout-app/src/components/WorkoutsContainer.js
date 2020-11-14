import React, {Component} from 'react'

import { Route, Link, withRouter } from 'react-router-dom'
import { allWorkouts, postWorkout } from '../services/api_helper'

import Workouts from './Workouts'

import CreateWorkout from './CreateWorkout'

import SingleWorkout from './SingleWorkout'

class WorkoutsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workouts: [
                {
                    id: 0,
                    name: 'test',
                    sets: 0,
                    reps: 0,
                    weight: 0
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
        console.log(this.props)
        event.preventDefault();
        console.log(workoutData)
        const newWorkout = await postWorkout(workoutData);
        const workouts = this.state.workouts;
        const newWorkouts = [...workouts, newWorkout]
        this.setState({
            workouts: newWorkouts
        })
        console.log(this.state.workouts);
        this.props.history.push('/workout');
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
            <div>
                <h1>Your Workouts</h1>
                <section>
                   <Route exact path = '/workout' render = {(props) => {
                       console.log(props)
                       return <Workouts workouts = {this.props.workouts}
                       />
                   }} />
                      <Route exact path = '/workout/single/:id' render = {(props) => {
                          console.log(this.state)
                        return <SingleWorkout
                        workouts={this.state.workouts}
                        workoutId={props.match.params.id}
                        />
                    }} />
                   <Route exact path = '/workout/create' render = { (props) => {
                        return <CreateWorkout createWorkout = {this.createWorkout}/>
                         }} />

                 
                </section>
                <Link to = '/workout/create'>Create Workout</Link>
            </div>
        )
    }
}

export default withRouter(WorkoutsContainer)