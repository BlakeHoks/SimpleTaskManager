import React, { useState } from 'react'

export const HomePage = () => {
  const [num, setNum] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setNum(num + 1)
  }
  return (
    <div>
      <p>HomePage</p>
      <button onClick={handleClick}>+1</button>
      <p>{num}</p>
    </div>
  )
}
