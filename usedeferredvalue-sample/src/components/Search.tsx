import { useState, useDeferredValue } from 'react'

const Search = () => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  // 大量のダミーデータを生成
  const allItems = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    name: `アイテム ${i + 1}`,
    description: `これはアイテム ${i + 1}の説明です 。${(i + 1) % 10 === 0 ? '重要な' : '通常の'}アイテムです。`,
  }))

  // 検索結果をフィルター（重い処理）
  const filteredItems = !deferredQuery.trim()
    ? []
    : allItems.filter(
        item =>
          item.name.toLowerCase().includes(deferredQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(deferredQuery.toLowerCase()),
      )

  // 検索クエリとdeferredQueryが異なる場合、ロード中
  const isStale = query !== deferredQuery

  return (
    <div>
      <div>
        <label>検索：</label>
        <input
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='検索ワードを入力してください...'
        />
      </div>

      <div>
        <div>
          <span>現在の入力値:</span> "{query}"
        </div>
        <div>
          <span>遅延された値:</span> "{deferredQuery}"
        </div>
      </div>

      {isStale && <div>更新中...</div>}

      <div>検索結果: {filteredItems.length}件</div>

      <div>
        {filteredItems.length > 0
          ? filteredItems.slice(0, 20).map(item => (
              <div key={item.id} className='box'>
                <div>{item.name}</div>
                <div>{item.description}</div>
              </div>
            ))
          : deferredQuery && <div>検索結果がありません</div>}
      </div>

      {filteredItems.length > 20 && (
        <div>他 {filteredItems.length - 20} 件の結果があります</div>
      )}
    </div>
  )
}

export default Search
