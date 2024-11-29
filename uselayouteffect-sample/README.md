# useLayoutEffect

`useEffect`と同じく副作用を実行するフック。`useEffect`との違いは、実行タイミング。`useEffect`は画面に表示された後に実行されるが、`useLayoutEffect`は画面に表示される前に実行される。これにより、useLayoutEffectを使えば初期表示時のちらつきが減らせる。

## 構文

```tsx
useLayoutEffect(() => {
    // 実行する副作用
}, [])
```

依存配列などは`useEffect`と同様。

## 概要

即座に実行しなくていい処理や視覚的に影響を与えない処理に`useEffect`を使い、初期表示した時点で絶対に実行しておきたい処理は`useLayoutEffect`を利用する。

また、時間がかかる処理は`useLayoutEffect`より`useEffect`を利用するほうがよい。
