# カスタムフック

自分がカスタムして作るフック。

## カスタムフックを使うメリット

1. コンポーネントの複雑化を防ぐ

コンポーネントに直接ロジックを書くと見た目（view）と処理（ロジック）が同じ場所に書かれているので可読性が下がる。見た目（view）と処理（ロジック）の分離が目的のひとつ。

2. 機能を再利用できる

機能として分割しているということは、同じ処理を別のコンポーネントでも使えるようになる。

サンプルでは、`useFetchData`というカスタムフックを`Posts.tsx`と`Users.tsx`の2つのコンポーネントで利用している。

3. 複数のhooksをまとめることができる

コンポーネントに直接フックを記述した場合、フックを多く使用していると、フックの関連性がわかりにくくなる。カスタムフックを導入すると、コンポーネント側はカスタムフックを呼ぶだけでよくなる。（関連するフックを意識しなくてよくなる）

サンプルでは、データフェッチに関するフックは`useFetchData.ts`にまとめらている。カスタムフック導入により、コンポーネント側（`Posts.tsx`）はカスタムフックを呼ぶだけで関連するフック（`useState`と`useEffect`）を意識しなくてよくなる。

```tsx
import { useState, useEffect } from 'react'

/**
 * WebAPIからJSONデータを取得するカスタムフック
 * @param {string} url
 */
const useFetchData = (url: string) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      let data = []
      try {
        const response = await fetch(url)
        data = await response.json()
      } catch (error) {
        console.error(error)
      }
      setData(data)
    }

    fetchPost()
  })

  return { data }
}

export default useFetchData
```

```tsx
import useFetchData from './../hooks/useFetchData'

type Post = {
  id: string
  title: string
}

const Posts = () => {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {data.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
```

4. テストが容易

機能を再利用できるということはそれ単体で動かせる状態なので、単体テストを書きやすい。

## ルール

1. フック名は`use〇〇`
2. 返り値は、`useState`など既存の形式のフックの返り値に合わせるか、オブジェクトですべて返す

2つともコードを読む際の認知コストを下げるためである。
