import React, { useState } from 'react'

const withCounter = (Component) => {

      const NewComponent = () => {
            const [count, setcount] = useState(0)
            const handleCounter = () => {
                  setcount(count + 1)
            }
      return <Component count={count} handleCounter={handleCounter} />
      }
      return NewComponent
}

export default withCounter