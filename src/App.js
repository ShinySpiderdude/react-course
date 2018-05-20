import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';


class App extends Component {

  state = {
    persons: [
      {name: "ilan", age: 39},
      {name: "Keepod", age: 2}
    ],
    showPersons: false
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map ( (person, index) =>
            <Person key={person.name} name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}/>)
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>HI! I am a react app</h1>
        <button onClick={this.togglePersonsHandler}>Toggle view</button>
        { persons }
      </div>
    );
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: "Keepod", age: 3}
      ]
    })
  }
}

export default App;
