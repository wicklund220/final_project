import React, {Component} from 'react'

class CreateWorkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            lift: {
                name: '',
                sets: 0,
                reps: 0,
                weight: 0
            }
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
            <form onSubmit = {(event) => this.props.onSubmit(event, this.state)}>
                <input 
                type = 'text'
                name = 'title'
                placeholder = 'workout'
                onChange = {this.onChange}
                />
                <input
                type = 'text'
                name = 'name'
                // className = 'lift'
                placeholder = 'lift'
                onChange = {this.onChange}
                />
                 <input
                type = 'number'
                name = 'sets'
                // className = 'lift'
                placeholder = 'sets'
                onChange = {this.onChange}
                />
                <input
                type = 'number'
                name = 'reps'
                // className = 'lift'
                placeholder = 'reps'
                onChange = {this.onChange}
                />
                <input
                type = 'number'
                name = 'weight'
                // className = 'lift'
                placeholder = 'weight'
                onChange = {this.onChange}
                />
                <input type='submit' value='submit'/>
            </form>
        )
    }
}

export default CreateWorkout