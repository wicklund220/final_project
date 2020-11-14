import React, { Component } from 'react';

import { FilePicker } from 'evergreen-ui';

import { Link } from 'react-router-dom'

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            name: '',
            bio: '',
            picture: ''
        }
    }

    onChange = (event) => {
        // event.preventDefault();
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
                <input
                type = 'text'
                name = 'name'
                placeholder = 'name'
                onChange = {this.onChange}
                />
                <input
                type = 'textarea'
                name = 'bio'
                placeholder = 'bio'
                onChange = {this.onChange}
                />
                {/* <FilePicker 
                name = 'picture'
                placeholder = 'select profile picture'
                onChange = {this.onChange}
                /> */}
                <input type = 'submit' value = 'Sign Up' />
                <p>Already a member?</p> <Link to='/login'>Login</Link>
            </form>
        )
    }
}

export default SignupForm;