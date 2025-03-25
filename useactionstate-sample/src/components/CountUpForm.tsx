import { useActionState } from 'react'

export const CountUpForm = () => {
  const [count, countAction, isPending] = useActionState<number>(
    async (prevCount: number) => {
      // isPendingが機能しているか確認するためのコード
      await new Promise(resolve => setTimeout(resolve, 1000))
      return prevCount + 1
    },
    0,
  )

  return (
    <form action={countAction}>
      <button type='submit' disabled={isPending}>
        {isPending ? 'Loading...' : 'CountUp'}
      </button>
      <p>{count}</p>
    </form>
  )
}
