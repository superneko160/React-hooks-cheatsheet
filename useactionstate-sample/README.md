# useActionState

`useActionState`は、フォームアクションの結果に基づいて`state`を更新するためのフック。アクションを単に実行するだけでなく、アクションの結果を取り扱いたいときに便利。ざっくり言えば、`useActionState`は`useReducer`の非同期版のようなフック。あるいは、`useTransition`と`useState`を合体したフック

## 構文

```tsx
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)
```

### 引数

- `fn`: フォームが送信されたりボタンが押されたりしたときに呼び出される関数
- `initialState`: `state`の初期値として使いたい値。この引数はアクションが一度呼び出された後は無視される
- `permalink`（省略可）: このフォームが書き換えの対象とするユニークなページURLを含んだ文字列

### 返り値

以下の項目を含む**配列**を返す

1. `state`: 現在の`state`。初回は、渡した`initialState`となり。アクションが呼び出された後は、そのアクションが返した値となる
2. `formAction`: 新しいアクション
3. `isPending`: アクションが処理中かどうかを知るのに利用できるフラグ

## 追加機能

連打したときのアクションが複数並列実行されないように制御してくれる
