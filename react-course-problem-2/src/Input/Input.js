import React, { Component } from 'react';

//export class Input extends Component {



const input = (props) => {
  return (
    <div>
      <input onChange={props.changed}/>
      <p>The length of the input is {props.length}</p>
    </div>
  )
}


export default input