import React, { Component } from 'react';

import { FilePicker, Textarea, Button, TextInput } from 'evergreen-ui';

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
            <form className='single-item' onSubmit = {(event) => this.props.handleSignup(event, this.state)}>
                <h2>Sign Up</h2>
               <p>username </p> <TextInput
                // type = 'text'
                name = 'username'
                placeholder = 'username'
                onChange = {this.onChange}
                />
                <p>password </p><input className='password'
                type = 'password'
                name = 'password'
                placeholder = 'password'
                onChange = {this.onChange}
                />
                <p>name </p><TextInput
                // type = 'text'
                name = 'name'
                placeholder = 'name'
                onChange = {this.onChange}
                />
                <p>bio </p><Textarea
                // type = 'textarea'
                name = 'bio'
                placeholder = 'bio'
                onChange = {this.onChange}
                />
                <p>profile picture url </p><TextInput
                // type = 'text'
                name = 'picture'
                placeholder = 'profile picture'
                onChange = {this.onChange}
                /><br/><br/>
                {/* <FilePicker 
                name = 'picture'
                placeholder = 'select profile picture'
                onChange = {this.onChange}
                /> */}
                {/* <input type = 'submit' value = 'Sign Up' /> */}
                <Button className = 'signup-button' onClick = {(event) => this.props.handleSignup(event, this.state)}>Sign up</Button>
                <p>Already a member?</p> <Button><Link className ='link' to='/login'>Login</Link></Button>
            </form>
        )
    }
}

export default SignupForm;