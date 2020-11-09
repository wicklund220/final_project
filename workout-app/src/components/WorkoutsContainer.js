import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import Workouts from './Workouts'

class WorkoutsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return(
            <div>
                <h1>Your Workouts</h1>
                <section>
                    {this.props.workouts.map((workout, index) => {
                        return <Workouts 
                            workout = {workout}
                            key = {index}
                        />
                    })}
                </section>
                <Link to = '/workouts/create'>Create Workout</Link>
            </div>
        )
    }
}

export default WorkoutsContainer