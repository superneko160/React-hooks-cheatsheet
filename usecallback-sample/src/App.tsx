import { useState, useCallback } from 'react'
import Title from './components/Title'
import Button from './components/Button'
import Count from './components/Count'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment = useCallback(() => {
    setCount1(prev => prev + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount2(prev => prev - 1)
  }, [])

  return (
    <div className='App'>
      <Title />
      <Button handleFunction={increment}>+</Button>
      <Count count={count1} />
      <Button handleFunction={decrement}>-</Button>
      <Count count={count2} />
    </div>
  )
}

export default App
