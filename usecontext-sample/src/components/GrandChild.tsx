import { useContext } from 'react'
import { UserContext } from './../context/UserContext'

export const GrandChild = () => {
  // コンテキスト(UserContext)から値を取得する
  const user = useContext(UserContext)

  return <p>Hello, {user.name}</p>
}
