# useDeferredValue

値のコピーを作成し、その更新を遅延させるためのフック。**UIの応答性を維持しながら、値の更新を低優先度として扱う**ことができる

## 構文

```tsx
const deferredValue = useDeferredValue(value);
```

`useDeferredValue`は1つの引数を受け取り、その遅延バージョンを返す
- 引数: 遅延させたい値
- 返り値: 元の値の遅延コピー

## 使用例

### 検索処理

```tsx
import { useState, useDeferredValue, useMemo } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  
  // 検索結果の計算（重い処理）
  const results = useMemo(() => {
    // 大量のデータから検索する処理
    return searchDatabase(deferredQuery);
  }, [deferredQuery]);
  
  // 入力値と遅延値が異なる場合は更新中
  const isStale = query !== deferredQuery;
  
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {isStale && <div>更新中...</div>}
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### リスト表示

```tsx
function ProductList({ products }) {
  const [filter, setFilter] = useState('');
  const deferredFilter = useDeferredValue(filter);
  
  // 遅延値を使用してフィルタリング
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.name.toLowerCase().includes(deferredFilter.toLowerCase())
    );
  }, [products, deferredFilter]);
  
  return (
    <div>
      <input
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="製品を検索..."
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
```

## 概要

`useDeferredValue`は、React 18で導入された並行処理機能の一部。外部から受け取った値や状態を遅延させることで、UIの応答性を保ちながら重い処理を行うことができる

### 主な特徴

1. **非ブロッキング更新**: 入力などの高優先度の更新をブロックせずに、低優先度の更新を遅延
2. **値のコピーの作成**: 元の値を変更せず、遅延させたコピーを作成
3. **自動調整**: システムの負荷に応じて遅延時間を自動調整

### `useTransition`と`useDeferredValue`のちがい

- useTransitionは関数の更新を遅延する
- useDeferredValueは値の更新を遅延する
