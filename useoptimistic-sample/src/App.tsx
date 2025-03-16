import { Thread } from './components/Thread'
import { useState } from 'react'
import { deliverMessage } from './action'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { text: 'こんにちは！', sending: false, key: 1 },
  ])

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'))
    setMessages(messages => [...messages, { text: sentMessage }])
  }

  return (
    <div>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  )
}

export default App
