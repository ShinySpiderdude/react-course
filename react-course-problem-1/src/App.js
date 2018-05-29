import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

    state = {
        username: "Ilan"
    }


    render() {

        return (
          <div className="App">
              <UserInput onChange={this.usernameChanged} username={this.state.username}/>
              <UserOutput p1="First of first" p2="Second of first" username={this.state.username}/>
          </div>
        );
    }

    usernameChanged = (event) => {
        this.setState({username: event.target.value})
    }
}

export default App;
