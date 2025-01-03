# useMemo

計算結果（値）をメモ化するためのフック。複雑な計算の結果を保持し、不必要な再計算を防ぐ最適化手法。

## 構文

```tsx
const メモ化された値 = useMemo(() => {
  // 計算処理
  return 計算結果;
}, [依存配列]);
```

## 概要

- 重い計算処理の結果をキャッシュする
- 依存配列に指定された値が変更された場合のみ、再計算が行われる
- オブジェクトや配列の参照の一定性を保つのにも利用可能
