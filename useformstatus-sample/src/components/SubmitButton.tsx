import { useFormStatus } from 'react-dom'

// 送信ボタンコンポーネント
export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? '送信中...' : '送信'}
    </button>
  )
}
