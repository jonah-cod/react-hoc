import React, { useState } from 'react'

const HoverCounter = () => {

      const [count, setcount] = useState(0)
      const handleCounter = ()=>{
            setcount(count + 1)
      }

  return (
    <div>
      <h1 onMouseOver={handleCounter}>You hovered me {count} times</h1>
    </div>
  )
}

export default HoverCounter