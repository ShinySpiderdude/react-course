import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';


class App extends Component {

  state = {
    persons: [
      {key: "zxcas", name: "ilan", age: 39},
      {key: "asdasdas", name: "Keepod", age: 2}
    ],
    showPersons: true
  }

  changeNameHandler = (event, key) => {
    const personIndex = this.state.persons.findIndex(p => p.key === key);
    const newName = event.target.value
    const person = {...this.state.persons[personIndex]};
    person.name = newName;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map ( (person) =>
            <Person key={person.key}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.changeNameHandler(event, person.key)}/>)
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

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

}

export default App;
