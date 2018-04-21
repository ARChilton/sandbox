import React from 'react'
import PropTypes from 'prop-types'
import IPhoneXStatusBar from './IPhoneXStatusBar/IPhoneXStatusBar'
import IPhoneXKeyboard from './IPhoneXKeyboard/IPhoneXKeyboard'
import IPhoneXToolbar from './IPhoneXToolbar/IPhoneXToolbar'
import { IPhoneXDevice, IPhoneXNotch, IPhoneXSleepButton, IPhoneXCamera, IPhoneXSpeaker, IPhoneXTopBar, IPhoneXBottomBar, IPhoneXVolumeButton, IPhoneXOverflow, IPhoneXShadowTopRight, IPhoneXShadowTopLeft, IPhoneXShadowBottomRight, IPhoneXShadowBottomLeft, IPhoneXInnerShadow, IPhoneXScreen } from './IPhoneXComponents/IPhoneXComponents'

const IPhoneX = ({
  children, keyboard, toolbarTitle, className,
}) =>
  (
    <div style={{ margin: 'auto' }} className={className}>
      <IPhoneXDevice>
        <IPhoneXNotch>
          <IPhoneXCamera />
          <IPhoneXSpeaker />
        </IPhoneXNotch>
        <IPhoneXTopBar />
        <IPhoneXSleepButton />
        <IPhoneXBottomBar />
        <IPhoneXVolumeButton />
        <IPhoneXOverflow>
          <IPhoneXShadowTopRight />
          <IPhoneXShadowTopLeft />
          <IPhoneXShadowBottomRight />
          <IPhoneXShadowBottomLeft />
        </IPhoneXOverflow>
        <IPhoneXInnerShadow />
        <IPhoneXScreen>
          <IPhoneXStatusBar />
          <IPhoneXToolbar centerChildren={toolbarTitle} />
          {children}

          {keyboard ? <IPhoneXKeyboard /> : null}
        </IPhoneXScreen>
      </IPhoneXDevice>

    </div>

  )

IPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
  toolbarTitle: PropTypes.node,
  className: PropTypes.string,
}

IPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
  toolbarTitle: null,
  className: null,
}

export default IPhoneX
