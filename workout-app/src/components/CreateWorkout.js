import React, {Component} from 'react'

import { Button } from 'evergreen-ui'

class CreateWorkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            sets: 0,
            reps: 0,
            weight: 0
        }
    }

    onChange = (event) => {
        event.preventDefault();
        // console.log(event);
        // if(event.target.className === 'lift') {
        //     this.setState({
        //         lift: {[event.target.name]: event.target.value}
        //     })
        // }
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form className='workout-form' onSubmit = {(event) => this.props.createWorkout(event, this.state)}>
                <p>Lift</p> <input
                type = 'text'
                name = 'name'
                // className = 'lift'
                placeholder = 'lift'
                onChange = {this.onChange}
                />
                <p>Sets</p> <input
                type = 'number'
                name = 'sets'
                // className = 'lift'
                placeholder = 'sets'
                onChange = {this.onChange}
                />
                <p>Reps</p><input
                type = 'number'
                name = 'reps'
                // className = 'lift'
                placeholder = 'reps'
                onChange = {this.onChange}
                />
                <p>Weight</p><input
                type = 'number'
                name = 'weight'
                // className = 'lift'
                placeholder = 'weight'
                onChange = {this.onChange}
                /><br/><br/>
                {/* <input type='submit' value='submit'/> */}
                <Button onClick = {(event) => this.props.createWorkout(event, this.state)}>Submit</Button>
            </form>
        )
    }
}

export default CreateWorkout