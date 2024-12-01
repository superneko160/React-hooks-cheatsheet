import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = () => {
    setCount1(prev => prev + 1)
  }

  const increment2 = () => {
    setCount2(prev => prev + 1)
  }

  /**
   * 重い処理が書いてあるのはisEven1のみだが
   * 判定用の関数は2つとも動いているので
   * isEven2ボタン押下時も若干重くなる
   * そのためuseMemoを使う。そうするとisEven2は軽くなる
   * useMemoを使った関数は呼び出すときに()を付与しない
   */
  const isEven1 = useMemo(() => {
    let i = 0
    while (i < 500000000) {  // 重い処理
      i++
    }
    return count1 % 2 === 0
  }, [count1])  // count1が変更されたときだけisEven1を実行

  const isEven2 = () => {
    return count2 % 2 === 0
  }

  return (
    <div className='App'>
      <button type='button' onClick={increment1}>
        no.1
      </button>
      {count1}
      <span>は{isEven1 ? '偶数' : '奇数'}です</span>
      <br />
      <button type='button' onClick={increment2}>
        no.2
      </button>
      {count2}
      <span>は{isEven2() ? '偶数' : '奇数'}です</span>
    </div>
  )
}

export default App
