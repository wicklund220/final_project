import React, { Component } from 'react';

import { FilePicker, Textarea, Button, TextInputField, TextInput } from 'evergreen-ui';

import { Link } from 'react-router-dom'

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            name: '',
            bio: '',
            picture: '',
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
               <p>Username </p> <TextInputField
                type = 'text'
                name = 'username'
                placeholder = 'username'
                onChange = {this.onChange}
                />
                <p>Password </p><input className='password'
                type = 'password'
                name = 'password'
                placeholder = 'password'
                onChange = {this.onChange}
                />
                <p>Name </p><TextInputField
                // type = 'text'
                name = 'name'
                placeholder = 'name'
                onChange = {this.onChange}
                />
                <p>About Me </p><Textarea
                // type = 'textarea'
                name = 'bio'
                placeholder = 'bio'
                onChange = {this.onChange}
                />
                <p>Profile Picture URL </p><TextInput
                // type = 'text'
                name = 'picture'
                placeholder = 'profile picture'
                onChange = {this.onChange}
                /><br/><br/>
                <Button className = 'signup-button' onClick = {(event) => this.props.handleSignup(event, this.state)}>Sign up</Button>
                <p>Already a member?</p> <Button><Link className ='link' to='/login'>Login</Link></Button>
            </form>
        )
    }
}

export default SignupForm;