import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import App from '../App';
import ChatApp from './ChatApp';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ''};

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    }

    usernameChangeHandler(event){
        this.setState({ username: event.target.value })
    }

    usernameSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitted: true, username: this.state.username })
    }

    render() {
        if (this.state.submitted) {
            return (
                <ChatApp username={this.state.username} />
            )
        }
        return (
            <form onSubmit={this.usernameSubmitHandler}
                className="username-container">
                <div>
                    <input
                        type="text"
                        onChange={this.usernameChangeHandler}
                        placeholder="Enter a username"
                        required />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
Login.defaultProps = {

};

export default Login;