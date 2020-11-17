import React, {Component} from 'react'

import { Button, TextInput } from 'evergreen-ui'

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
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form className='single-item' onSubmit = {(event) => this.props.createWorkout(event, this.state)}>
                <p>Lift</p> <TextInput
                type = 'text'
                name = 'name'
                // className = 'lift'
                placeholder = 'lift'
                onChange = {this.onChange}
                />
                <p>Sets</p> <TextInput
                type = 'number'
                name = 'sets'
                // className = 'lift'
                placeholder = 'sets'
                onChange = {this.onChange}
                />
                <p>Reps</p><TextInput
                type = 'number'
                name = 'reps'
                // className = 'lift'
                placeholder = 'reps'
                onChange = {this.onChange}
                />
                <p>Weight</p><TextInput
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