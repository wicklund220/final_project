import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'evergreen-ui'

import Goals from './Goals'

class GoalsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return(
            <div>
                <h1 className='list-title'>Your Goals</h1>
                <section>
                    {this.props.goals.map((goal, index) => {
                        return <Goals 
                            removeGoal = {this.props.removeGoal}
                            goal = {goal}
                            key = {index}
                            goalId = {index}
                        />
                    })}
                </section><br/>
                <Button><Link className ='link' to = '/goals/create'>Create Goal</Link></Button>
                
            </div>
        )
    }
}

export default GoalsContainer