import React, {Component} from 'react'

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
                <h1>Your Goals</h1>
                <section>
                    {this.props.goals.map((goal, index) => {
                        return <Goals 
                            goal = {goal}
                            key = {index}
                        />
                    })}
                </section>
            </div>
        )
    }
}

export default GoalsContainer