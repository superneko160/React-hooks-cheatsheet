# useOptimistic(with useTransition())

`useOptimistic`はユーザ操作に対する反応をより速く見せるための楽観的UI更新を実装するために使用されるフック。従来のデータ更新では、サーバーレスポンスを待ってから画面を更新するが、`useOptimistic`はユーザー操作が成功すると「楽観的に」仮定して、即座にUIを更新する。

## 構文

```tsx
const [optimisticState, addOptimistic] = useOptimistic(
  state,
  (currentState, optimisticValue) => {
    // 楽観的な状態の更新ロジック
    return updatedState;
  }
);
```

## 概要

`useOptimistic`はユーザー体験向上のためのフック。たとえば、「いいね」ボタンを押した際に、APIリクエストの完了を待たずに即座にUIを更新することができる。

実際の更新処理が失敗した場合は、元の状態に自動的に戻る。状態の整合性はReactによって管理されるので、開発者は複雑な状態管理を心配する必要がない。

フォーム送信、リストアイテムの追加/削除、「いいね」などのインタラクションなど、レスポンス時間が重要な場面で特に有効。

また、オフライン対応アプリケーションでも、ネットワーク接続が回復した際に同期できるような楽観的UIパターンの実装に役立つ。
