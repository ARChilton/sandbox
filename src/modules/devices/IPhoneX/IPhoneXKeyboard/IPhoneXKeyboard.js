import React from 'react'
import { css } from 'react-emotion'
import keyboardImg from './keyboard.png'

const keyboardStyle = css `
position: absolute;
bottom:0px;
left:0px;
right:0px;
`

const Keyboard = () => (
  <div>
    <img src={keyboardImg} className={keyboardStyle} alt="IPhoneX keyboard" />
  </div>
)

export default Keyboard
