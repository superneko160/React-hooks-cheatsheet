# useReducer

## 構文

```ts
reducer(現在の状態, action) {
    return 次の状態
}

const [現在の状態, dispatch] = useReducer(reducer, reducerに渡される初期状態)
```

## 概要

状態を扱うためのフック。`useState`より複雑な用途に向いている。  
`useReducer`の返り値は配列で、0番目に現在の状態を保存する変数、1番目に`dispatch`関数が格納される。`dispatch`関数には`action`と呼ばれるデータを渡すと状態を更新できる。  
