import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./Input/Input";
import Validation from "./Validation/Validation"

class App extends Component {

  state = {
    inputLength: 0
  }

  inputChangeHandler = (event) => {
    this.setState({inputLength: event.target.value.length})
  }


  render() {
    return (
      <div className="App">
        <Input changed={this.inputChangeHandler} length={this.state.inputLength}/>
        <Validation inputLength={this.state.inputLength}/>
      </div>
    );
  }
}

export default App;
