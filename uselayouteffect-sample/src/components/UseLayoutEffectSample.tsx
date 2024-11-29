import React, { useLayoutEffect, useState } from 'react'

// 待ち時間の設定
const sleep = (waitMsec: number) => {
  const startMsec = new Date().getTime()
  while (new Date().getTime() - startMsec < waitMsec);
}

export const UseLayoutEffectSample = () => {
  const [text, setText] = useState('')
  // 画面描画前に実行
  useLayoutEffect(() => {
    sleep(5000) // 5秒待機
    setText('表示されました！') // テキストの設定
  }, [])

  // text:表示されました！が同じ5秒後に表示される
  return <p>{`text:${text}`}</p>
}
