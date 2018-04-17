import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/devices.css'
import IPhoneXStatusBar from './IPhoneXStatusBar/IPhoneXStatusBar'
import IPhoneXKeyboard from './IPhoneXKeyboard/IPhoneXKeyboard'
import IPhoneXToolbar from './IPhoneXToolbar/IPhoneXToolbar'

const IPhoneX = ({ children, keyboard, toolbarTitle }) => (
  <div style={{ margin: 'auto' }}>

    <div className="marvel-device iphone-x" >
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
        <IPhoneXToolbar centerChildren={toolbarTitle} />

        {/* <div style={keyboard ? { 'max-height': '458px', height: '100%', 'overflow-y': 'scroll' } : ''}> */}
        {children}
        {/* </div> */}
        {keyboard ? <IPhoneXKeyboard /> : null}
      </div>
    </div>

  </div>
)

IPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
  toolbarTitle: PropTypes.node,
}

IPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
  toolbarTitle: null,
}

export default IPhoneX
