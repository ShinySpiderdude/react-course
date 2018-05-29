import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>HI! I'm {props.name} and my age is {props.age}!!</p>
      <input value={props.name} onChange={props.changed}/>
    </div>
  )

};

export default person;