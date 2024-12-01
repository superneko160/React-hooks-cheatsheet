import React, { useEffect, useState } from 'react'

// 待ち時間の設定
const sleep = (waitMsec: number) => {
  const startMsec = new Date().getTime()
  while (new Date().getTime() - startMsec < waitMsec);
}

export const UseEffectSample = () => {
  const [text, setText] = useState('')

  // 画面描画後に実行
  useEffect(() => {
    sleep(5000) //5秒待機
    setText('表示されました！') // テキストの設定
  }, [])

  // text:が先に表示され、5秒後に表示されました！も表示される
  return <p>{`text:${text}`}</p>
}