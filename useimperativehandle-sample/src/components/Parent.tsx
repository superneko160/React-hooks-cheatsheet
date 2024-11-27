import { useRef } from 'react'
import { Child } from './Child'

export const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)

  const onClick = () => {
    if (childRef.current !== null) {
      // 子のuseImerativeHandleで指定した値を参照
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <button type='button' onClick={onClick}>
        Show Message
      </button>
      <Child ref={childRef} />
    </div>
  )
}
