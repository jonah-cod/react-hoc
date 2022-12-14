import React from 'react'
import withCounter from './withCounter'

const HoverCounter = ({ count, handleCounter})=>{

  return (
    <div>
      <h1 onMouseOver={handleCounter}>You hovered me {count} times</h1>
    </div>
  )
}

export default withCounter(HoverCounter)