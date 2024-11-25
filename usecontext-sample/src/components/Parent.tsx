import type { User } from './../types/'
import { Child } from './Child'
import { UserContext } from './../context/UserContext'

export const Parent = () => {
  const user: User = {
    id: 1,
    name: 'テスト太郎',
  }

  return (
    // UserContextに値を渡す
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}
