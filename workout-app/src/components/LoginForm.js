import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { TextInput, Button } from 'evergreen-ui'

class LoginForm extends Component {
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
            <form className ='single-item' onSubmit = {(event) => this.props.handleLogin(event, this.state)}>
                <h2>Log In</h2>
                <p>Username</p><TextInput
                type='text'
                name='username'
                placeholder='username'
                onChange={this.onChange}
                required
                />
                <p>Password</p><TextInput
                type='password'
                name='password'
                placeholder='password'
                onChange={this.onChange}
                required
                /><br/><br/>
                <Button>Log In</Button>
                
                {!this.props.currentUser && 
                <div>
                    <p>Not a member? </p><Button><Link className='link' to='/signup'>Sign Up</Link></Button>
                </div>}
            </form>
        )
    }
}

export default LoginForm;