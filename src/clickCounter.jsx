import React, { useState } from 'react'

const ClickCounter = () => {
      const [count, setcount] = useState(0)
      const handleCounter = ()=>{
            setcount(count + 1)
      }
  return (
    <div>
      <button onClick={handleCounter}>You clicked me {count} times</button>
    </div>
  )
}

export default ClickCounter