import React from 'react'
import withCounter from './withCounter'

const ClickCounter = ({ count, handleCounter})=>{
      
  return (
    <div>
      <button onClick={handleCounter}>You clicked me {count} times</button>
    </div>
  )
}

export default withCounter(ClickCounter)