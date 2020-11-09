import React, {Component} from 'react'

class CreateGoal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            date: ''
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
            <form onSubmit = {(event) => {this.props.onSubmit(event, this.state)}}>
                <input 
                type = 'text'
                name = 'title'
                placeholder = 'goal'
                onChange = {this.onChange}
                />
                <input
                type = 'text'
                name = 'description'
                placeholder = 'description'
                onChange = {this.onChange} 
                />
                <input
                type = 'text'
                name = 'date'
                placeholder = 'target date'
                onChange = {this.onChange}
                />
                <input type='submit' value='submit' />
            </form>
        )
    }
}

export default CreateGoal