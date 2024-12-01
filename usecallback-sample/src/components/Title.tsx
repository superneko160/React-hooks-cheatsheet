import React from 'react'

const Title = () => {
  console.count('タイトル')
  return <h1>カウンタアプリ</h1>
}

// React.memoで囲むだけでTitleコンポーネントの再レンダリングを防ぐことが可能
export default React.memo(Title)
