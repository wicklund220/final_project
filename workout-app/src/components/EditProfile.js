import React, {Component} from 'react'

import { TextInput, Textarea, Button } from 'evergreen-ui'

class EditProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentUser: [
                {
                    name: '',
                    username: '',
                    bio: '',
                    picture: ''
                }
            ]
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
            <form className='single-item' onSubmit = {(event) => this.props.editUser(event, this.state)}>
                <p>Name</p> <TextInput
                type = 'text'
                name = 'name'
                // value = {this.props.currentUser.name}
                onChange = {this.onChange}
                />
                <p>About Me</p> <TextInput
                type = 'text'
                name = 'bio'
                // value = {this.props.currentUser.bio}
                onChange = {this.onChange}
                />
                <p>Profile Picture</p> <TextInput
                type = 'text'
                name = 'picture'
                onChange = {this.onChange}
                /><br/><br/>
                <Button onClick = {(event) => this.props.editUser(event, this.state)}>Submit</Button>
            </form>
        )
    }
}

export default EditProfile;