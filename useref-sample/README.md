# useRef

`useRef`は、値を保持したり、DOM要素を参照するフック。

## 基本構文

```ts
const refオブジェクト = useRef(初期値);
```

useRefフックはrefオブジェクトを返し、refオブジェクトはすべて`current`プロパティを持つ。

## 概要

`useRef`は、Reactコンポーネント内で可変な参照を作成するためのフックで、主に2つの用途がある。

1. 再レンダリングを引き起こさずにデータを保持する
2. DOM要素に直接アクセスする

### 1. データの保持

- 値を変更しても**コンポーネントの再レンダリングを発生させない**
- `useState`や`useReducer`と異なり、値の更新が即座にコンポーネントに反映されない
- レンダリングに影響を与えたくない値を保持する場合に最適

```tsx
function Timer() {
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      // タイマーのロジック
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

### 2. DOM要素の参照

- DOM要素に直接アクセスできる
- フォーム要素の操作（フォーカス、クリックなど）に便利
- ライブラリと連携する際に役立つ

```tsx
function TextInputWithFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
```
