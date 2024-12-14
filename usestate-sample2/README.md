# useStateで複数の値（オブジェクト）を管理

`useState`は

```tsx
const [answer, setAnswer] = useState('')
```

のような単体の値を管理するだけではなく、以下のように、複数の値をオブジェクトで管理したいときが出てくる

```tsx
const [answer, setAnswer] = useState({
  name: '',
  age: '',
  gender: '',
  from: '',
  job: '',
})
```

そのとき、普通の`setState()`の記述だとエラーになるので注意が必要

## 

### 1. `setAnswer(e.target.value)` - 完全にNG

最も基本的な誤り。`useState`で初期化したオブジェクト全体を、単一の入力値（文字列）で置き換えようとしているため、他のプロパティがすべて失われてしまう。  
オブジェクトの他のフィールド（`name`, `age`, `gender`, `from`, `job`）が完全に消失する。

### 2. `setAnswer({name: e.target.value})` - NG

この方法も不適切。この方法では、オブジェクトの他のプロパティを完全に破棄し、新しいオブジェクトを作成してしまう。  
元々のオブジェクトの他のフィールド（`age`, `gender`, `from`, `job`）が失われる。

### 3. `setAnswer({...answer, name: e.target.value})` - OK（非推奨）

スプレッド演算子を使用して、元のオブジェクトのプロパティをコピーし、特定のプロパティを上書きする。

動作はするが、以下のような潜在的な問題がある。

1. 同時に複数の状態更新が行われる場合、レンダリングの最適化や予測可能性に影響を与える可能性
2. クロージャやキャプチャされた値に関連する微妙なバグを引き起こす可能性

### 4. `setAnswer(prev => ({ ...prev, name: e.target.value })) - Good（推奨）

関数形式の`setState`を使用。最も安全で推奨される方法で、以下の利点がある。

1. 最新の状態を確実に参照: `prev`パラメータは常に最新の状態を提供する
2. 競合状態の回避: 複数の状態更新が同時に発生しても、常に最新の状態に基づいて更新される
3. 一貫性の保証: React のレンダリングサイクルと完全に一致する方法で状態を更新する
4. 予測可能性: 状態更新の動作がより明確で予測可能になる

### 5. 動的なフィールド更新を可能にする - Very Good

`useState`でオブジェクトを管理するという表題から逸れる話だが、以下のように修正すると尚良い。

```tsx
// handleNameとhandleAgeを共通化した関数
const handleChange = (field) => (e) => {
  setAnswer(prev => ({
    ...prev,
    [field]: e.target.value
  }));
};

return (
  <div>
    <form>
      <input
        type='text'
        value={answer.name}
        placeholder='お名前'
        onChange={handleChange('name')}
      />
      <input
        type='text'
        value={answer.age}
        placeholder='年齢'
        onChange={handleChange('age')}
      />
    </form>
  </div>
);
```
