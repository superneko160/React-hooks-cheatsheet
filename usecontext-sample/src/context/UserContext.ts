import React from 'react'
import type { User } from './../types/'

// ユーザ情報を保持するコンテキストを作成
export const UserContext = React.createContext<User>({
  id: 0,
  name: '初期値太郎',
})
