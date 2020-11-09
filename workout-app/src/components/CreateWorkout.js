import React, {Component} from 'react'

class CreateWorkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',

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
            <form onSubmit = {(event) => this.props.onSubmit(event, this.state)}>
                <input 
                type = 'text'
                name = 'title'
                placeholder = 'workout'
                onChange = {this.onChange}
                />
                <input type='submit' value='submit'/>
            </form>
        )
    }
}

export default CreateWorkout