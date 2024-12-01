import { useState, useEffect } from 'react'

/**
 * WebAPIからJSONデータを取得するカスタムフック
 * @param {string} url
 */
const useFetchData = (url: string) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      let data = []
      try {
        const response = await fetch(url)
        data = await response.json()
      } catch (error) {
        console.error(error)
      }
      setData(data)
    }

    fetchPost()
  })

  return { data }
}

export default useFetchData
