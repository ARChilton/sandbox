import React from 'react'
import PropTypes from 'prop-types'
import IPhoneXStatusBar from './IPhoneXStatusBar/IPhoneXStatusBar'
import IPhoneXKeyboard from './IPhoneXKeyboard/IPhoneXKeyboard'
import IPhoneXToolbar from './IPhoneXToolbar/IPhoneXToolbar'
import { IPhoneXDisplayNoneForSmallDevices, IPhoneXNotch, IPhoneXSleepButton, IPhoneXCamera, IPhoneXSpeaker, IPhoneXTopBar, IPhoneXBottomBar, IPhoneXVolumeButton, IPhoneXOverflow, IPhoneXShadowTopRight, IPhoneXShadowTopLeft, IPhoneXShadowBottomRight, IPhoneXShadowBottomLeft, IPhoneXInnerShadow, IPhoneXScreen, ScreenOnlyIPhoneX } from './IPhoneXComponents/IPhoneXComponents'
import SkipDemo from './SkipDemo/SkipDemo'

const IPhoneX = ({
  children, keyboard, toolbarTitle, className, toolbar,
}) =>
  (
    <div style={{ margin: 'auto' }} className={className}>
      <IPhoneXDisplayNoneForSmallDevices>
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
          {toolbar ? <IPhoneXToolbar centerChildren={toolbarTitle} rightChildren={<SkipDemo />} /> : null}
          {children}

          {keyboard ? <IPhoneXKeyboard /> : null}
        </IPhoneXScreen>
      </IPhoneXDisplayNoneForSmallDevices>
      <ScreenOnlyIPhoneX keyboard={keyboard} toolbarTitle={toolbarTitle} toolbar>
        {children}
      </ScreenOnlyIPhoneX>

    </div>

  )

IPhoneX.propTypes = {
  children: PropTypes.node,
  keyboard: PropTypes.bool,
  toolbarTitle: PropTypes.node,
  className: PropTypes.string,
  toolbar: PropTypes.bool,
}

IPhoneX.defaultProps = {
  children: 'Nothing to see here',
  keyboard: false,
  toolbarTitle: null,
  className: null,
  toolbar: false,
}

export default IPhoneX
