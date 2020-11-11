import React, {Component} from 'react'

import { Route, Link } from 'react-router-dom'

import Workouts from './Workouts'

class WorkoutsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workouts: null,
        }
    }



    render() {
        return(
            <div>
                <h1>Your Workouts</h1>
                <section>
                   <Route exact path = '/workouts/list' render = {(props) => {
                       return <Workouts workouts = {this.props.workouts}/>
                   }} />
                </section>
                <Link to = '/workouts/create'>Create Workout</Link>
            </div>
        )
    }
}

export default WorkoutsContainer