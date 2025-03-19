import React, { useState, useTransition, useMemo } from 'react'
import type { Item } from '../types'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredResults, setFilteredResults] = useState<Item[]>([])
  const [isPending, startTransition] = useTransition()

  // 大量のダミーデータを生成
  const allData = useMemo(() => {
    const data = []
    for (let i = 1; i <= 5000; i++) {
      data.push({
        id: i,
        name: `アイテム ${i}`,
        description: `これはアイテム ${i} の説明です。${i % 10 === 0 ? '特別な' : '通常の'}アイテムです。`,
      })
    }
    return data
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 入力値の更新は即時に
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm)

    // 検索結果の更新は後回し（重い処理）
    startTransition(() => {
      if (newSearchTerm.trim() === '') {
        setFilteredResults([])
        return
      }

      // 大量のデータからフィルタリング（時間がかかる処理）
      const results = allData.filter(
        item =>
          item.name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(newSearchTerm.toLowerCase()),
      )

      setFilteredResults(results)
    })
  }

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearch}
        placeholder='検索ワードを入力してください...'
      />

      {isPending ? (
        <div>検索結果を更新中...</div>
      ) : (
        searchTerm && <div>検索結果: {filteredResults.length}件</div>
      )}

      <div>
        {filteredResults.length > 0
          ? filteredResults.slice(0, 20).map(item => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))
          : searchTerm && !isPending && <div>検索結果がありません</div>}
      </div>

      {filteredResults.length > 20 && (
        <div>...他 {filteredResults.length - 20} 件の結果があります</div>
      )}
    </div>
  )
}

export default Search
