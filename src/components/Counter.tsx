import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  const [arr, setArr] = useState<number[]>([])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
