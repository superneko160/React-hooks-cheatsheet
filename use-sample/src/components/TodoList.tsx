import React from 'react'
import { use } from 'react'
import { fetchTodos } from './../action'

/**
 * 以下のように非同期関数をコンポーネントの外に書かないと
 * An unsupported type was passed to use(): async function エラーが出る
 *
 * クライアントコンポーネント内では 非同期関数はuseEffectの中で実行しないと
 * 再レンダリングや複数コンポーネントでの実行などで何度も実行されてしまう
 * Reactのコンポーネントは純粋関数であるのに
 * この現象は「予測可能で一貫性のある結果を返す」のという純粋関数的な原則に反するのでエラーになる
 */
const todosPromise = fetchTodos()
console.log(todosPromise) // Promise

export function TodoList() {
  const todos = use(todosPromise)

  return (
    <div>
      <h2>Todo List (With use API)</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
