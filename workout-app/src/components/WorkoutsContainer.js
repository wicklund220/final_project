import React, {Component} from 'react'

import { Route, Link } from 'react-router-dom'
import { allWorkouts } from '../services/api_helper'

import Workouts from './Workouts'

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

    render() {
        return(
            <div>
                <h1>Your Workouts</h1>
                <section>
                   <Route exact path = '/workouts/1' render = {(props) => {
                       return <Workouts workouts = {this.props.workouts}/>
                   }} />
                </section>
                <Link to = '/workouts/create'>Create Workout</Link>
            </div>
        )
    }
}

export default WorkoutsContainer