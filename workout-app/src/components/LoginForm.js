import React, { Component } from 'react';

import { Link } from 'react-router-dom';

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
            <form onSubmit = {(event) => this.props.handleLogin(event, this.state)}>
                <input
                type='text'
                name='username'
                placeholder='username'
                onChange={this.onChange}
                />
                <input
                type='password'
                name='password'
                placeholder='password'
                onChange={this.onChange}
                />
                <input type='submit' value='Log In'/>
                
                {!this.props.currentUser && 
                <div>
                    <p>Not a member? </p><Link to='/signup'>Sign Up</Link>
                </div>}
            </form>
        )
    }
}

export default LoginForm;