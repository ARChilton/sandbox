import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/devices.css'
import IPhoneXStatusBar from './IPhoneXStatusBar/IPhoneXStatusBar'
import IPhoneXKeyboard from './IPhoneXKeyboard/IPhoneXKeyboard'

const IPhoneX = ({ children, keyboard }) => (
  <div style={{ margin: 'auto' }}>
    <div className="marvel-device iphone-x">
      <div className="notch">
        <div className="camera" />
        <div className="speaker" />
      </div>
      <div className="top-bar" />
      <div className="sleep" />
      <div className="bottom-bar" />
      <div className="volume" />
      <div className="overflow">
        <div className="shadow shadow--tr" />
        <div className="shadow shadow--tl" />
        <div className="shadow shadow--br" />
        <div className="shadow shadow--bl" />
      </div>
      <div className="inner-shadow" />
      <div className="screen">
        <IPhoneXStatusBar />
        {children}
        {keyboard ? <IPhoneXKeyboard /> : null}
      </div>
    </div>
  </div>
)

IPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
}

IPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
}

export default IPhoneX
