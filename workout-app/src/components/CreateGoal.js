import React, {Component} from 'react'

import { TextInput, Textarea } from 'evergreen-ui';

class CreateGoal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            date: '',
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
            <form className ='goal-form' onSubmit = {(event) => {this.props.onSubmit(event, this.state)}}>
                Goal Title<TextInput 
                name = 'title'
                placeholder = 'Goal'
                onChange = {this.onChange}
                />
                Goal Description<Textarea
                name = 'description'
                placeholder = 'Description'
                onChange = {this.onChange} 
                />
                Target Date<TextInput
                name = 'date'
                placeholder = 'Target Date'
                onChange = {this.onChange}
                />
                {/* <input type = 'file' name = 'file'/> */}
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default CreateGoal