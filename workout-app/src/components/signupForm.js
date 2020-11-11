import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
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
            <form onSubmit = {(event) => this.props.handleSignup(event, this.state)}>
                <input
                type = 'text'
                name = 'username'
                placeholder = 'username'
                onChange = {this.onChange}
                />
                <input
                type = 'password'
                name = 'password'
                placeholder = 'password'
                onChange = {this.onChange}
                />
                <input type = 'submit' value = 'Sign Up' />
                <p>Already a member?</p> <Link to='/login'>Login</Link>
            </form>
        )
    }
}

export default SignupForm;