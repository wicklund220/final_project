import React, {Component} from 'react'

import { TextInput, Textarea, Button } from 'evergreen-ui';

class CreateGoal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Lose 5 pounds',
            description: 'Run 3 miles, 3 times per week',
            date: 'January 2021',
            file: ''
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
            <form className ='single-item' onSubmit = {(event) => {this.props.onSubmit(event, this.state)}}>
                <p>Goal</p><TextInput 
                name = 'title'
                placeholder = 'Goal'
                onChange = {this.onChange}
                />
                <p>Description</p><Textarea
                name = 'description'
                placeholder = 'Description'
                onChange = {this.onChange} 
                />
                <p>Target Date</p><TextInput
                name = 'date'
                placeholder = 'Target Date'
                onChange = {this.onChange}
                /><br/><br/>
                {/* <input type = 'file' name = 'file'/> */}
                {/* <input type='submit' value='Submit' /> */}
                <Button onClick = {(event) => this.props.onSubmit(event, this.state)}>Submit</Button>
            </form>
        )
    }
}

export default CreateGoal