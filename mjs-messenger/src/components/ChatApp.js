import React, { Component } from 'react';
import io from 'socket.io-client';

import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatApp extends Component {
    socket = {};
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.sendHandler = this.sendHandler.bind(this);

        this.socket= io(config.api, { query: `username=${props.username}`}).connect();

        this.socket.on('server:message', message => {
            this.asMessage(message);
        });
    }

    sendHandler(message) {
        const messageObject = {
            username: this.props.username,
            message
        };

        this.socket.emit('client:message', messageObject);

        messageObject.fromMe = true;
        this.addMessage(messageObject);
    }

    addMessage(message) {
        const messages = this.state.messages;
        messages.push(message);
        this.setState({ messages });
    }
    render() {
        return (
            <div className="container">
                <h3>MJ's Messenger</h3>
                <Messages messages={this.state.messages} />
                <ChatInput onSend={this.sendHandler} />
            </div>
        )
    }
}

ChatApp.defaultProps={
    username: 'Anonymous'
};

export default ChatApp;