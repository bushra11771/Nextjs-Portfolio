'use client'
 
import { useState } from 'react'
 
export default function user() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
        in users component1
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}