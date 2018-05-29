import React from 'react';

const validation = (props) => {

  let propsString = null
  if (props.inputLength < 5) {
    propsString = "Text too short"
  } else if (props.inputLength > 8) {
    propsString = "Text too long"
  }

  if (propsString) {
    return (
      <div>
        <p>{propsString}</p>
      </div>
    )
  } else return null
}

export default validation