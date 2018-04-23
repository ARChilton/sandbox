import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import IPhoneXToolbar from '../../IPhoneXToolbar/IPhoneXToolbar'
import IPhoneXKeyboard from '../../IPhoneXKeyboard/IPhoneXKeyboard'
import IPhoneXStatusBar from '../../IPhoneXStatusBar/IPhoneXStatusBar'
import { IPhoneXScreen } from '../IPhoneXComponents'
import SkipDemo from '../../SkipDemo/SkipDemo'


const SmallScreenIPhoneX = ({
  children, keyboard, toolbarTitle, className, toolbar,
}) =>
  (
    <div className={className}>
      <IPhoneXScreen>
        <IPhoneXStatusBar />
        {toolbar ? <IPhoneXToolbar centerChildren={toolbarTitle} rightChildren={<SkipDemo />} /> : null}
        {children}
        {keyboard ? <IPhoneXKeyboard /> : null}
      </IPhoneXScreen>
      {/* </IPhoneXThinDevice> */}
    </div>
  )

SmallScreenIPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
  toolbarTitle: PropTypes.string,
  className: PropTypes.string,
  toolbar: PropTypes.bool,
}

SmallScreenIPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
  toolbarTitle: null,
  className: null,
  toolbar: false,
}

const DefaultSmallScreenIphoneX = styled(SmallScreenIPhoneX) `

`

export default DefaultSmallScreenIphoneX
