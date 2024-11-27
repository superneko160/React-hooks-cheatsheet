# useImperativeHandle

親コンポーネントが子コンポーネントの内部メソッドを呼び出せるようにするフック。`useImperativeHandle`により、コンポーネントの内部実装を隠しつつ、親に特定の機能だけを公開できる。

## 構文

### 親コンポーネントからrefを渡す

```tsx
<Child ref={childRef} />
```

### 子コンポーネントでuseImperativeHandleを使用

```tsx
import React, { useImperativeHandle, forwardRef } from 'react'

export const Child = forwardRef((props, ref) => {

  // useImerativeHandleで親のrefから参照できる値を指定
  useImperativeHandle(ref, () => ({
    showMessage: () => {
        // showMessageメソッドの処理
    },
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})
```

ここで`ref`は親コンポーネントから渡されたものであり、その`ref`に対してshowMessageメソッドを定義している。  
このshowMessageメソッドは、親コンポーネントで呼び出せる。  

`forwardRef`は、親コンポーネントに対して DOM ノードを`ref`として公開できるようにする命令。  

子では、以下のように`useRef`を利用し`ref`を扱う。

```tsx
export const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)

  const onClick = () => {
    if (childRef.current !== null) {
      // 子のuseImerativeHandleで指定した値を参照
      childRef.current.showMessage()
    }
  }

  return (
    // ...
  )
}
```

## 概要

`useImperativeHandle`を利用することで子が持つデータを参照したり、子で定義されている関数を呼び出せる。  
具体的には、子が`useImperativeHandle`して公開した関数を、refを通じて親が利用する。  
親コンポーネントが子コンポーネントに依存するため、頻繁には利用されない。多くのケースでは`props`で代用できる。
