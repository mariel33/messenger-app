import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/Login';
import ChatApp from './components/ChatApp';

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/5b71386b-7308-4fd4-b6f7-9ef780e5acd5/token";
const instanceLocator = "v1:us1:5b71386b-7308-4fd4-b6f7-9ef780e5acd5";
const roomId = 12923884;
const username = "mariel33"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MJ's Messenger</h1>
          <Link to="/login">Login</Link>
        </header>
        <main>
          <Route exact path="/" component={Login} />
          <Route path ="/chatapp" component={ChatApp} />
        </main>
      </div>
    );
  }
}

export default App;
