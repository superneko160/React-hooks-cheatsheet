import { useActionState } from 'react'

export const Form = () => {
  const [error, formAction, isPending] = useActionState<Error | null, FormData>(
    async (prevError: Error | null, formData: FormData) => {
      console.log(prevError)

      const name = formData.get('name')
      console.log(name)

      if (!name) {
        return new Error('Name is required')
      }
      return null
    },
    null,
  )

  return (
    <form action={formAction}>
      <input type='text' name='name' />
      <button type='submit' disabled={isPending}>
        {isPending ? 'Sending...' : 'Submit'}
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}
