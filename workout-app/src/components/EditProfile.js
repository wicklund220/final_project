import React, {Component} from 'react'

class EditProfile extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentUser: [
                {
                    name: '',
                    username: '',
                    bio: ''
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
            <form onSubmit = {(event) => this.props.editUser(event, this.state)}>
                Name: <input
                type = 'text'
                name = 'name'
                // value = {this.props.currentUser.name}
                onChange = {this.onChange}
                />
                Username: <input
                type = 'text'
                name = 'username'
                onChange = {this.onChange}
                />
                Bio: <input
                type = 'text'
                name = 'bio'
                // value = {this.props.currentUser.bio}
                onChange = {this.onChange}
                />
                <input type = 'submit' value = 'Update' />
            </form>
        )
    }
}

export default EditProfile;