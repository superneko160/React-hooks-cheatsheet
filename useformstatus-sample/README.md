# useFormStatus

フォームの送信状態を追跡するためのフック。**フォームの送信中の状態を監視し、ローディング表示などのUI制御**を行うことができる

## 構文

```tsx
const { pending } = useFormStatus();
```

`useFormStatus`は引数を取らず、フォームの状態を含むオブジェクトを返す

- `pending`: フォームが送信中かどうかを示すブール値

## 注意点

- フォームコンポーネントの子孫コンポーネント内でのみ使用可能
- `react`からではなく`react-dom`からインポートする必要がある

## 使用例

### 送信ボタンの制御

```tsx
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? '送信中...' : '送信'}
    </button>
  );
}

function ContactForm() {
  return (
    <form action={submitContact}>
      <input type="email" name="email" required />
      <SubmitButton />
    </form>
  );
}
```

### 送信状態の表示

```tsx
function ContactFormWithStatus() {
  return (
    <form action={submitContact}>
      <div>
        <label htmlFor="name">名前：</label>
        <input type="text" id="name" name="name" required />
      </div>
      
      <div>
        <label htmlFor="email">メール：</label>
        <input type="email" id="email" name="email" required />
      </div>
      
      <FormStatus />
      <SubmitButton />
    </form>
  );
}

function FormStatus() {
  const { pending } = useFormStatus();
  
  if (!pending) return null;
  
  return (
    <div className="status-message">
      フォームを送信中...
    </div>
  );
}
```

## 概要

`useFormStatus`は、React 19で導入されたフォーム関連の新機能の一部。Server Actionsと組み合わせることで、フォーム送信時のユーザー体験を向上させることができる

### 主な特徴

1. **送信状態の監視**: フォームの送信状態をリアルタイムで取得
2. **UI制御の簡略化**: ローディング表示やボタンの無効化を簡単に実装
3. **Server Actionsとの連携**: サーバーサイドの処理と連動した状態管理
