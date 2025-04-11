import { SubmitButton } from './components/SubmitButton'
import { submitEmail } from './actions/email'
import './App.css'

function App() {

  return (
    <div className="app">
      <h1>useFormStatusサンプル</h1>
      <form action={submitEmail}>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input type="email" name="email" id="email" className="form-input" required />
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}

export default App
