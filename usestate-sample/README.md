# useState

コンポーネントは関数なので、変数等の値を保存しておくことができない。アプリで何らかの変化が発生し再描画となった時に、関数内部で使用していた変数の値はすべてクリアされる。そのため、関数内部で使用してた値を保存するのが`State`である。


## 構文

```ts
const [状態, 更新関数] = useState(初期状態)
```

## 概要

状態を扱うためのフック。`useState()`で1つの新しい状態を作成する。返り値は配列で、0番目に現在の状態を保存する変数、1番目に更新関数が格納される。  
更新関数を呼び出すと状態が変化し、フックがあるコンポーネントは再描画される。  
更新関数を呼ぶには、次の2種類の方法がある。

1. 引数に値を渡す方法

```ts
onClick={() => setCount(count - 1)}
```

2. 引数に関数を渡す方法

```ts
onClick={() => setCount(prevCount => prevCount + 1)}
```

## 補足

`useState`で単一の値ではなく、オブジェクトを扱う場合

- [useStateでオブジェクトを管理する場合](https://github.com/superneko160/React-hooks-cheatsheet/tree/main/usestate-sample2)
