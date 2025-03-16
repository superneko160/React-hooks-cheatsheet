import { useOptimistic, useRef } from 'react'

export function Thread({ messages, sendMessage }) {
  const formRef = useRef()

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ],
  )

  async function formAction(formData) {
    addOptimisticMessage(formData.get('message'))
    formRef.current.reset()
    await sendMessage(formData)
  }

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type='text' name='message' placeholder='テキストを入力' />
        <button type='submit'>送信</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (送信中...)</small>}
        </div>
      ))}
    </>
  )
}
