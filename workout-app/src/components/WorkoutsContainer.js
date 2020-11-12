import React, {Component} from 'react'

import { Route, Link } from 'react-router-dom'
import { allWorkouts, postWorkout } from '../services/api_helper'

import Workouts from './Workouts'

import CreateWorkout from './CreateWorkout'

class WorkoutsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workouts: null,
        }
    }

    componentDidMount() {
        this.readAllWorkouts();
    }

    readAllWorkouts = async () => {
        const workouts = await allWorkouts();
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
        this.props.history.push('/workout/1')
    }

    render() {
        return(
            <div>
                <h1>Your Workouts</h1>
                <section>
                   <Route exact path = '/workouts/1' render = {(props) => {
                       return <Workouts workouts = {this.props.workouts}/>
                   }} />
                   <Route path = '/workouts/create' render = { (props) => {
                        return <CreateWorkout createWorkout = {this.createWorkout}/>
                         }} />
                </section>
                <Link to = '/workouts/create'>Create Workout</Link>
            </div>
        )
    }
}

export default WorkoutsContainer