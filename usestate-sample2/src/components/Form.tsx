import { useState } from 'react'

const Form = () => {
  const [answer, setAnswer] = useState({
    name: '',
    age: '',
    gender: '',
    from: '',
    job: '',
  })

  const handleName = e => {
    // setAnswer(e.target.value)  1.// NG（単体の値ではなく、オブジェクトだから）

    // setAnswer({name: e.target.value})  // 2.NG

    // setAnswer({...answer, name: e.target.value})  // 3.OK

    // 4.Good
    setAnswer(prev => {
      return {
        ...prev,
        name: e.target.value,
      }
    })
  }

  const handleAge = e => {
    // setAnswer(e.target.value)  // 1.NG（単体の値ではなく、オブジェクトだから）

    // setAnswer({age: e.target.value})  // 2.NG

    // setAnswer({...answer, age: e.target.value})  // 3.OK

    // 4.Good
    setAnswer(prev => {
      return {
        ...prev,
        age: e.target.value,
      }
    })
  }

  console.log(answer)

  return (
    <div>
      <form>
        <input
          type='text'
          value={answer.name}
          placeholder='お名前'
          onChange={handleName}
        />
        <input
          type='text'
          value={answer.age}
          placeholder='年齢'
          onChange={handleAge}
        />
      </form>
    </div>
  )
}

export default Form
