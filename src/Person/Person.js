import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>HI! I'm {props.name} and my age is {props.age}!!</p>
    </div>
  )

};

export default person;