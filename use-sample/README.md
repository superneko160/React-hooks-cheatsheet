# use

`use` API は、React19から導入されたAPI。（フックではない）主に Server Components 内で Promise や Context などの値を安全に読み取るために使用する。
非同期処理の結果を同期的に扱い、コンポーネントのレンダリングフローに統合することを目的としている。`use` は、非同期処理の結果を宣言的に記述し、Suspense と連携してローディング状態を管理するのに役立つ

## 構文

```tsx
const value = use(thenableOrContext)
```

### 返り値

- Promise の場合: Promise が解決した値。Promise が rejected された場合はエラーを throw し、`<ErrorBoundary>`でキャッチされる必要がある
- Context の場合: Context の現在の値

## 使用例

### Promise の解決

```tsx
import { use } from 'react'

async function fetchData() {
  const res = await fetch('[https://api.example.com/data](https://api.example.com/data)')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const dataPromise = fetchData()

export default function DataDisplay() {
  const data = use(dataPromise)

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  )
}
```

### Context の読み取り

```tsx
import { createContext } from 'react'
import { use } from 'react'

const ThemeContext = createContext('light')

function ThemeConsumer() {
  const theme = use(ThemeContext)
  return <div>Current theme: {theme}</div>
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeConsumer />
    </ThemeContext.Provider>
  )
}
```
