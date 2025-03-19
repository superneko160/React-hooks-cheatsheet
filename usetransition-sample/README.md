# useTransition

優先度の低い状態更新を遅延させるためのフック。UI更新の優先度を設定して、優先度の高い更新を先に行い、それ以外の更新を後回しできる

## 構文

```tsx
const [isPending, startTransition] = useTransition();
```

`useTransition`は2つの値を返す配列を返す
- `isPending`: 遅延中の状態更新があるかどうかを示す真偽値
- `startTransition`: 優先度の低い状態更新をラップするための関数

## 使用例

### 1. 検索処理

```tsx
import { useState, useTransition } from 'react';

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // 高優先度の更新（即時反映）
    setSearchQuery(e.target.value);

    // 低優先度の更新（遅延可能）
    startTransition(() => {
      // 重い検索処理
      const results = performSearch(e.target.value);
      setSearchResults(results);
    });
  };

  return (
    <>
      <input value={searchQuery} onChange={handleChange} />
      {isPending ? <div>検索中...</div> : <SearchResults data={searchResults} />}
    </>
  );
}
```

### 2. タブ切り替え

```tsx
function TabContainer() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const selectTab = (tab) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  return (
    <div>
      <TabButton onClick={() => selectTab('home')}>ホーム</TabButton>
      <TabButton onClick={() => selectTab('profile')}>プロフィール</TabButton>
      
      {isPending && <div>切り替え中...</div>}
      <div style={{ opacity: isPending ? 0.8 : 1 }}>
        {selectedTab === 'home' && <HomeTab />}
        {selectedTab === 'profile' && <ProfileTab />}
      </div>
    </div>
  );
}
```

## 概要

`useTransition`は、React 18で導入された新しい並行処理機能の一部。大量のデータを扱うUIや複雑な計算が必要な更新を含むアプリケーションで特に有用

### 主な特徴

1. **優先度付けされた更新**: UIの応答性を犠牲にすることなく、重い処理を行うことができる
2. **遅延表示**: `isPending`を使用して、ユーザーに処理中であることを伝えられる
3. **中断可能**: 新しい更新がある場合、進行中の低優先度の更新を中断できる

### `useTransition`と`useDeferredValue`のちがい

- useTransitionは関数の更新を遅延する
- useDeferredValueは値の更新を遅延する
