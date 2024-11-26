import type React from 'react'
import { useState, useRef } from 'react'

const UPLOAD_DELAY = 5000

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const ImageUploader = () => {
  // 隠されたinput要素にアクセスするためのref
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  // 選択されたファイルデータを保持するref
  const fileRef = useRef<File | null>(null)

  const [message, setMessage] = useState<string | null>('')

  /**
   * 「画像ファイル選択」テキスト押下時
   */
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // inputのDOMにアクセスして、クリックイベントを発火、ダイアログを開く(2.DOMの参照)
      inputImageRef.current.click()
    }
  }

  /**
   * ファイル選択時
   */
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      // fileRef.currentに値を保存
      // fileRef.currentが変化しても再描画はされない
      fileRef.current = files[0]
    }
  }

  /**
   * 「アップロード」ボタン押下時
   */
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // 通常はここでAPIを呼んで、ファイルをサーバにアップロード（ここでは疑似的に一定期間待機）
      await sleep(UPLOAD_DELAY)
      setMessage(`${fileRef.current.name} has been sccessfully uploaded`)
    }
  }

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        画像ファイル選択
      </p>
      <input
        type='file'
        ref={inputImageRef}
        accept='image/'
        onChange={onChangeImage}
        style={{ visibility: 'hidden' }}
      />
      <br />
      <button type='button' onClick={onClickUpload}>
        アップロード
      </button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}
