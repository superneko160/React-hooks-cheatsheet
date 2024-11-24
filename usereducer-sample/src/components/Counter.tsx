import { useReducer } from 'react'
import { counterReducer } from './../logic/counterReducer'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props

  const [count, dispatch] = useReducer(counterReducer, initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* dispatch関数にactionを渡して状態を更新 */}
      <button type='button' onClick={() => dispatch('DECREMENT')}>
        -
      </button>
      <button type='button' onClick={() => dispatch('INCREMENT')}>
        +
      </button>
      <button type='button' onClick={() => dispatch('DOUBLE')}>
        ×2
      </button>
      <button type='button' onClick={() => dispatch('RESET')}>
        RESET
      </button>
    </div>
  )
}

export default Counter
