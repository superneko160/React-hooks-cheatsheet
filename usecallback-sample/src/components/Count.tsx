import React from 'react'

type Props = {
  count: number
}

const Count = (props: Props) => {
  console.count('カウント')
  return <span>{props.count}</span>
}

export default React.memo(Count)
