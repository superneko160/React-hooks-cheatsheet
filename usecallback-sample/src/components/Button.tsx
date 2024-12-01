import React from 'react'

type Props = {
  children: string
  handleFunction: () => void
}

const Button = (props: Props) => {
  console.count(`${props.children}ボタン`)
  return (
    <button type='button' onClick={props.handleFunction}>
      {props.children}
    </button>
  )
}

export default React.memo(Button)
