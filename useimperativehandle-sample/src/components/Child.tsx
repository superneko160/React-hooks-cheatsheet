import { useImperativeHandle, useState, forwardRef } from 'react'

export const Child = forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  // useImerativeHandleで親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})
